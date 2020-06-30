"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var util = {
    formatTime: function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return ([year, month, day].map(this.formatNumber).join('/') +
            ' ' +
            [hour, minute, second].map(this.formatNumber).join(':'));
    },
    formatNumber: function (n) {
        var s = n.toString();
        return s[1] ? s : '0' + s;
    },
    confirm: function (_a) {
        var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.content, content = _c === void 0 ? '' : _c, config = __rest(_a, ["title", "content"]);
        return new Promise(function (resolve, reject) {
            wx.showModal(__assign(__assign({ title: title, content: content }, config), { success: function (res) {
                    resolve(res);
                }, fail: reject }));
        });
    }
};
module.exports = __assign({}, util);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLElBQUksR0FBYztJQUN0QixVQUFVLEVBQVYsVUFBVyxJQUFVO1FBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUVoQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNuRCxHQUFHO1lBQ0gsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUN4RCxDQUFBO0lBQ0gsQ0FBQztJQUVELFlBQVksRUFBWixVQUFhLENBQVM7UUFDcEIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLEVBQWtGO1FBQWhGLElBQUEsYUFBeUIsRUFBbEIsS0FBSyxtQkFBVyxFQUFFLEtBQUEsRUFBRSxlQUE2QixFQUFwQixPQUFPLG1CQUFXLEVBQUUsS0FBQSxFQUFLLE1BQU0sY0FBckUsb0JBQXVFLENBQUY7UUFDM0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLHFCQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sSUFDYixNQUFNLEtBQ1QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQyxFQUNELElBQUksRUFBRSxNQUFNLElBQ1osQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGLENBQUE7QUFDRCxNQUFNLENBQUMsT0FBTyxnQkFDVCxJQUFJLENBQ1IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWw6IEFueU9iamVjdCA9IHtcbiAgZm9ybWF0VGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gICAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAodGhpcy5mb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArXG4gICAgICAnICcgK1xuICAgICAgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAodGhpcy5mb3JtYXROdW1iZXIpLmpvaW4oJzonKVxuICAgIClcbiAgfSxcblxuICBmb3JtYXROdW1iZXIobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzID0gbi50b1N0cmluZygpXG4gICAgcmV0dXJuIHNbMV0gPyBzIDogJzAnICsgc1xuICB9LFxuICBjb25maXJtKHsgdGl0bGU6IHRpdGxlID0gPHN0cmluZz4nJywgY29udGVudDogY29udGVudCA9IDxzdHJpbmc+JycsIC4uLmNvbmZpZyB9OiBBbnlPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLi4udXRpbFxufVxuXG4iXX0=