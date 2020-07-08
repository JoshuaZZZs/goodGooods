"use strict";
Page({
    data: {
        userInfo: getApp().globalData.userInfo,
        css: {
            bg: "background:url(../../assets/image/login/login.jpg) no-repeat "
        }
    },
    onLoad: function (options) {
    },
    onReady: function () {
    },
    onShow: function () {
        this.setData({ userInfo: getApp().globalData.userInfo });
    },
    onHide: function () {
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
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1FBQ3RDLEdBQUcsRUFBRTtZQUNILEVBQUUsRUFBRSwrREFBK0Q7U0FDcEU7S0FDRjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87SUFFekIsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFLTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBRTFELENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUVILENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSwyQkFBMkI7U0FHbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3VzZXIvaW5kZXguanNcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICBjc3M6IHtcbiAgICAgIGJnOiBgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ2luL2xvZ2luLmpwZykgbm8tcmVwZWF0IGBcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cblxuXG5cbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbzogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51c2VySW5mbyB9KVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuICAvL+i3s+i9rOWIsOeZu+W9lemhtemdoiBcbiAgbW92ZVRvTG9naW4oKSB7XG4gICAgaWYgKCFnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2luZGV4J1xuICAgICAgfSlcbiAgICB9XG5cbiAgfSxcbiAgLy/nlKjmiLfngrnlh7vpnZnmgIHpobXpnaLmj5DnpLpcbiAgb3BlblRpcHMoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5oqx5q2J77yM55Sx5LqO5pe26Ze05ZKM5o6l5Y+j6Zeu6aKY5omA5Lul6K+l6YOo5YiG5Yqf6IO95LuF5Li66Z2Z5oCB5bGV56S6JyxcblxuXG4gICAgfSk7XG4gIH1cblxuXG59KSJdfQ==