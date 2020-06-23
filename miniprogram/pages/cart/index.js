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
        result: [],
        isSelectAll: false,
        selectedGoods: {}
    },
    selectAllOrNull: function () {
        this.setData({
            isSelectAll: !this.data.isSelectAll
        });
        var all = [];
        if (this.data.isSelectAll) {
            this.data.cart.forEach(function (element) {
                all.push(String(element.goods_id));
            });
            this.setData({ result: all });
        }
        else {
            this.setData({ result: [] });
        }
        this.changeSubmit();
    },
    changeNum: function (e) {
        var index = this.data.cart.findIndex(function (item) { return item.goods_id === e.detail.goods_id; });
        if (index !== -1) {
            this.data.cart[index].number = e.detail.number;
            wx.setStorageSync("carts", this.data.cart);
        }
        if (this.data.result.some(function (item) { return e.detail.goods_id.toString() === item; })) {
            this.changeSubmit();
        }
    },
    selectChange: function (event) {
        this.setData({
            result: event.detail,
        });
        if (this.data.result.length === this.data.cart.length) {
            this.setData({ isSelectAll: true });
        }
        else {
            this.setData({ isSelectAll: false });
        }
        this.changeSubmit();
    },
    changeSubmit: function () {
        var selectedGoods = {
            total: 0,
            price: 0,
            detail: []
        };
        var _loop_1 = function (item) {
            var index = this_1.data.cart.findIndex(function (goods) { return Number(goods.goods_id) === Number(item); });
            if (index !== -1) {
                selectedGoods.detail.push(this_1.data.cart[index]);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.data.result; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
        selectedGoods.detail.forEach(function (item) {
            selectedGoods.total += item.number;
            selectedGoods.price += item.number * item.goodsDetail.goods_price;
        });
        this.setData({ selectedGoods: selectedGoods });
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
    onShow: function () {
        this.setData({ cart: wx.getStorageSync("carts") });
    },
    onReady: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE4QztBQU05QyxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFFSixTQUFTLEVBQUUsRUFBRTtRQUViLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUVoQyxNQUFNLEVBQWlCLEVBQUU7UUFFekIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsYUFBYSxFQUFpQixFQUFFO0tBQ2pDO0lBQ0QsZUFBZSxFQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNwQyxDQUFDLENBQUE7UUFDRixJQUFNLEdBQUcsR0FBYSxFQUFFLENBQUE7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFrQjtnQkFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDcEMsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUM3QjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUVyQixDQUFDO0lBR0QsU0FBUyxFQUFULFVBQVUsQ0FBd0I7UUFDaEMsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFB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QUNuRCxXQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7OzRCQUdkLFdBQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBdkMsT0FBTyxHQUFHLFNBQTZCO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBR2hHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBOzs7O3dCQUd4QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFBOzs7Ozs7S0FHdkI7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBV0QsT0FBTyxFQUFQO0lBRUEsQ0FBQztDQVFGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3eFNldHRpbmcgZnJvbSAnLi4vLi4vdXRpbHMvd3hTZXR0aW5ncydcbnR5cGUgc2VsZWN0ZWRHb29kcyA9IHtcbiAgdG90YWw6IG51bWJlcixcbiAgcHJpY2U6IG51bWJlcixcbiAgZGV0YWlsOiBBcnJheTxnb29kc0l0ZW0+XG59XG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8v5pS26LSn5Zyw5Z2AXG4gICAgY29uZGl0aW9uOiAnJyxcbiAgICAvL+i0reeJqei9puS4reeahOaVsOaNrlxuICAgIGNhcnQ6IHd4LmdldFN0b3JhZ2VTeW5jKFwiY2FydHNcIiksXG4gICAgLy/miYDmnInpgInkuK3nmoTllYblk4HmlbDmja5cbiAgICByZXN1bHQ6IDxBcnJheTxzdHJpbmc+PltdLFxuICAgIC8v5piv5ZCm5YWo6YCJXG4gICAgaXNTZWxlY3RBbGw6IGZhbHNlLFxuICAgIHNlbGVjdGVkR29vZHM6IDxzZWxlY3RlZEdvb2RzPnt9XG4gIH0sXG4gIHNlbGVjdEFsbE9yTnVsbCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaXNTZWxlY3RBbGw6ICF0aGlzLmRhdGEuaXNTZWxlY3RBbGxcbiAgICB9KVxuICAgIGNvbnN0IGFsbDogc3RyaW5nW10gPSBbXVxuICAgIGlmICh0aGlzLmRhdGEuaXNTZWxlY3RBbGwpIHtcblxuICAgICAgdGhpcy5kYXRhLmNhcnQuZm9yRWFjaCgoZWxlbWVudDogZ29vZHNJdGVtKSA9PiB7XG4gICAgICAgIGFsbC5wdXNoKFN0cmluZyhlbGVtZW50Lmdvb2RzX2lkKSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldERhdGEoeyByZXN1bHQ6IGFsbCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEoeyByZXN1bHQ6IFtdIH0pXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlU3VibWl0KClcblxuICB9LFxuXG4gIC8v5o6l5pS25pWw6YeP5Y+Y5YyWXG4gIGNoYW5nZU51bShlOiB7IGRldGFpbDogZ29vZHNJdGVtIH0pIHtcbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5kYXRhLmNhcnQuZmluZEluZGV4KChpdGVtOiBnb29kc0l0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uZ29vZHNfaWQgPT09IGUuZGV0YWlsLmdvb2RzX2lkIH0pXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhLmNhcnRbaW5kZXhdLm51bWJlciA9IGUuZGV0YWlsLm51bWJlclxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjYXJ0c1wiLCB0aGlzLmRhdGEuY2FydClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhLnJlc3VsdC5zb21lKGl0ZW0gPT4geyByZXR1cm4gZS5kZXRhaWwuZ29vZHNfaWQudG9TdHJpbmcoKSA9PT0gaXRlbSB9KSkge1xuICAgICAgdGhpcy5jaGFuZ2VTdWJtaXQoKVxuICAgIH1cblxuICB9LFxuICAvL+W9k+mAieS4reWAvOWGheWuueaUueWPmOaXtuinpuWPkVxuICBzZWxlY3RDaGFuZ2UoZXZlbnQ6IHsgZGV0YWlsOiBBcnJheTxzdHJpbmc+IH0pIHtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICByZXN1bHQ6IGV2ZW50LmRldGFpbCxcbiAgICB9KVxuICAgIGlmICh0aGlzLmRhdGEucmVzdWx0Lmxlbmd0aCA9PT0gdGhpcy5kYXRhLmNhcnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBpc1NlbGVjdEFsbDogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBpc1NlbGVjdEFsbDogZmFsc2UgfSlcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VTdWJtaXQoKVxuXG4gIH0sXG4gIGNoYW5nZVN1Ym1pdCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZEdvb2RzID0ge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGRldGFpbDogPEFycmF5PGdvb2RzSXRlbT4+W11cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZGF0YS5yZXN1bHQpIHtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuY2FydC5maW5kSW5kZXgoKGdvb2RzOiBnb29kc0l0ZW0pID0+IHsgcmV0dXJuIE51bWJlcihnb29kcy5nb29kc19pZCkgPT09IE51bWJlcihpdGVtKSB9KVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZEdvb2RzLmRldGFpbC5wdXNoKHRoaXMuZGF0YS5jYXJ0W2luZGV4XSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RlZEdvb2RzLmRldGFpbC5mb3JFYWNoKChpdGVtOiBnb29kc0l0ZW0pID0+IHtcbiAgICAgIHNlbGVjdGVkR29vZHMudG90YWwgKz0gaXRlbS5udW1iZXJcbiAgICAgIHNlbGVjdGVkR29vZHMucHJpY2UgKz0gaXRlbS5udW1iZXIgKiBpdGVtLmdvb2RzRGV0YWlsLmdvb2RzX3ByaWNlXG4gICAgfSlcbiAgICB0aGlzLnNldERhdGEoeyBzZWxlY3RlZEdvb2RzIH0pXG4gIH0sXG4gIC8v6I635Y+W55So5oi35pS26LSn5Zyw5Z2AXG4gIGFzeW5jIGdldEFkcmVzcygpIHtcbiAgICBjb25zdCBzZXR0aW5nID0gbmV3IHd4U2V0dGluZygpXG5cbiAgICB0cnkge1xuICAgICAgLy/ojrflj5bmiYDmnInmnYPpmZDnirbmgIFcbiAgICAgIGNvbnN0IHJvbGVTdGF0dXMgPSBhd2FpdCBzZXR0aW5nLmdldFNldHRpbmcoKTtcbiAgICAgIC8vICDliKTmlq3mmK/lkKbmnInlnLDlnYDmnYPpmZBcbiAgICAgIGlmIChyb2xlU3RhdHVzLmF1dGhTZXR0aW5nW1wic2NvcGUuYWRkcmVzc1wiXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXdhaXQgc2V0dGluZy5vcGVuU2V0dGluZygpO1xuICAgICAgfVxuICAgICAgLy8gIOiwg+eUqOiOt+WPluaUtui0p+WcsOWdgOeahCBhcGlcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzZXR0aW5nLmNob29zZUFkZHJlc3MoKTtcbiAgICAgIGFkZHJlc3MuYWxsID0gYWRkcmVzcy5wcm92aW5jZU5hbWUgKyBhZGRyZXNzLmNpdHlOYW1lICsgYWRkcmVzcy5jb3VudHlOYW1lICsgYWRkcmVzcy5kZXRhaWxJbmZvO1xuXG4gICAgICAvLyDmlL7lhaXnvJPlrZjkuK1cbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGNvbmRpdGlvbjogYWRkcmVzcy5hbGwgfSlcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cblxuICB9LFxuICBvblNob3coKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgY2FydDogd3guZ2V0U3RvcmFnZVN5bmMoXCJjYXJ0c1wiKSB9KVxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIC8qKm9uTG9hZChvcHRpb25zKTp2b2lkIHtcbiAgICBcbiAgfSwqL1xuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpOiB2b2lkIHtcbiAgICAvL2RvIHNvbWV0aGluZyB3aGVuIHBhZ2UgcmVhZHlcbiAgfSxcblxuXG5cblxuXG5cblxufSkiXX0=