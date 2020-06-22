import wxSetting from '../../utils/wxSettings'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    condition: '',
    cart: wx.getStorageSync("carts"),
    result: []
  },
  onChange(event: any) {
    this.setData({
      result: event.detail,
    });
  },
  //获取用户收货地址
  async getAdress() {
    const setting = new wxSetting()

    try {
      //获取所有权限状态
      const roleStatus = await setting.getSetting();
      //  判断是否有地址权限
      if (roleStatus.authSetting["scope.address"] === false) {
        await setting.openSetting();
      }
      //  调用获取收货地址的 api
      const address = await setting.chooseAddress();
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;

      // 放入缓存中
      wx.setStorageSync("address", address);
      this.setData({ condition: address.all })

    } catch (error) {
      console.error(error)
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**onLoad(options):void {
    
  },*/

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(): void {
    //do something when page ready
  },







})