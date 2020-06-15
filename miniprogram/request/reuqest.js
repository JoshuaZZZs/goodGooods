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
var BaseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
module.exports = function (url, data, config) {
    return new Promise(function (resolve, reject) {
        if (reject === void 0) { reject = function (msg) { console.error(msg); }; }
        wx.request(__assign(__assign({ url: BaseUrl + url, data: data }, config), { success: resolve, fail: reject }));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1cWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldXFlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSxPQUFPLEdBQVEsaURBQWlELENBQUE7QUFDdEUsTUFBTSxDQUFDLE9BQU8sR0FBRSxVQUFDLEdBQVUsRUFBQyxJQUFRLEVBQUMsTUFBYTtJQUNoRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBVyxFQUFDLE1BQTBDO1FBQTFDLHVCQUFBLEVBQUEsbUJBQVksR0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFDO1FBQ3hFLEVBQUUsQ0FBQyxPQUFPLHFCQUNSLEdBQUcsRUFBRSxPQUFPLEdBQUMsR0FBRyxFQUNoQixJQUFJLEVBQUMsSUFBSSxJQUNOLE1BQU0sS0FDVCxPQUFPLEVBQUMsT0FBTyxFQUNmLElBQUksRUFBQyxNQUFNLElBQ1gsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaXpeacnzoyMDIw5bm0NuaciDE15pelXHJcbiAqIOS9nOeUqDrnlKjkuo7lr7nmjqXlj6Por7fmsYLmlrnlvI/ov5vooYzlsIHoo4VcclxuICog6YWN572uOlxyXG4gKiAxLkJhc2VVcmw66aG16Z2i5Z+656GAVVJM77yM5YaZ5YWl5o6l5Y+j5Z+656GA5Zyw5Z2A5aaCJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS8uLi4nXHJcbiAqIDIu5Lyg5YWl5Y+C5pWwOnVybCjmjqXlj6PliankvZnot6/lvoQp77yMZGF0YSjmjqXlj6Plj4LmlbDliJfooagp77yMY29uZmlnKOaOpeWPo+WFtuS7lueJueauiumFjee9ruWmgm1ldGhvZO+8jGhlYWRlci4uLilcclxuICovXHJcbmNvbnN0IEJhc2VVcmw6c3RyaW5nPSdodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MSdcclxubW9kdWxlLmV4cG9ydHMgPSh1cmw6c3RyaW5nLGRhdGE6YW55LGNvbmZpZzpPYmplY3QpOmFueT0+e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnkscmVqZWN0OmFueT0obXNnOmFueSk9Pntjb25zb2xlLmVycm9yKG1zZyl9KT0+e1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogQmFzZVVybCt1cmwsXHJcbiAgICAgIGRhdGE6ZGF0YSxcclxuICAgICAgLi4uY29uZmlnLFxyXG4gICAgICBzdWNjZXNzOnJlc29sdmUsXHJcbiAgICAgIGZhaWw6cmVqZWN0LFxyXG4gICAgfSlcclxuICB9KVxyXG59Il19