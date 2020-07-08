"use strict";
App({
    globalData: {
        cssSet: {
            themColor: "#eb4450",
            bgColor: " #e8eaec",
            fontSize: " 28rpx",
            miniSize: " 20rpx",
            smallSize: "24rpx",
            middleSize: "28rpx",
            bigSize: "36rpx"
        }
    },
    onLaunch: function () {
        wx.util = require('./utils/util');
    },
    request: require('./request/reuqest'),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFFZCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFFTixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsVUFBVTtZQUVuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixVQUFVLEVBQUUsT0FBTztZQUNuQixPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGO0lBSUQsUUFBUSxFQUFSO1FBRUUsRUFBRSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQWdCRCxPQUFPLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0NBRXRDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG5cclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICBjc3NTZXQ6IHtcclxuICAgICAgLy8g5Li76aKY6aKc6ImyXHJcbiAgICAgIHRoZW1Db2xvcjogXCIjZWI0NDUwXCIsXHJcbiAgICAgIGJnQ29sb3I6IFwiICNlOGVhZWNcIixcclxuICAgICAgLy8g5a2X5L2TXHJcbiAgICAgIGZvbnRTaXplOiBcIiAyOHJweFwiLFxyXG4gICAgICBtaW5pU2l6ZTogXCIgMjBycHhcIixcclxuICAgICAgc21hbGxTaXplOiBcIjI0cnB4XCIsXHJcbiAgICAgIG1pZGRsZVNpemU6IFwiMjhycHhcIixcclxuICAgICAgYmlnU2l6ZTogXCIzNnJweFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDlvZPlsI/nqIvluo/liJ3lp4vljJblrozmiJDml7bvvIzkvJrop6blj5Egb25MYXVuY2jvvIjlhajlsYDlj6rop6blj5HkuIDmrKHvvIlcclxuICAgKi9cclxuICBvbkxhdW5jaCgpOiB2b2lkIHtcclxuXHJcbiAgICB3eC51dGlsID0gcmVxdWlyZSgnLi91dGlscy91dGlsJylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlvZPlsI/nqIvluo/lkK/liqjvvIzmiJbku47lkI7lj7Dov5vlhaXliY3lj7DmmL7npLrvvIzkvJrop6blj5Egb25TaG93XHJcbiAgICovXHJcbiAgLyoqb25TaG93IChvcHRpb25zKTp2b2lkIHtcclxuICAgIFxyXG4gIH0sKi9cclxuXHJcbiAgLyoqXHJcbiAgICog5b2T5bCP56iL5bqP5LuO5YmN5Y+w6L+b5YWl5ZCO5Y+w77yM5Lya6Kem5Y+RIG9uSGlkZVxyXG4gICAqL1xyXG4gIC8vIG9uSGlkZSgpOiB2b2lkIHtcclxuXHJcbiAgLy8gfSxcclxuICAvL+WFqOWxgOaMgui9veWwgeijheeahHJlcXVlc3Tmlrnms5VcclxuICByZXF1ZXN0OiByZXF1aXJlKCcuL3JlcXVlc3QvcmV1cWVzdCcpLFxyXG5cclxufSlcclxuIl19