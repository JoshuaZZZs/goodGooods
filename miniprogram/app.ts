
App<IAppOption>({

  globalData: {
    cssSet: {
      // 主题颜色
      themColor: "#eb4450",
      bgColor: " #e8eaec",
      // 字体
      fontSize: " 28rpx",
      miniSize: " 20rpx",
      smallSize: "24rpx",
      middleSize: "28rpx",
      bigSize: "36rpx"
    }
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch(): void {

    wx.util = require('./utils/util')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  /**onShow (options):void {
    
  },*/

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  // onHide(): void {

  // },
  //全局挂载封装的request方法
  request: require('./request/reuqest'),

})
