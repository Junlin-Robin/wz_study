import { CopyOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Divider, message, Popover, Space, Typography } from 'antd';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import FullScreenView from '../full-screen-view';
import RenderMermaidSVG, { type RenderMermaidSvgRef } from './render-mermaid-svg';

export interface IProps {
    /**
     * mermaid语法
     */
    mermaid: string;
    /**
     * 缩放配置
     */
    options?: {
        /**
         * 放大/缩小 因子
         */
        scaleFactor?: number;
        /**
         * 最大放大倍率
         */
        scaleMaxRatio?: number;
        /**
         * 最小缩小倍率
         */
        scaleMinRatio?: number;
    };
    /**
     * 标题
     */
    title?: string;
}

/**
 * 全屏查看 mermaid 图片、复制、放大等功能组件
 * @author Junlin-W
 */
export default function FullScreenMermaid(props: IProps) {
    const { mermaid, options, title } = props;
    const renderMermaidSVGRef = useRef<RenderMermaidSvgRef>(null);
    const [isShowFullScreen, setIsShowFullScreen] = useState<boolean>(false);

    const openFullScreen = useMemoizedFn(() => setIsShowFullScreen(true));
    const closeFullScreen = useMemoizedFn(() => setIsShowFullScreen(false));

    //复制图片到剪贴板
    const copy = useMemoizedFn(async () => {
        const messageId = nanoid();
        message.info({ key: messageId, content: '复制中...' });
        try {
            await renderMermaidSVGRef.current?.copyToClipBoardAsPng();
            message.destroy(messageId);
            message.success('复制成功');
        } catch (error) {
            message.destroy(messageId);
            message.error((error as Error).message || (error as { msg?: string }).msg || '复制失败，请稍后重试');
        }
    });

    return (
        <>
            <Popover
                content={
                    <Space align="center" size={0}>
                        <Typography.Text strong>操作：</Typography.Text>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Button icon={<CopyOutlined />} type="text" onClick={copy} />
                            <Button icon={<FullscreenOutlined />} type="text" onClick={openFullScreen} />
                        </Space>
                    </Space>
                }
                arrow={false}
            >
                <div style={{ backgroundColor: '#fff' }} onDoubleClick={openFullScreen}>
                    <RenderMermaidSVG mermaidCode={mermaid} ref={renderMermaidSVGRef} />
                </div>
            </Popover>
            {isShowFullScreen && (
                <FullScreenView
                    copy={copy}
                    children={<RenderMermaidSVG mermaidCode={mermaid} />}
                    options={options}
                    title={title}
                    onClose={closeFullScreen}
                />
            )}
        </>
    );
}
