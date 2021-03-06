"use strict";
Page({
    data: {
        swiperdata: [],
        navList: [],
        floorList: []
    },
    onLoad: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBRUosVUFBVSxFQUFFLEVBQUU7UUFFZCxPQUFPLEVBQUUsRUFBRTtRQUVYLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFLRCxNQUFNLEVBQU47UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBSUQsT0FBTyxFQUFQO0lBRUEsQ0FBQztJQUtELE1BQU0sRUFBTjtJQUVBLENBQUM7SUFLRCxNQUFNLEVBQU47SUFFQSxDQUFDO0lBS0QsUUFBUSxFQUFSO0lBRUEsQ0FBQztJQUtELGlCQUFpQixFQUFqQjtJQUVBLENBQUM7SUFLRCxhQUFhLEVBQWI7SUFFQSxDQUFDO0lBRUQsYUFBYSxFQUFiO1FBQUEsaUJBTUM7UUFMQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ2pELElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2FBQy9DO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQUEsaUJBTUM7UUFMQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQy9DLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2FBQzVDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWSxFQUFaO1FBQUEsaUJBTUM7UUFMQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ2hELElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8v6L2u5pKt5Zu+5pWw5o2uXG4gICAgc3dpcGVyZGF0YTogW10sXG4gICAgLy/lr7zoiKrmoI/mlbDmja5cbiAgICBuYXZMaXN0OiBbXSxcbiAgICAvL+alvOWxguWbvuaVsOaNrlxuICAgIGZsb29yTGlzdDogW11cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldHN3aXBlckxpc3QoKVxuICAgIHRoaXMuZ2V0TmF2TGlzdCgpXG4gICAgdGhpcy5nZXRGbG9vckxpc3QoKVxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKTogdm9pZCB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpOiB2b2lkIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCk6IHZvaWQge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpOiB2b2lkIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKTogdm9pZCB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCk6IHZvaWQge1xuXG4gIH0sXG4gIC8v6I635Y+W6L2u5pKt5Zu+5pWw5o2uXG4gIGdldHN3aXBlckxpc3QoKTogdm9pZCB7XG4gICAgZ2V0QXBwKCkucmVxdWVzdCgnL2hvbWUvc3dpcGVyZGF0YScpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHN3aXBlcmRhdGE6IHJlcy5kYXRhLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvL+iOt+WPluWvvOiIquagj+aVsOaNrlxuICBnZXROYXZMaXN0KCk6IHZvaWQge1xuICAgIGdldEFwcCgpLnJlcXVlc3QoJy9ob21lL2NhdGl0ZW1zJykudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgbmF2TGlzdDogcmVzLmRhdGEubWVzc2FnZSB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8v6I635Y+W5qW85bGC5pWw5o2uXG4gIGdldEZsb29yTGlzdCgpOiB2b2lkIHtcbiAgICBnZXRBcHAoKS5yZXF1ZXN0KCcvaG9tZS9mbG9vcmRhdGEnKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBmbG9vckxpc3Q6IHJlcy5kYXRhLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KSJdfQ==