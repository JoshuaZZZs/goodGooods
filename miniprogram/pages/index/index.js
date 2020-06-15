"use strict";
Page({
    data: {
        swiperdata: [],
        navList: [],
        floorList: []
    },
    onLoad: function (options) {
        this.getswiperList();
        this.getNavList();
        this.getFloorList();
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    getswiperList: function () {
        var _this = this;
        getApp().request('/home/swiperdata').then(function (res) {
            if (res.statusCode == 200) {
                _this.setData({ swiperdata: res.data.message });
            }
        });
    },
    getNavList: function () {
        var _this = this;
        getApp().request('/home/catitems').then(function (res) {
            if (res.statusCode == 200) {
                _this.setData({ navList: res.data.message });
            }
        });
    },
    getFloorList: function () {
        var _this = this;
        getApp().request('/home/floordata').then(function (res) {
            if (res.statusCode == 200) {
                _this.setData({ floorList: res.data.message });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQUU7UUFDZCxPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFLRCxNQUFNLEVBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUlELE9BQU8sRUFBUDtJQUVBLENBQUM7SUFLRCxNQUFNLEVBQU47SUFFQSxDQUFDO0lBS0QsTUFBTSxFQUFOO0lBRUEsQ0FBQztJQUtELFFBQVEsRUFBUjtJQUVBLENBQUM7SUFLRCxpQkFBaUIsRUFBakI7SUFFQSxDQUFDO0lBS0QsYUFBYSxFQUFiO0lBRUEsQ0FBQztJQUVELGFBQWEsRUFBYjtRQUFBLGlCQU1DO1FBTEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNqRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTthQUMvQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVjtRQUFBLGlCQU1DO1FBTEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVksRUFBWjtRQUFBLGlCQU1DO1FBTEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNoRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBzd2lwZXJkYXRhOiBbXSxcbiAgICBuYXZMaXN0OiBbXSxcbiAgICBmbG9vckxpc3Q6IFtdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQob3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuZ2V0c3dpcGVyTGlzdCgpXG4gICAgdGhpcy5nZXROYXZMaXN0KClcbiAgICB0aGlzLmdldEZsb29yTGlzdCgpXG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpOiB2b2lkIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCk6IHZvaWQge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKTogdm9pZCB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCk6IHZvaWQge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpOiB2b2lkIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKTogdm9pZCB7XG5cbiAgfSxcbiAgLy/ojrflj5bova7mkq3lm77mlbDmja5cbiAgZ2V0c3dpcGVyTGlzdCgpOiB2b2lkIHtcbiAgICBnZXRBcHAoKS5yZXF1ZXN0KCcvaG9tZS9zd2lwZXJkYXRhJykudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc3dpcGVyZGF0YTogcmVzLmRhdGEubWVzc2FnZSB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8v6I635Y+W5a+86Iiq5qCP5pWw5o2uXG4gIGdldE5hdkxpc3QoKTogdm9pZCB7XG4gICAgZ2V0QXBwKCkucmVxdWVzdCgnL2hvbWUvY2F0aXRlbXMnKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBuYXZMaXN0OiByZXMuZGF0YS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy/ojrflj5bmpbzlsYLmlbDmja5cbiAgZ2V0Rmxvb3JMaXN0KCk6IHZvaWQge1xuICAgIGdldEFwcCgpLnJlcXVlc3QoJy9ob21lL2Zsb29yZGF0YScpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IGZsb29yTGlzdDogcmVzLmRhdGEubWVzc2FnZSB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pIl19