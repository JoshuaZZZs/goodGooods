"use strict";
Page({
    data: {
        sidebarList: [],
        containerList: [],
        activeIndex: 0,
        bufferTime: 30,
        topHeight: 0
    },
    onLoad: function () {
    },
    changeSideBar: function (event) {
        this.getContainerList(event.detail);
    },
    checkBuffer: function () {
        var time = new Date().getTime();
        var cats = wx.getStorageSync('cats');
        if (Object.keys(cats).length && time - cats.time <= this.data.bufferTime * 1000) {
            return cats;
        }
        else {
            return false;
        }
    },
    getSidebarList: function () {
        var _this = this;
        getApp().request('/categories').then(function (res) {
            if (res.statusCode === 200) {
                _this.setData({ sidebarList: res.data.message });
                wx.setStorageSync("cats", { time: new Date().getTime(), data: res.data.message });
                _this.getContainerList(0);
            }
        });
    },
    getContainerList: function (activeIndex) {
        if (this.data.sidebarList.length) {
            this.setData({ containerList: this.data.sidebarList[activeIndex].children, topHeight: 0 });
        }
    },
    onReady: function () {
    },
    onShow: function () {
        if (this.checkBuffer() !== false) {
            this.setData({ sidebarList: this.checkBuffer().data });
        }
        else {
            this.getSidebarList();
        }
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBRUosV0FBVyxFQUFFLEVBQUU7UUFFZixhQUFhLEVBQUUsRUFBRTtRQUVqQixXQUFXLEVBQUUsQ0FBQztRQUVkLFVBQVUsRUFBRSxFQUFFO1FBRWQsU0FBUyxFQUFFLENBQUM7S0FDYjtJQUtELE1BQU0sRUFBTjtJQUVBLENBQUM7SUFFRCxhQUFhLEVBQWIsVUFBYyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELFdBQVcsRUFBWDtRQUNFLElBQU0sSUFBSSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDekMsSUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNsRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRTtZQUMvRSxPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVELGNBQWMsRUFBZDtRQUFBLGlCQVdDO1FBVkMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDNUMsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7Z0JBRS9DLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtnQkFDakYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBO2FBRXpCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLFdBQW1CO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBRXBHO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBUDtJQUVBLENBQUM7SUFLRCxNQUFNLEVBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtTQUN2RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQ3RCO0lBRUgsQ0FBQztJQUtELE1BQU0sRUFBTjtJQUVBLENBQUM7SUFLRCxRQUFRLEVBQVI7SUFFQSxDQUFDO0lBS0QsaUJBQWlCLEVBQWpCO0lBRUEsQ0FBQztJQUtELGFBQWEsRUFBYjtJQUVBLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgY2F0c0J1ZmZlciB7XG4gIHRpbWU6IG51bWJlclxuICBkYXRhOiBBcnJheTxhbnk+XG59XG5cblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgLy/pobXpnaLmlbDmja5cbiAgICBzaWRlYmFyTGlzdDogW10sXG4gICAgLy/lj7Pkvqfor6bmg4XmlbDmja5cbiAgICBjb250YWluZXJMaXN0OiBbXSxcbiAgICAvL+S+p+i+ueagj+e0ouW8lVxuICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgIC8v6K6+572u57yT5a2Y5pe26Ze0XG4gICAgYnVmZmVyVGltZTogMzAsXG4gICAgLy/mu5rliqjmnaHnprvpobXpnaLpobbpg6jot53nprtcbiAgICB0b3BIZWlnaHQ6IDBcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpOiB2b2lkIHtcblxuICB9LFxuICAvL+aUueWPmOW3puS+p+W9k+ihjOagjyBcbiAgY2hhbmdlU2lkZUJhcihldmVudDogT2JqZWN0KSB7XG4gICAgdGhpcy5nZXRDb250YWluZXJMaXN0KChldmVudCBhcyBhbnkpLmRldGFpbClcbiAgfSxcbiAgLy/lm6DmjqXlj6PmlbDmja7ph4/lpKcg6L+U5Zue5pe26Ze06ZW/5pWF5L2/55So5pys5Zyw57yT5a2YXG4gIGNoZWNrQnVmZmVyKCk6IGJvb2xlYW4gfCBjYXRzQnVmZmVyIHwgYW55IHtcbiAgICBjb25zdCB0aW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIGNvbnN0IGNhdHM6IGNhdHNCdWZmZXIgPSB3eC5nZXRTdG9yYWdlU3luYygnY2F0cycpXG4gICAgaWYgKE9iamVjdC5rZXlzKGNhdHMpLmxlbmd0aCAmJiB0aW1lIC0gY2F0cy50aW1lIDw9IHRoaXMuZGF0YS5idWZmZXJUaW1lICogMTAwMCkge1xuICAgICAgcmV0dXJuIGNhdHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuICAvL+iOt+WPlumhtemdouaVsOaNrlxuICBnZXRTaWRlYmFyTGlzdCgpIHtcbiAgICBnZXRBcHAoKS5yZXF1ZXN0KCcvY2F0ZWdvcmllcycpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBzaWRlYmFyTGlzdDogcmVzLmRhdGEubWVzc2FnZSB9KVxuXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2F0c1wiLCB7IHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBkYXRhOiByZXMuZGF0YS5tZXNzYWdlIH0pXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyTGlzdCgwKVxuXG4gICAgICB9XG4gICAgfSlcblxuICB9LFxuICAvL+iOt+WPluWPs+S+p+WvvOiIquagj+aVsOaNrlxuICBnZXRDb250YWluZXJMaXN0KGFjdGl2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhLnNpZGViYXJMaXN0Lmxlbmd0aCkge1xuXG4gICAgICB0aGlzLnNldERhdGEoeyBjb250YWluZXJMaXN0OiAodGhpcy5kYXRhLnNpZGViYXJMaXN0W2FjdGl2ZUluZGV4XSBhcyBhbnkpLmNoaWxkcmVuLCB0b3BIZWlnaHQ6IDAgfSlcblxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCk6IHZvaWQge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tCdWZmZXIoKSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IHNpZGViYXJMaXN0OiB0aGlzLmNoZWNrQnVmZmVyKCkuZGF0YSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldFNpZGViYXJMaXN0KClcbiAgICB9XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpOiB2b2lkIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKTogdm9pZCB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCk6IHZvaWQge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpOiB2b2lkIHtcblxuICB9LFxuXG59KSJdfQ==