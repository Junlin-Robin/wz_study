export interface Position {
    x: number;
    y: number;
}

export interface MousePosition extends Position {
    deltaY: number;
}

/**
 * 改变变化原点后，重新计算变化原点和平移
 */
export function calculateOriginAndTranslate(
    mousePosition: MousePosition,
    nodePosition: DOMRect,
    scale: number,
    lastTransferOrigin: Position,
    lastTranslate: Position,
) {
    const relativeMouseToNodeLeftTop = {
        x: (mousePosition.x - nodePosition.left) / scale,
        y: (mousePosition.y - nodePosition.top) / scale,
    };
    const nodeOriginiWidth = nodePosition.width / scale;
    const nodeOriginHeight = nodePosition.height / scale;
    //新变化原点
    const newOrigin = {
        x: Number(
            (relativeMouseToNodeLeftTop.x < 0
                ? 0
                : relativeMouseToNodeLeftTop.x > nodeOriginiWidth
                ? nodeOriginiWidth
                : relativeMouseToNodeLeftTop.x
            ).toFixed(2),
        ),
        y: Number(
            (relativeMouseToNodeLeftTop.y < 0
                ? 0
                : relativeMouseToNodeLeftTop.y > nodeOriginHeight
                ? nodeOriginHeight
                : relativeMouseToNodeLeftTop.y
            ).toFixed(2),
        ),
    };
    const newTranslatePosition = {
        x: Number(
            (
                ((newOrigin.x - lastTransferOrigin.x) / nodePosition.width) * (1 - 1 / scale) * nodePosition.width +
                lastTranslate.x
            ).toFixed(2),
        ),
        y: Number(
            (
                ((newOrigin.y - lastTransferOrigin.y) / nodePosition.height) * (1 - 1 / scale) * nodePosition.height +
                lastTranslate.y
            ).toFixed(2),
        ),
    };
    return { newOrigin, newTranslatePosition };
}
