"use strict";
Page({
    data: {
        userInfo: getApp().globalData.userInfo,
        css: {
            bg: "background:url(../../assets/image/login/login.jpg) no-repeat "
        }
    },
    onShow: function () {
        this.setData({ userInfo: getApp().globalData.userInfo });
    },
    moveToLogin: function () {
        if (!getApp().globalData.userInfo) {
            wx.navigateTo({
                url: '/pages/login/index'
            });
        }
    },
    openTips: function () {
        wx.showToast({
            title: '抱歉，由于时间和接口问题所以该部分功能仅为静态展示',
            icon: 'none',
            duration: 2000
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1FBQ3RDLEdBQUcsRUFBRTtZQUNILEVBQUUsRUFBRSwrREFBK0Q7U0FDcEU7S0FDRjtJQU1ELE1BQU0sRUFBRTtRQUtOLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFFMUQsQ0FBQztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFBO1NBQ0g7SUFFSCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFFWCxLQUFLLEVBQUUsMkJBQTJCO1lBRWxDLElBQUksRUFBRSxNQUFNO1lBRVosUUFBUSxFQUFFLElBQUk7U0FFZixDQUFDLENBQUE7SUFDSixDQUFDO0NBR0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvdXNlci9pbmRleC5qc1xuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgIGNzczoge1xuICAgICAgYmc6IGBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2UvbG9naW4vbG9naW4uanBnKSBuby1yZXBlYXQgYFxuICAgIH1cbiAgfSxcblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cblxuXG5cbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbzogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51c2VySW5mbyB9KVxuXG4gIH0sXG5cblxuICAvL+i3s+i9rOWIsOeZu+W9lemhtemdoiBcbiAgbW92ZVRvTG9naW4oKSB7XG4gICAgaWYgKCFnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2luZGV4J1xuICAgICAgfSlcbiAgICB9XG5cbiAgfSxcbiAgLy/nlKjmiLfngrnlh7vpnZnmgIHpobXpnaLmj5DnpLpcbiAgb3BlblRpcHMoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcblxuICAgICAgdGl0bGU6ICfmirHmrYnvvIznlLHkuo7ml7bpl7TlkozmjqXlj6Ppl67popjmiYDku6Xor6Xpg6jliIblip/og73ku4XkuLrpnZnmgIHlsZXnpLonLFxuXG4gICAgICBpY29uOiAnbm9uZScsXG5cbiAgICAgIGR1cmF0aW9uOiAyMDAwLy/mjIHnu63nmoTml7bpl7RcblxuICAgIH0pXG4gIH1cblxuXG59KSJdfQ==