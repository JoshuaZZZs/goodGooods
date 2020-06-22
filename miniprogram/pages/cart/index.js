"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var wxSettings_1 = require("../../utils/wxSettings");
Page({
    data: {
        condition: '',
        cart: wx.getStorageSync("carts"),
        result: []
    },
    onChange: function (event) {
        this.setData({
            result: event.detail,
        });
    },
    getAdress: function () {
        return __awaiter(this, void 0, void 0, function () {
            var setting, roleStatus, address, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setting = new wxSettings_1.default();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4, setting.getSetting()];
                    case 2:
                        roleStatus = _a.sent();
                        if (!(roleStatus.authSetting["scope.address"] === false)) return [3, 4];
                        return [4, setting.openSetting()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4, setting.chooseAddress()];
                    case 5:
                        address = _a.sent();
                        address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
                        wx.setStorageSync("address", address);
                        this.setData({ condition: address.all });
                        return [3, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    },
    onReady: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE4QztBQUM5QyxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsUUFBUSxFQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSyxTQUFTOzs7Ozs7d0JBQ1AsT0FBTyxHQUFHLElBQUksb0JBQVMsRUFBRSxDQUFBOzs7O3dCQUlWLFdBQU0sT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdkMsVUFBVSxHQUFHLFNBQTBCOzZCQUV6QyxDQUFBLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssS0FBSyxDQUFBLEVBQWpELGNBQWlEO3dCQUNuRCxXQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7OzRCQUdkLFdBQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBdkMsT0FBTyxHQUFHLFNBQTZCO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBR2hHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBOzs7O3dCQUd4QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFBOzs7Ozs7S0FHdkI7SUFXRCxPQUFPLEVBQVA7SUFFQSxDQUFDO0NBUUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd4U2V0dGluZyBmcm9tICcuLi8uLi91dGlscy93eFNldHRpbmdzJ1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjb25kaXRpb246ICcnLFxuICAgIGNhcnQ6IHd4LmdldFN0b3JhZ2VTeW5jKFwiY2FydHNcIiksXG4gICAgcmVzdWx0OiBbXVxuICB9LFxuICBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHJlc3VsdDogZXZlbnQuZGV0YWlsLFxuICAgIH0pO1xuICB9LFxuICAvL+iOt+WPlueUqOaIt+aUtui0p+WcsOWdgFxuICBhc3luYyBnZXRBZHJlc3MoKSB7XG4gICAgY29uc3Qgc2V0dGluZyA9IG5ldyB3eFNldHRpbmcoKVxuXG4gICAgdHJ5IHtcbiAgICAgIC8v6I635Y+W5omA5pyJ5p2D6ZmQ54q25oCBXG4gICAgICBjb25zdCByb2xlU3RhdHVzID0gYXdhaXQgc2V0dGluZy5nZXRTZXR0aW5nKCk7XG4gICAgICAvLyAg5Yik5pat5piv5ZCm5pyJ5Zyw5Z2A5p2D6ZmQXG4gICAgICBpZiAocm9sZVN0YXR1cy5hdXRoU2V0dGluZ1tcInNjb3BlLmFkZHJlc3NcIl0gPT09IGZhbHNlKSB7XG4gICAgICAgIGF3YWl0IHNldHRpbmcub3BlblNldHRpbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vICDosIPnlKjojrflj5bmlLbotKflnLDlnYDnmoQgYXBpXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2V0dGluZy5jaG9vc2VBZGRyZXNzKCk7XG4gICAgICBhZGRyZXNzLmFsbCA9IGFkZHJlc3MucHJvdmluY2VOYW1lICsgYWRkcmVzcy5jaXR5TmFtZSArIGFkZHJlc3MuY291bnR5TmFtZSArIGFkZHJlc3MuZGV0YWlsSW5mbztcblxuICAgICAgLy8g5pS+5YWl57yT5a2Y5LitXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImFkZHJlc3NcIiwgYWRkcmVzcyk7XG4gICAgICB0aGlzLnNldERhdGEoeyBjb25kaXRpb246IGFkZHJlc3MuYWxsIH0pXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG5cbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICAvKipvbkxvYWQob3B0aW9ucyk6dm9pZCB7XG4gICAgXG4gIH0sKi9cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKTogdm9pZCB7XG4gICAgLy9kbyBzb21ldGhpbmcgd2hlbiBwYWdlIHJlYWR5XG4gIH0sXG5cblxuXG5cblxuXG5cbn0pIl19