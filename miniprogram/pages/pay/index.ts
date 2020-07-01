Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsList: {},
    address: wx.getStorageSync("address")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /**onLoad(options):void {
    
  },*/


  /**
   * 生命周期函数--监听页面显示
   */
  onShow(): void {

    this.setData({ goodsList: wx.getStorageSync("selectedGoods") })

  },

  //提交订单
  submit() {
    wx.util.confirm({
      title: '提示',
      content: '由于真实的支付需要企业账号故该功能暂未实现，可选择完成按钮或失败按钮模拟对应的测试',
      cancelText: '支付失败',
      confirmText: '支付成功'
    }).then((res: AnyObject) => {
      if (res.confirm && !res.cancel) {
        wx.showToast({ title: '支付成功', icon: "none" })

        const cart = wx.getStorageSync('cart')
        for (const finishItem of (this.data.goodsList as any).detail) {
          cart.splice(cart.findIndex((item: goodsItem) => {
            item.goods_id === finishItem.goods_id
          }), 1)
        }
        wx.setStorageSync("cart", cart)
      } else {
        wx.showToast({ title: '支付失败', icon: 'none' })

      }
      wx.switchTab({ url: "/pages/cart/index" })



    })

  }




})