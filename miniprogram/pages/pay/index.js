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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7S0FDdEM7SUFhRCxNQUFNLEVBQU47UUFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRWpFLENBQUM7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkEyQkM7UUExQkMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSwyQ0FBMkM7WUFDcEQsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWM7WUFDckIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7Z0JBRTdDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7d0NBQzNCLFVBQVU7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQWU7d0JBQ3pDLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQTtvQkFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O2dCQUhSLEtBQXlCLFVBQW1DLEVBQW5DLEtBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFpQixDQUFDLE1BQU0sRUFBbkMsY0FBbUMsRUFBbkMsSUFBbUM7b0JBQXZELElBQU0sVUFBVSxTQUFBOzRCQUFWLFVBQVU7aUJBSXBCO2dCQUNELEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ2hDO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBRTlDO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7UUFJNUMsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0NBS0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBnb29kc0xpc3Q6IHt9LFxuICAgIGFkZHJlc3M6IHd4LmdldFN0b3JhZ2VTeW5jKFwiYWRkcmVzc1wiKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgLyoqb25Mb2FkKG9wdGlvbnMpOnZvaWQge1xuICAgIFxuICB9LCovXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpOiB2b2lkIHtcblxuICAgIHRoaXMuc2V0RGF0YSh7IGdvb2RzTGlzdDogd3guZ2V0U3RvcmFnZVN5bmMoXCJzZWxlY3RlZEdvb2RzXCIpIH0pXG5cbiAgfSxcblxuICAvL+aPkOS6pOiuouWNlVxuICBzdWJtaXQoKSB7XG4gICAgd3gudXRpbC5jb25maXJtKHtcbiAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgIGNvbnRlbnQ6ICfnlLHkuo7nnJ/lrp7nmoTmlK/ku5jpnIDopoHkvIHkuJrotKblj7fmlYXor6Xlip/og73mmoLmnKrlrp7njrDvvIzlj6/pgInmi6nlrozmiJDmjInpkq7miJblpLHotKXmjInpkq7mqKHmi5/lr7nlupTnmoTmtYvor5UnLFxuICAgICAgY2FuY2VsVGV4dDogJ+aUr+S7mOWksei0pScsXG4gICAgICBjb25maXJtVGV4dDogJ+aUr+S7mOaIkOWKnydcbiAgICB9KS50aGVuKChyZXM6IEFueU9iamVjdCkgPT4ge1xuICAgICAgaWYgKHJlcy5jb25maXJtICYmICFyZXMuY2FuY2VsKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5pSv5LuY5oiQ5YqfJywgaWNvbjogXCJub25lXCIgfSlcblxuICAgICAgICBjb25zdCBjYXJ0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NhcnQnKVxuICAgICAgICBmb3IgKGNvbnN0IGZpbmlzaEl0ZW0gb2YgKHRoaXMuZGF0YS5nb29kc0xpc3QgYXMgYW55KS5kZXRhaWwpIHtcbiAgICAgICAgICBjYXJ0LnNwbGljZShjYXJ0LmZpbmRJbmRleCgoaXRlbTogZ29vZHNJdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmdvb2RzX2lkID09PSBmaW5pc2hJdGVtLmdvb2RzX2lkXG4gICAgICAgICAgfSksIDEpXG4gICAgICAgIH1cbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjYXJ0XCIsIGNhcnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+aUr+S7mOWksei0pScsIGljb246ICdub25lJyB9KVxuXG4gICAgICB9XG4gICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6IFwiL3BhZ2VzL2NhcnQvaW5kZXhcIiB9KVxuXG5cblxuICAgIH0pXG5cbiAgfVxuXG5cblxuXG59KSJdfQ==