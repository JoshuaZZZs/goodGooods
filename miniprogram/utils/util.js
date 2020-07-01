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
            wx.showModal(__assign(__assign({ title: title, content: content, confirmColor: "#eb4450" }, config), { success: function (res) {
                    resolve(res);
                }, fail: reject }));
        });
    }
};
module.exports = __assign({}, util);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLElBQUksR0FBYztJQUN0QixVQUFVLEVBQVYsVUFBVyxJQUFVO1FBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUVoQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNuRCxHQUFHO1lBQ0gsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUN4RCxDQUFBO0lBQ0gsQ0FBQztJQUVELFlBQVksRUFBWixVQUFhLENBQVM7UUFDcEIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLEVBQWtGO1FBQWhGLElBQUEsYUFBeUIsRUFBbEIsS0FBSyxtQkFBVyxFQUFFLEtBQUEsRUFBRSxlQUE2QixFQUFwQixPQUFPLG1CQUFXLEVBQUUsS0FBQSxFQUFLLE1BQU0sY0FBckUsb0JBQXVFLENBQUY7UUFDM0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLHFCQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sRUFDaEIsWUFBWSxFQUFFLFNBQVMsSUFDcEIsTUFBTSxLQUNULE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNkLENBQUMsRUFDRCxJQUFJLEVBQUUsTUFBTSxJQUNaLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFBO0FBQ0QsTUFBTSxDQUFDLE9BQU8sZ0JBQ1QsSUFBSSxDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlsOiBBbnlPYmplY3QgPSB7XG4gIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICAgIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpXG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcblxuICAgIHJldHVybiAoXG4gICAgICBbeWVhciwgbW9udGgsIGRheV0ubWFwKHRoaXMuZm9ybWF0TnVtYmVyKS5qb2luKCcvJykgK1xuICAgICAgJyAnICtcbiAgICAgIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKHRoaXMuZm9ybWF0TnVtYmVyKS5qb2luKCc6JylcbiAgICApXG4gIH0sXG5cbiAgZm9ybWF0TnVtYmVyKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgcyA9IG4udG9TdHJpbmcoKVxuICAgIHJldHVybiBzWzFdID8gcyA6ICcwJyArIHNcbiAgfSxcbiAgY29uZmlybSh7IHRpdGxlOiB0aXRsZSA9IDxzdHJpbmc+JycsIGNvbnRlbnQ6IGNvbnRlbnQgPSA8c3RyaW5nPicnLCAuLi5jb25maWcgfTogQW55T2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBjb25maXJtQ29sb3I6IFwiI2ViNDQ1MFwiLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICB9KVxuICAgIH0pXG5cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC4uLnV0aWxcbn1cblxuIl19