export interface FullScreenViewProps {
    children?: React.ReactNode;
    /**
     * 配置项
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
    title?: string 
    onClose?: () => void
    copy?: () => Promise<void>
}
