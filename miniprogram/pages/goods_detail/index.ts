type goodsItem = {
  number: number,
  goodsDetail: any,
  goods_id: number,
  [propName: string]: any
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    caiId: <string>'',
    goodsDetailData: <goodsItem>{},
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

    const carts = this.data.carts

    const index: number = carts.findIndex((item: goodsItem) => {

      return item.goodsDetail.goods_id === (this.data.goodsDetailData as any).goods_id
    })
    if (index === -1) {

      const goodsIitem: goodsItem = {
        number: 1,
        goods_id: this.data.goodsDetailData.goods_id,
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
    const imagesURL: Array<string> = []
    for (const items of this.data.goodsDetailData.pics) {
      imagesURL.push(items.pics_big_url)
    }
    wx.previewImage({
      current: e.currentTarget.dataset.cur.pics_big_url || '', // 当前显示图片的http链接
      urls: imagesURL // 需要预览的图片http链接列表
    })
  },
  //获取商品详情
  getGoodDetail(): void {
    const params = {
      goods_id: this.data.caiId
    }
    getApp().request('/goods/detail', params).then((res: any) => {


      this.setData({ goodsDetailData: res.data.message })

      this.setData({ goods_introduce: (this.data.goodsDetailData as any).goods_introduce.replace(/\.webp/g, '.jpg') })
    })
  }

})