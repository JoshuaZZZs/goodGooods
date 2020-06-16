
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    swiperdata: [],
    //导航栏数据
    navList: [],
    //楼层图数据
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(): void {
    this.getswiperList()
    this.getNavList()
    this.getFloorList()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(): void {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(): void {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide(): void {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload(): void {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh(): void {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(): void {

  },
  //获取轮播图数据
  getswiperList(): void {
    getApp().request('/home/swiperdata').then((res: any) => {
      if (res.statusCode == 200) {
        this.setData({ swiperdata: res.data.message })
      }
    })
  },
  //获取导航栏数据
  getNavList(): void {
    getApp().request('/home/catitems').then((res: any) => {
      if (res.statusCode == 200) {
        this.setData({ navList: res.data.message })
      }
    })
  },
  //获取楼层数据
  getFloorList(): void {
    getApp().request('/home/floordata').then((res: any) => {
      if (res.statusCode == 200) {
        this.setData({ floorList: res.data.message })
      }
    })
  }
})