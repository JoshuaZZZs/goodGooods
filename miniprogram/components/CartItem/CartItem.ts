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
    changeGoodsItem(e: { detail: number }) {

      this.properties.cartItemData.number = e.detail
      this.triggerEvent("changeNum", this.properties.cartItemData)

    },
    //减少数量
    minusNums() {
      // this.properties.cartItemData.number--
      // this.triggerEvent("changeNum", this.properties.cartItemData)
    },
    //增加数量
    addNums() {
      // this.properties.cartItemData.number++
      // this.triggerEvent("changeNum", this.properties.cartItemData)

    },
    handleSelect() {
      this.triggerEvent("handleSelect", this.properties.cartItemData)
    },
  },

});