interface catsBuffer {
  time: number
  data: Array<any>
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //页面数据
    sidebarList: [],
    //右侧详情数据
    containerList: [],
    //侧边栏索引
    activeIndex: 0,
    //设置缓存时间
    bufferTime: 30,
    //滚动条离页面顶部距离
    topHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(): void {

  },
  //改变左侧当行栏 
  changeSideBar(event: Object) {
    this.getContainerList((event as any).detail)
  },
  //因接口数据量大 返回时间长故使用本地缓存
  checkBuffer(): Boolean | catsBuffer | any {
    const time: number = new Date().getTime()
    const cats: catsBuffer = wx.getStorageSync('cats')
    if (Object.keys(cats).length && time - cats.time <= this.data.bufferTime * 1000) {
      return cats
    } else {
      return false
    }
  },
  //获取页面数据
  getSidebarList() {
    getApp().request('/categories').then((res: any) => {
      if (res.statusCode == 200) {
        this.setData({ sidebarList: res.data.message })

        wx.setStorageSync("cats", { time: new Date().getTime(), data: res.data.message })
      this.getContainerList(0)

      }
    })

  },
  //获取右侧导航栏数据
  getContainerList(activeIndex: number): void {
    if (this.data.sidebarList.length) {

      this.setData({ containerList: (this.data.sidebarList[activeIndex] as any).children, topHeight: 0 })

    }
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
    if (this.checkBuffer() != false) {
      this.setData({ sidebarList: this.checkBuffer().data })
    } else {
      this.getSidebarList()
    }

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

})