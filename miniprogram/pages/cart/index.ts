import wxSetting from '../../utils/wxSettings'
Page({
/**
 * 页面的初始数据
 */
data: {
  
},
//获取用户收货地址
async getAdress(){
  let setting=new wxSetting()
  try {
    //获取所有权限状态
    const roleStatus = await setting.getSetting();
        //  判断是否有地址权限
        if (roleStatus.authSetting["scope.address"] === false) {
          await setting.openSetting();
        }
        //  调用获取收货地址的 api
        let address = await setting.chooseAddress();
        address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
  
        // 放入缓存中
        wx.setStorageSync("address", address);
        
   
  } catch (error) {
    console.error(error)
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
onReady():void {
  
},

/**
 * 生命周期函数--监听页面显示
 */
onShow():void {
  
},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide():void {
  
},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload():void {
  
},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh():void {
  
},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom():void {
  
},

/**
 * 用户点击右上角分享
 */
onShareAppMessage():Object {
  return {}  
}
})