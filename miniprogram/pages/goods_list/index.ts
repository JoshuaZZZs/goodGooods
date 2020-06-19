Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    params: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10,
    },
    hasMore: true,
    isLoading: false,
    goodsList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options): void {
    this.data.params.cid = options.cid || ''
    this.getGoodsList()
  },
  getGoodsList(): void {
    this.data.isLoading = true
    getApp().request('/goods/search', this.data.params).then((res: any) => {
      this.data.isLoading = false

      if (res.statusCode == 200) {
        this.setData({ goodsList: this.data.goodsList.concat(res.data.message.goods) })
        wx.stopPullDownRefresh()
        if (Math.ceil(res.data.message.total / this.data.params.pagesize) > this.data.params.pagenum) {
          this.data.params.pagenum += 1
        } else {
          this.setData({hasMore:false})
         
        }
      }
    })
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
    this.setData({
      hasMore: true,
      isLoading: false,
      goodsList: []
    })
    this.data.params.pagenum = 1
    this.getGoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(): void {

    if (this.data.hasMore && !this.data.isLoading) {
      this.getGoodsList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(): Object {
    return {}
  }
})