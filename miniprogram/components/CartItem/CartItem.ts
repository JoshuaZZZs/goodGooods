//Component Object
Component({
  properties: {
    cartItemData: {
      type: Object,
      value: {},

    },

  },
  data: {
    itemData: {}
  },
  attached: function () {

    // 在组件实例进入页面节点树时执行
    this.setData({ itemData: JSON.parse(JSON.stringify(this.properties.cartItemData)) })
  },
  methods: {
    handleSelect() {

      this.properties.itemData
      this.triggerEvent("handleSelect", this.data.itemData)
    },
  },

});