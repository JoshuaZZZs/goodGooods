interface goodsItem {
  number: number,
  goodsDetail: any
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    caiId: '',
    goodsDetailData: {

    },
    isCollected: false,
    goods_introduce: '',
    carts: wx.getStorageSync('carts') || []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options): void {
    this.data.caiId = options.id || ''
    this.getGoodDetail()
  },
  addToCarts() {

    let carts = this.data.carts

    let index: number = carts.findIndex((item: goodsItem) => {

      return item.goodsDetail.goods_id === (this.data.goodsDetailData as any).goods_id
    })
    if (index == -1) {

      let goodsIitem: goodsItem = {
        number: 1,
        goodsDetail: this.data.goodsDetailData
      }

      carts.push(goodsIitem)
    } else {
      carts[index].number++
    }
    wx.setStorageSync('carts', carts)
    this.setData({ carts: wx.getStorageSync('carts') })
    wx.showToast({
      title: '添加成功',
      duration: 1500,
      mask: true,
    });
  },
  redirect() {
    wx.navigateTo({
      url: '/pages/cart/index'
    })
  },
  onClickButton() {
    console.log('点击按钮');
  },
  //改变收藏状态
  changeCollected() {
    this.setData({ isCollected: !this.data.isCollected })
  },
  //点击图片时全局查看
  checkDetail(e: any): void {
    let imagesURL: Array<string> = []
    for (const items of (this.data.goodsDetailData as any).pics) {
      imagesURL.push(items.pics_big_url)
    }
    wx.previewImage({
      current: e.currentTarget.dataset.cur.pics_big_url || '', // 当前显示图片的http链接
      urls: imagesURL // 需要预览的图片http链接列表
    })
  },
  //获取商品详情
  getGoodDetail(): void {
    let params: Object = {
      goods_id: this.data.caiId
    }
    getApp().request('/goods/detail', params).then((res: any) => {


      this.setData({ goodsDetailData: res.data.message })

      this.setData({ goods_introduce: (this.data.goodsDetailData as any).goods_introduce.replace(/\.webp/g, '.jpg') })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(): void {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(): Object {
    return {}
  }
})