Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  //获取用户信息
  getUserInfo(e: AnyObject) {
    if (e.detail.userInfo) {
      getApp().globalData.userInfo = e.detail.userInfo
      wx.navigateBack({ delta: 1 })
    }
  },
})