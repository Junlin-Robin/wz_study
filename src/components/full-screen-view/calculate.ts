import { calculateOriginAndTranslate } from '../../utils/DOM-tranform';
import { SCALE_FACTOR, SCALE_MAX_RATIO, SCALE_MIN_RATIO } from './constants';

export interface Position {
    x: number;
    y: number;
}

export interface MousePosition extends Position {
    deltaY: number;
}

/**滚轮滚动时候，计算缩放比例 */
export function handleMouseWheelEvent(
    params: {
        wheelEvent: WheelEvent;
        lastScale: number;
    },
    options?: { scaleFactor: number; scaleMaxRatio: number; scaleMinRatio: number },
) {
    const { wheelEvent, lastScale } = params;

    const scaleOptions = Object.assign(
        {
            scaleFactor: SCALE_FACTOR,
            scaleMaxRatio: SCALE_MAX_RATIO,
            scaleMinRatio: SCALE_MIN_RATIO,
        },
        options,
    );

    const isZoomIn = wheelEvent.deltaY > 0;

    const isNotZoom = wheelEvent.deltaY === 0 || wheelEvent.deltaY === -0;

    if (isNotZoom) {
        return lastScale;
    } else if (isZoomIn) {
        const newScale = lastScale + scaleOptions.scaleFactor;
        return newScale > scaleOptions.scaleMaxRatio ? scaleOptions.scaleMaxRatio : newScale;
    } else {
        const newScale = lastScale - scaleOptions.scaleFactor;
        return newScale < scaleOptions.scaleMinRatio ? scaleOptions.scaleMinRatio : newScale;
    }
}

/**
 * 变化的基准点改变后，重新计算新的基准点和位移，达到视觉上图片保持不动的效果
 */
export function reCalculateTransformWhenOriginChanged(params: {
    wheelEvent: WheelEvent;
    lastOrigin: Position;
    lastTranslate: Position;
    zoomNode: HTMLElement;
    scale: number;
}) {
    const { wheelEvent, lastOrigin, lastTranslate, zoomNode, scale } = params;
    //没有传入操作的DOM节点，直接返回传入值，不做计算
    if (!zoomNode) {
        return {
            newOrigin: lastOrigin,
            newTranslatePosition: lastTranslate,
        };
    }
    const nodeClientInfo = zoomNode.getBoundingClientRect();

    const mousePosition = { x: wheelEvent.clientX, y: wheelEvent.clientY, deltaY: wheelEvent.deltaY };

    return calculateOriginAndTranslate(mousePosition, nodeClientInfo, scale, lastOrigin, lastTranslate);
}
