//Component Object
Component({
  properties: {
    //辅助件传递的数据
    cartItemData: {
      type: Object,
      value: {},

    },

  },
  data: {
  },
  attached: function () {

    // 在组件实例进入页面节点树时执行
    this.setData({ itemData: JSON.parse(JSON.stringify(this.properties.cartItemData)) })
  },
  methods: {
    handleGoods(e: any) {

      let content = ''
      if (e.target.dataset.type === 'collect') {
        content = '即将把该商品移入收藏夹'
      } else {
        content = '将该删除该商品'
      }
      wx.util.confirm({ title: '', content: content }).then((res: AnyObject) => {
        if (res.confirm) {
          this.triggerEvent('handleGoods', { type: e.target.dataset.type, detail: this.properties.cartItemData })
        }
      })
    },
    changeGoodsItem(e: { detail: number }) {

      this.properties.cartItemData.number = e.detail
      this.triggerEvent("changeNum", this.properties.cartItemData)

    },
    handleSelect() {
      this.triggerEvent("handleSelect", this.properties.cartItemData)
    },
  },

});