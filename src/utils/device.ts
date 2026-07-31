/**
 * 设备类型枚举
 */
export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}

/**
 * 判断当前设备类型
 * @returns {DeviceType} 设备类型
 */
export function getDeviceType(): DeviceType {
  // 获取用户代理字符串
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // 获取屏幕尺寸
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const maxDimension = Math.max(screenWidth, screenHeight);
  const minDimension = Math.min(screenWidth, screenHeight);
  
  // 平板设备的用户代理特征
  const isTabletByUserAgent = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk)/i.test(userAgent);
  
  // 手机设备的用户代理特征
  const isMobileByUserAgent = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent);
  
  // 首先检查用户代理字符串
  if (isTabletByUserAgent) {
    return DeviceType.TABLET;
  }
  
  if (isMobileByUserAgent) {
    return DeviceType.MOBILE;
  }
  
  // 如果用户代理无法确定，则基于屏幕尺寸判断
  // 平板通常有较大的屏幕，但比桌面小
  // 常见的平板最小宽度在 600px-768px 之间
  if (minDimension >= 600 && maxDimension < 1200) {
    return DeviceType.TABLET;
  }
  
  // 手机通常屏幕较小
  if (maxDimension < 600) {
    return DeviceType.MOBILE;
  }
  
  // 默认返回桌面设备
  return DeviceType.DESKTOP;
}

/**
 * 判断是否为移动设备（手机或平板）
 * @returns {boolean} 是否为移动设备
 */
export function isMobileDevice(): boolean {
  const deviceType = getDeviceType();
  return deviceType === DeviceType.MOBILE || deviceType === DeviceType.TABLET;
}

/**
 * 判断是否为手机
 * @returns {boolean} 是否为手机
 */
export function isMobile(): boolean {
  return getDeviceType() === DeviceType.MOBILE;
}

/**
 * 判断是否为平板
 * @returns {boolean} 是否为平板
 */
export function isTablet(): boolean {
  return getDeviceType() === DeviceType.TABLET;
}

/**
 * 判断是否为桌面设备
 * @returns {boolean} 是否为桌面设备
 */
export function isDesktop(): boolean {
  return getDeviceType() === DeviceType.DESKTOP;
}

/**
 * 获取设备信息对象
 * @returns {Object} 包含设备类型和详细信息的对象
 */
export function getDeviceInfo() {
  const deviceType = getDeviceType();
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  return {
    type: deviceType,
    userAgent,
    screen: {
      width: screenWidth,
      height: screenHeight,
      orientation: screenWidth > screenHeight ? 'landscape' : 'portrait'
    },
    isMobile: deviceType === DeviceType.MOBILE,
    isTablet: deviceType === DeviceType.TABLET,
    isDesktop: deviceType === DeviceType.DESKTOP,
    isMobileDevice: deviceType === DeviceType.MOBILE || deviceType === DeviceType.TABLET
  };
}