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
    data: {},
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
    onShareAppMessage: function () {
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE4QztBQUM5QyxJQUFJLENBQUM7SUFJTCxJQUFJLEVBQUUsRUFFTDtJQUVLLFNBQVM7Ozs7Ozt3QkFDVCxPQUFPLEdBQUMsSUFBSSxvQkFBUyxFQUFFLENBQUE7Ozs7d0JBR04sV0FBTSxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUF2QyxVQUFVLEdBQUcsU0FBMEI7NkJBRXJDLENBQUEsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLENBQUEsRUFBakQsY0FBaUQ7d0JBQ25ELFdBQU0sT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzs7NEJBR2hCLFdBQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBdkMsT0FBTyxHQUFHLFNBQTZCO3dCQUMzQyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBR2hHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7O3dCQUkxQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFBOzs7Ozs7S0FHdkI7SUFXRCxPQUFPLEVBQVA7SUFFQSxDQUFDO0lBS0QsTUFBTSxFQUFOO0lBRUEsQ0FBQztJQUtELE1BQU0sRUFBTjtJQUVBLENBQUM7SUFLRCxRQUFRLEVBQVI7SUFFQSxDQUFDO0lBS0QsaUJBQWlCLEVBQWpCO0lBRUEsQ0FBQztJQUtELGFBQWEsRUFBYjtJQUVBLENBQUM7SUFLRCxpQkFBaUIsRUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDQSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3hTZXR0aW5nIGZyb20gJy4uLy4uL3V0aWxzL3d4U2V0dGluZ3MnXG5QYWdlKHtcbi8qKlxuICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gKi9cbmRhdGE6IHtcbiAgXG59LFxuLy/ojrflj5bnlKjmiLfmlLbotKflnLDlnYBcbmFzeW5jIGdldEFkcmVzcygpe1xuICBsZXQgc2V0dGluZz1uZXcgd3hTZXR0aW5nKClcbiAgdHJ5IHtcbiAgICAvL+iOt+WPluaJgOacieadg+mZkOeKtuaAgVxuICAgIGNvbnN0IHJvbGVTdGF0dXMgPSBhd2FpdCBzZXR0aW5nLmdldFNldHRpbmcoKTtcbiAgICAgICAgLy8gIOWIpOaWreaYr+WQpuacieWcsOWdgOadg+mZkFxuICAgICAgICBpZiAocm9sZVN0YXR1cy5hdXRoU2V0dGluZ1tcInNjb3BlLmFkZHJlc3NcIl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgYXdhaXQgc2V0dGluZy5vcGVuU2V0dGluZygpO1xuICAgICAgICB9XG4gICAgICAgIC8vICDosIPnlKjojrflj5bmlLbotKflnLDlnYDnmoQgYXBpXG4gICAgICAgIGxldCBhZGRyZXNzID0gYXdhaXQgc2V0dGluZy5jaG9vc2VBZGRyZXNzKCk7XG4gICAgICAgIGFkZHJlc3MuYWxsID0gYWRkcmVzcy5wcm92aW5jZU5hbWUgKyBhZGRyZXNzLmNpdHlOYW1lICsgYWRkcmVzcy5jb3VudHlOYW1lICsgYWRkcmVzcy5kZXRhaWxJbmZvO1xuICBcbiAgICAgICAgLy8g5pS+5YWl57yT5a2Y5LitXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICAgICAgXG4gICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG4gIFxufSxcbi8qKlxuICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAqL1xuLyoqb25Mb2FkKG9wdGlvbnMpOnZvaWQge1xuICBcbn0sKi9cblxuLyoqXG4gKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICovXG5vblJlYWR5KCk6dm9pZCB7XG4gIFxufSxcblxuLyoqXG4gKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICovXG5vblNob3coKTp2b2lkIHtcbiAgXG59LFxuXG4vKipcbiAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gKi9cbm9uSGlkZSgpOnZvaWQge1xuICBcbn0sXG5cbi8qKlxuICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAqL1xub25VbmxvYWQoKTp2b2lkIHtcbiAgXG59LFxuXG4vKipcbiAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gKi9cbm9uUHVsbERvd25SZWZyZXNoKCk6dm9pZCB7XG4gIFxufSxcblxuLyoqXG4gKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAqL1xub25SZWFjaEJvdHRvbSgpOnZvaWQge1xuICBcbn0sXG5cbi8qKlxuICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gKi9cbm9uU2hhcmVBcHBNZXNzYWdlKCk6T2JqZWN0IHtcbiAgcmV0dXJuIHt9ICBcbn1cbn0pIl19