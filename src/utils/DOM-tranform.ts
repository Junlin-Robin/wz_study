/**
 * @abstract ‼️ 改文件到导出的计算方法只适配css变换中先 scale 再 translate 写法
 */
export interface Position {
    x: number;
    y: number;
}

export interface MousePosition extends Position {
    deltaY: number;
}

/**
 * 计算元素初始位置信息
 */
export function calcuteNodeOriginPsition(
    nodePosition: DOMRect, //当前元素位置信息，通过 getBoundingClientRect() 方法获取
    scale: number, //当前元素放大尺寸
    transferOrigin: Position, //当前变换原点
    translate: Position, //当前平移信息
) {
    //初始元素尺寸大小
    const nodeOriginWidth = nodePosition.width / scale;
    const nodeOriginHeight = nodePosition.height / scale;

    //初始元素位置
    let nodeOriginLeft: number = 0, nodeOriginTop: number = 0;
    const transferOriginLeftToNode = transferOrigin.x < nodePosition.left; //变换原点是否在当前元素左侧
    const transferOriginTopToNode = transferOrigin.y < nodePosition.top; //变换原点是否在当前元素上侧
    //变换原点在元素不同位置，计算方式会有不同
    if (transferOriginLeftToNode) {
        //左侧缩放中元素和变换原点距离随缩放成反比
        //计算方式：缩放原点 +（当前元素左顶点 - 变换原点）* 缩放比例 - 平移横轴距离
        nodeOriginLeft = transferOrigin.x + Math.abs(nodePosition.left - transferOrigin.x) * scale - translate.x;
    } else {
        //右侧缩放中元素和变换原点距离随缩放成正比
        //计算方式：缩放原点 -（当前元素左顶点 - 变换原点）/ 缩放比例 - 平移横轴距离
        nodeOriginLeft = transferOrigin.x - Math.abs(nodePosition.left - transferOrigin.x) / scale - translate.x;
    }
    //同理类比横轴计算
    if (transferOriginTopToNode) {
        nodeOriginTop = transferOrigin.y + Math.abs(nodePosition.top - transferOrigin.y) * scale - translate.y;
    } else {
        nodeOriginTop = transferOrigin.y - Math.abs(nodePosition.top - transferOrigin.y) / scale - translate.y;
    }
    //保留两位小数，目前可能有-0，但不影响计算，不处理
    return {
        nodeOriginLeft: Number(nodeOriginLeft.toFixed(2)),
        nodeOriginTop: Number(nodeOriginTop.toFixed(2)),
        nodeOriginWidth: Number(nodeOriginWidth.toFixed(2)),
        nodeOriginHeight: Number(nodeOriginHeight.toFixed(2)),
    };
}

/**
 * @abstract 改变变化原点后，重新计算变化原点和平移
 * @abstract 基于css的transform做变换，元素每次变化计算是基于「初始位置信息」
 */
export function calculateOriginAndTranslate(
    mousePosition: MousePosition,
    nodePosition: DOMRect,
    scale: number,
    lastTransferOrigin: Position,
    lastTranslate: Position,
    initalDomClientRect: DOMRect | null,
) {
    const nodeOriginPostion = { left: 0, top: 0 }; //初始元素位置信息
    //如果有传入元素初始位置信息，直接使用，否则每次重新计算
    if (initalDomClientRect) {
        nodeOriginPostion.left = initalDomClientRect.left;
        nodeOriginPostion.top = initalDomClientRect.top;
    } else {
        const revertNodeOriginPosition = calcuteNodeOriginPsition(nodePosition, scale, lastTransferOrigin, lastTranslate);
        nodeOriginPostion.left = revertNodeOriginPosition.nodeOriginLeft;
        nodeOriginPostion.top = revertNodeOriginPosition.nodeOriginTop;
    }
    const relativeMouseToNodeOriginLeftTop = {
        x: mousePosition.x - nodeOriginPostion.left,
        y: mousePosition.y - nodeOriginPostion.top,
    };
    //新变化原点
    const newOrigin = {
        x: Number(
            (relativeMouseToNodeOriginLeftTop.x).toFixed(2),
        ),
        y: Number(
            (relativeMouseToNodeOriginLeftTop.y).toFixed(2),
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
