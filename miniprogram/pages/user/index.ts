// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: getApp().globalData.userInfo,
    css: {
      bg: `background:url(../../assets/image/login/login.jpg) no-repeat `
    }
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {




    this.setData({ userInfo: getApp().globalData.userInfo })

  },


  //跳转到登录页面 
  moveToLogin() {
    if (!getApp().globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }

  },
  //用户点击静态页面提示
  openTips() {
    wx.showToast({

      title: '抱歉，由于时间和接口问题所以该部分功能仅为静态展示',

      icon: 'none',

      duration: 2000//持续的时间

    })
  }


})