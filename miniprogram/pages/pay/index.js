"use strict";
Page({
    data: {
        goodsList: {},
        address: wx.getStorageSync("address")
    },
    onShow: function () {
        this.setData({ goodsList: wx.getStorageSync("selectedGoods") });
    },
    submit: function () {
        var _this = this;
        wx.util.confirm({
            title: '提示',
            content: '由于真实的支付需要企业账号故该功能暂未实现，可选择完成按钮或失败按钮模拟对应的测试',
            cancelText: '支付失败',
            confirmText: '支付成功'
        }).then(function (res) {
            if (res.confirm && !res.cancel) {
                wx.showToast({ title: '支付成功', icon: "none" });
                var cart = wx.getStorageSync('cart');
                var _loop_1 = function (finishItem) {
                    cart.splice(cart.findIndex(function (item) {
                        item.goods_id === finishItem.goods_id;
                    }), 1);
                };
                for (var _i = 0, _a = _this.data.goodsList.detail; _i < _a.length; _i++) {
                    var finishItem = _a[_i];
                    _loop_1(finishItem);
                }
                wx.setStorageSync("cart", cart);
            }
            else {
                wx.showToast({ title: '支付失败', icon: 'none' });
            }
            wx.switchTab({ url: "/pages/cart/index" });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7S0FDdEM7SUFhRCxNQUFNLEVBQU47UUFHRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRWpFLENBQUM7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkEyQkM7UUExQkMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSwyQ0FBMkM7WUFDcEQsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWM7WUFDckIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7Z0JBRTdDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7d0NBQzNCLFVBQVU7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQWU7d0JBQ3pDLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQTtvQkFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O2dCQUhSLEtBQXlCLFVBQTBCLEVBQTFCLEtBQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUExQixjQUEwQixFQUExQixJQUEwQjtvQkFBOUMsSUFBTSxVQUFVLFNBQUE7NEJBQVYsVUFBVTtpQkFJcEI7Z0JBQ0QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDaEM7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7YUFFOUM7WUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtRQUk1QyxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FLRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGdvb2RzTGlzdDoge30sXG4gICAgYWRkcmVzczogd3guZ2V0U3RvcmFnZVN5bmMoXCJhZGRyZXNzXCIpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICAvKipvbkxvYWQob3B0aW9ucyk6dm9pZCB7XG4gICAgXG4gIH0sKi9cblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCk6IHZvaWQge1xuXG5cbiAgICB0aGlzLnNldERhdGEoeyBnb29kc0xpc3Q6IHd4LmdldFN0b3JhZ2VTeW5jKFwic2VsZWN0ZWRHb29kc1wiKSB9KVxuXG4gIH0sXG5cbiAgLy/mj5DkuqTorqLljZVcbiAgc3VibWl0KCkge1xuICAgIHd4LnV0aWwuY29uZmlybSh7XG4gICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICBjb250ZW50OiAn55Sx5LqO55yf5a6e55qE5pSv5LuY6ZyA6KaB5LyB5Lia6LSm5Y+35pWF6K+l5Yqf6IO95pqC5pyq5a6e546w77yM5Y+v6YCJ5oup5a6M5oiQ5oyJ6ZKu5oiW5aSx6LSl5oyJ6ZKu5qih5ouf5a+55bqU55qE5rWL6K+VJyxcbiAgICAgIGNhbmNlbFRleHQ6ICfmlK/ku5jlpLHotKUnLFxuICAgICAgY29uZmlybVRleHQ6ICfmlK/ku5jmiJDlip8nXG4gICAgfSkudGhlbigocmVzOiBBbnlPYmplY3QpID0+IHtcbiAgICAgIGlmIChyZXMuY29uZmlybSAmJiAhcmVzLmNhbmNlbCkge1xuICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+aUr+S7mOaIkOWKnycsIGljb246IFwibm9uZVwiIH0pXG5cbiAgICAgICAgY29uc3QgY2FydCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdjYXJ0JylcbiAgICAgICAgZm9yIChjb25zdCBmaW5pc2hJdGVtIG9mIHRoaXMuZGF0YS5nb29kc0xpc3QuZGV0YWlsKSB7XG4gICAgICAgICAgY2FydC5zcGxpY2UoY2FydC5maW5kSW5kZXgoKGl0ZW06IGdvb2RzSXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5nb29kc19pZCA9PT0gZmluaXNoSXRlbS5nb29kc19pZFxuICAgICAgICAgIH0pLCAxKVxuICAgICAgICB9XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2FydFwiLCBjYXJ0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfmlK/ku5jlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcblxuICAgICAgfVxuICAgICAgd3guc3dpdGNoVGFiKHsgdXJsOiBcIi9wYWdlcy9jYXJ0L2luZGV4XCIgfSlcblxuXG5cbiAgICB9KVxuXG4gIH1cblxuXG5cblxufSkiXX0=