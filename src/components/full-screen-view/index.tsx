import { useEffect, useMemo, useRef, useState } from 'react';

import { CloseOutlined, DownloadOutlined, PicCenterOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';

import type { FullScreenViewProps } from './type';

import { useMemoizedFn, useMount } from 'ahooks';
import { Button, Divider, message, Typography } from 'antd';
import styles from './index.module.less';

import { handleMouseWheelEvent, reCalculateTransformWhenOriginChanged } from './calculate';
import { SCALE_FACTOR, SCALE_MAX_RATIO, SCALE_MIN_RATIO } from './constants';

export default function FullScreenView(props: FullScreenViewProps) {
    const { children, options, title, onClose, copy } = props;

    // 缩放配置
    const scaleOptions = useMemo(
        () => ({
            scaleFactor: options?.scaleFactor || SCALE_FACTOR,
            scaleMaxRatio: options?.scaleMaxRatio || SCALE_MAX_RATIO,
            scaleMinRatio: options?.scaleMinRatio || SCALE_MIN_RATIO,
        }),
        [options],
    );

    //滑动元素
    const ref = useRef<HTMLDivElement>(null);
    //鼠标是否正在滑动
    const mouseWheeling = useRef<boolean>(false);
    //缩放比例
    const [scale, setScale] = useState(1);
    //变化原点
    const [transferOrigin, setTransferOrigin] = useState({ x: 0, y: 0 });
    //平移配置
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    //回调计数器，用于重置mouseWheeling
    const timer = useRef<any | null>(null);

    useMount(() => {
        const nodePosition = ref.current?.getBoundingClientRect();
        //设置缩放中心点
        setTransferOrigin({ x: (nodePosition?.width ?? 0) / 2, y: (nodePosition?.height ?? 0) / 2 });
    });

    const handleMouseWheelEventInner = useMemoizedFn((event: WheelEvent) => {
        if (!mouseWheeling.current) {
            //第一次滑动事件，这时，仅调整translate，不做放大效果
            const { newOrigin, newTranslatePosition } = reCalculateTransformWhenOriginChanged({
                wheelEvent: event,
                lastOrigin: transferOrigin,
                lastTranslate: translate,
                scale,
                zoomNode: ref.current!,
            });
            setTransferOrigin(newOrigin);
            setTranslate(newTranslatePosition);
            mouseWheeling.current = true;
            return;
        } else {
            if (timer.current) clearTimeout(timer.current);
            //持续滑动过程中
            const newScale = handleMouseWheelEvent({ wheelEvent: event, lastScale: scale }, scaleOptions);
            const isMaxScale = newScale >= scaleOptions.scaleMaxRatio;
            const isMinScale = newScale <= scaleOptions.scaleMinRatio;
            if (isMinScale) message.warning('已经达到最小的缩放比例');
            if (isMaxScale) message.warning('已经达到最大的缩放比例');
            setScale(newScale);
            timer.current = setTimeout(() => {
                mouseWheeling.current = false;
            }, 500);
        }
    });

    const clickDownMouseRelativeToNode = useRef<{ x: number; y: number } | null>(null);
    const clickDownNodeTranslate = useRef<{ x: number; y: number } | null>(null);

    const [isDrag, setIsDrag] = useState(false);

    const handleClickDown = useMemoizedFn((event: React.MouseEvent) => {
        setIsDrag(true);
        clickDownMouseRelativeToNode.current = { x: event.clientX, y: event.clientY };
        clickDownNodeTranslate.current = translate;
    });

    const handleClickUp = useMemoizedFn(() => {
        setIsDrag(false);
        clickDownMouseRelativeToNode.current = null;
    });

    const handleMouseMove = useMemoizedFn((event: MouseEvent) => {
        const movePosition = {
            x: event.clientX - (clickDownMouseRelativeToNode.current?.x ?? 0),
            y: event.clientY - (clickDownMouseRelativeToNode.current?.y ?? 0),
        };
        setTranslate({
            x: (clickDownNodeTranslate.current?.x ?? 0) + movePosition.x / scale,
            y: (clickDownNodeTranslate.current?.y ?? 0) + movePosition.y / scale,
        });
    });

    const resetView = useMemoizedFn(() => {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
        Promise.resolve().then(() => {
            const nodePosition = ref.current?.getBoundingClientRect();
            setTransferOrigin({ x: (nodePosition?.width ?? 0) / 2, y: (nodePosition?.height ?? 0) / 2 });
        });
    });

    const zoomIn = useMemoizedFn(() => {
        const newScale = scale + scaleOptions.scaleFactor;
        const isMaxScale = newScale >= scaleOptions.scaleMaxRatio;
        if (isMaxScale) message.warning('已经达到最大的缩放比例');
        setScale(isMaxScale ? scaleOptions.scaleMaxRatio : newScale);
    });

    const zoomOut = useMemoizedFn(() => {
        const newScale = scale - scaleOptions.scaleFactor;
        const isMinScale = newScale <= scaleOptions.scaleMinRatio;
        if (isMinScale) message.warning('已经达到最小的缩放比例');
        setScale(isMinScale ? scaleOptions.scaleMinRatio : newScale);
    });

    useEffect(() => {
        //隐藏滚动条，防止滑动鼠标页面偏移
        document.body.style.overflowY = 'hidden';
        //设置监听鼠标滚轮事件，处理元素放大缩小效果
        window.addEventListener('wheel', handleMouseWheelEventInner);

        return () => {
            //解绑监听事件，还原滚动条
            document.body.style.overflowY = '';
            window.removeEventListener('wheel', handleMouseWheelEventInner);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (isDrag) {
            window.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleClickUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleClickUp);
        }
    }, [isDrag]);

    return (
        <div id="wz_study-cover-layer" className={styles['cover-layer']}>
            <div id="wz_study-operate-top-bar" className={styles['operate-top-bar']}>
                <div className={styles['operate-top-bar-container']}>
                    <Typography.Text
                        strong
                        style={{
                            flexBasis: '100px',
                            flexShrink: 0,
                            flexGrow: 1,
                        }}
                        ellipsis
                    >
                        {title || 'image'}
                    </Typography.Text>
                    <div>
                        <Button icon={<ZoomInOutlined />} type="text" onClick={zoomIn} />
                        <Button icon={<ZoomOutOutlined />} type="text" onClick={zoomOut} />
                        <Button icon={<PicCenterOutlined />} type="text" onClick={resetView} />
                        <Divider type="vertical" />
                        <Button icon={<DownloadOutlined />} type="text" onClick={copy} />
                        <Divider type="vertical" />
                        <Button icon={<CloseOutlined />} type="text" onClick={() => onClose?.()} />
                    </div>
                </div>
            </div>
            <div id="wz_study-operate-area" className={styles['operate-area']}>
                <div id="wz_study-move-area" className={styles['move-area']}>
                    <div
                        id="wz_study-children-container"
                        className={styles['children-container']}
                        style={{
                            transform: `scale(${scale}) translateX(${translate.x}px) translateY(${translate.y}px)`,
                            transformOrigin: `${transferOrigin.x}px ${transferOrigin.y}px`,
                            cursor: isDrag ? 'grabbing' : 'grab',
                        }}
                        ref={ref}
                        onMouseDown={handleClickDown}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
