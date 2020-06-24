"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wxSetting = (function () {
    function wxSetting() {
        this.reject = function (msg) {
            return console.error(msg);
        };
    }
    wxSetting.prototype.getSetting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (reject === void 0) { reject = _this.reject; }
            wx.getSetting({
                success: function (result) {
                    resolve(result);
                },
                fail: reject
            });
        });
    };
    wxSetting.prototype.openSetting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (reject === void 0) { reject = _this.reject; }
            wx.openSetting({
                success: function (result) {
                    resolve(result);
                },
                fail: reject
            });
        });
    };
    wxSetting.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (reject === void 0) { reject = _this.reject; }
            wx.chooseAddress({
                success: function (result) {
                    resolve(result);
                },
                fail: reject
            });
        });
    };
    wxSetting.prototype.chooseAddress = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (reject === void 0) { reject = _this.reject; }
            wx.chooseAddress({
                success: function (result) {
                    resolve(result);
                },
                fail: function (err) {
                    reject(err);
                }
            });
        });
    };
    return wxSetting;
}());
exports.default = wxSetting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hTZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInd4U2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO1FBQ2MsV0FBTSxHQUFnQixVQUFDLEdBQWM7WUFDM0MsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FBQTtJQW9ETCxDQUFDO0lBaERVLDhCQUFVLEdBQWpCO1FBQUEsaUJBVUM7UUFURyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQW9CO1lBQXBCLHVCQUFBLEVBQUEsU0FBUyxLQUFJLENBQUMsTUFBTTtZQUM3QyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxVQUFDLE1BQU07b0JBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNELElBQUksRUFBRSxNQUFNO2FBRWYsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFBQSxpQkFTQztRQVJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBb0I7WUFBcEIsdUJBQUEsRUFBQSxTQUFTLEtBQUksQ0FBQyxNQUFNO1lBQzdDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFVBQUMsTUFBTTtvQkFDWixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUFBLGlCQVNDO1FBUkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFvQjtZQUFwQix1QkFBQSxFQUFBLFNBQVMsS0FBSSxDQUFDLE1BQU07WUFDN0MsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQyxNQUFNO29CQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLGlDQUFhLEdBQXBCO1FBQUEsaUJBV0M7UUFWRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQW9CO1lBQXBCLHVCQUFBLEVBQUEsU0FBUyxLQUFJLENBQUMsTUFBTTtZQUM3QyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFDLE1BQU07b0JBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3hTZXR0aW5nIHtcclxuICAgIHByb3RlY3RlZCByZWplY3Q6IEFueUZ1bmN0aW9uID0gKG1zZzogQW55T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobXNnKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+iOt+WPluiuvue9rlxyXG4gICAgcHVibGljIGdldFNldHRpbmcoKTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCA9IHRoaXMucmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aJk+W8gOiuvue9rlxyXG4gICAgcHVibGljIG9wZW5TZXR0aW5nKCk6IFByb21pc2U8QW55T2JqZWN0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QgPSB0aGlzLnJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ojrflj5blnLDlnYBcclxuICAgIHB1YmxpYyBnZXRBZGRyZXNzKCk6IFByb21pc2U8QW55T2JqZWN0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QgPSB0aGlzLnJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5jaG9vc2VBZGRyZXNzKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mAieS4reWcsOWdgOeKtuaAgVxyXG4gICAgcHVibGljIGNob29zZUFkZHJlc3MoKTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCA9IHRoaXMucmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LmNob29zZUFkZHJlc3Moe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==