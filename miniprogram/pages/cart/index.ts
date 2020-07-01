type selectedGoods = {
  //商品总数
  total: number,
  //总体价格
  price: number,
  //选中的商品详情
  detail: Array<goodsItem>
}
import wxSetting from '../../utils/wxSettings'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //收货地址
    condition: '',
    //购物车中的数据
    cart: wx.getStorageSync("cart"),
    //所有选中的商品数据
    result: <Array<string>>[],
    //是否全选
    isSelectAll: false,
    //选中的所有数据
    selectedGoods: <selectedGoods>{}
  },
  //提交订单
  submitCart() {
    wx.setStorageSync("selectedGoods", this.data.selectedGoods)
    wx.navigateTo({
      url: "/pages/pay/index"
    })
  },
  //手动切换是否全选
  selectAllOrNull() {
    this.setData({
      isSelectAll: !this.data.isSelectAll
    })
    const all: string[] = []
    if (this.data.isSelectAll) {
      this.data.cart.forEach((element: goodsItem) => {
        all.push(String(element.goods_id))
      })
      this.setData({ result: all })
    } else {
      this.setData({ result: [] })
    }
    this.changeSubmit()
  },

  //接收数量变化
  changeNum(e: { detail: goodsItem }) {
    const index: number = this.data.cart.findIndex((item: goodsItem) => { return item.goods_id === e.detail.goods_id })
    if (index !== -1) {
      this.data.cart[index].number = e.detail.number
      wx.setStorageSync("cart", this.data.cart)
    }

    if (this.data.result.some(item => { return e.detail.goods_id.toString() === item })) {
      this.changeSubmit()
    }

  },
  //当选中值内容改变时触发
  selectChange(event: { detail: Array<string> }) {
    this.setData({
      result: event.detail,
    })
    if (this.data.result.length === this.data.cart.length) {
      this.setData({ isSelectAll: true })
    } else {
      this.setData({ isSelectAll: false })
    }
    this.changeSubmit()

  },
  //用户对商品进行收藏或删除操作
  handleGoods(e: AnyObject) {
    if (e.detail.type === 'collect') {
      console.log('collect')
    } else {
      this.data.cart.splice(this.data.cart.findIndex((item: goodsItem) => { return item.goods_id === e.detail.detail.goods_id }), 1)
      wx.showToast({ title: '删除成功' })
    }
    this.setData({ cart: this.data.cart })
    wx.setStorageSync("cart", this.data.cart);
  },
  //选中数据内容变化
  changeSubmit() {
    const selectedGoods = {
      total: 0,
      price: 0,
      detail: <Array<goodsItem>>[]
    }
    for (const item of this.data.result) {
      const index: number = this.data.cart.findIndex((goods: goodsItem) => { return Number(goods.goods_id) === Number(item) })
      if (index !== -1) {
        selectedGoods.detail.push(this.data.cart[index])
      }
    }

    selectedGoods.detail.forEach((item: goodsItem) => {
      selectedGoods.total += item.number
      selectedGoods.price += item.number * item.goodsDetail.goods_price
    })
    this.setData({ selectedGoods })

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
  onShow() {
    this.setData({ cart: wx.getStorageSync("cart") })
    this.changeSubmit()
    if (!getApp().globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/login/index'
      })
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