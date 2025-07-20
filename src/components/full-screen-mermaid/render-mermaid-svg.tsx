import { useMemoizedFn, useMount } from 'ahooks';
import mermaidJS from 'mermaid';
import { nanoid } from 'nanoid';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface IProps {
    mermaidCode: string;
}

export interface RenderMermaidSvgRef {
    /**
     * 获取svg代码 
     * */
    getSvgCode: () => string | null | undefined;
    /**
     * 将svg转换为png图片格式，复制到系统剪贴板
     */
    copyToClipBoardAsPng: () => Promise<void>;
}

/**
 * 解析svg的属性，宽/高
 * @param svgString svg代码
 * @returns isValid-是否有效属性；width-宽度；height-高度
 */
function parseSvgAttributes(svgString) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, 'image/svg+xml');
        const svgEl = doc.querySelector('svg');
        if (!svgEl) return { isValid: false };

        let width: number = 0;
        let height: number = 0;

        // 尝试获取width/height属性
        const parseWidth = svgEl.getAttribute('width');
        const parseHeight = svgEl.getAttribute('height');
        
        // 处理带单位的值
        if (parseWidth && parseWidth.endsWith('px')) width = parseFloat(parseWidth.replace('px', ''));
        if (parseHeight && parseHeight.endsWith('px')) height = parseFloat(parseHeight.replace('px', ''));

        // 验证有效性
        if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
            return { isValid: true, width, height };
        }

        // 尝试从viewBox获取
        const viewBox = svgEl.getAttribute('viewBox');
        if (viewBox) {
            const parts = viewBox.split(' ').map(Number);
            if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
                return { isValid: true, width: parts[2], height: parts[3] };
            }
        }
    } catch (error) {
        console.error('解析SVG属性失败:', error);
    }
    
    return { isValid: false };
}

const RenderMermaidSVG = forwardRef<RenderMermaidSvgRef, IProps>((props, ref) => {
    const { mermaidCode } = props;
    //容器ref
    const containerRef = useRef<HTMLDivElement>(null);
    //svg代码
    const svgCode = useRef<string | null>(null);

    useMount(async () => {
        mermaidJS.initialize({
            startOnLoad: false,
            theme: 'default',
            flowchart: {
                curve: 'basis',
            },
            sequence: {
                actorMargin: 50,
            },
        });
        const mermaidRes = await mermaidJS.render(nanoid(), mermaidCode);
        svgCode.current = mermaidRes.svg;
        if (containerRef.current) containerRef.current.innerHTML = mermaidRes.svg;
    });

    const copyToClipBoardAsPng = useMemoizedFn(async () => {
        if (!svgCode.current) throw new Error('未获取到图片信息');

        // 1. 直接使用SVG字符串创建Data URL
        const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgCode.current!);


        // 2. 加载SVG图像
        const img = new Image();
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = svgDataUrl;
        });

        // 3. 获取设备像素比
        const dpr = window.devicePixelRatio || 1;

        // 4. 创建Canvas并设置实际像素尺寸（考虑设备像素比）
        const canvas = document.createElement('canvas');
        const width = parseSvgAttributes(svgCode.current)?.width  || img.naturalWidth * dpr;
        const height = parseSvgAttributes(svgCode.current)?.height || img.naturalHeight * dpr;

        // 设置Canvas的实际像素尺寸（考虑设备像素比）
        canvas.width = width * dpr;
        canvas.height = height * dpr;

        // 设置Canvas的CSS显示尺寸（保持与SVG一致）
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // 5. 调整绘图上下文的比例
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(dpr, dpr); // 缩放绘图上下文，确保内容清晰
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
        }

        // 6. 绘制SVG到Canvas
        ctx?.drawImage(img, 0, 0, width, height);

        // 5. 复制到剪贴板
        // 获取Canvas的Blob数据
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1.0));

        // 创建ClipboardItem对象
        const clipboardItem = new ClipboardItem({ 'image/png': blob as Blob });

        // 写入剪贴板
        await navigator.clipboard.write([clipboardItem]);
        return Promise.resolve();
    });

    useImperativeHandle(ref, () => ({
        getSvgCode: () => svgCode.current,
        copyToClipBoardAsPng,
    }));

    return <div ref={containerRef}></div>;
});

export default RenderMermaidSVG;


