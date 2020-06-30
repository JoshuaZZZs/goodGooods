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
        cart: wx.getStorageSync("cart"),
        result: [],
        isSelectAll: false,
        selectedGoods: {}
    },
    submitCart: function () {
        wx.setStorageSync("selectedGoods", this.data.selectedGoods);
        wx.navigateTo({
            url: "/pages/pay/index"
        });
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
            wx.setStorageSync("cart", this.data.cart);
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
    handleGoods: function (e) {
        if (e.detail.type === 'collect') {
            console.log('collect');
        }
        else {
            this.data.cart.splice(this.data.cart.findIndex(function (item) { return item.goods_id === e.detail.detail.goods_id; }), 1);
            wx.showToast({ title: '删除成功' });
        }
        this.setData({ cart: this.data.cart });
        wx.setStorageSync("cart", this.data.cart);
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
        this.setData({ cart: wx.getStorageSync("cart") });
        this.changeSubmit();
    },
    onReady: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLHFEQUE4QztBQUM5QyxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFFSixTQUFTLEVBQUUsRUFBRTtRQUViLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUUvQixNQUFNLEVBQWlCLEVBQUU7UUFFekIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsYUFBYSxFQUFpQixFQUFFO0tBQ2pDO0lBRUQsVUFBVTtRQUVSLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDM0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWUsRUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7U0FDcEMsQ0FBQyxDQUFBO1FBQ0YsSUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFBO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBa0I7Z0JBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFB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QUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBR2hHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBOzs7O3dCQUd4QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFBOzs7Ozs7S0FHdkI7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQVdELE9BQU8sRUFBUDtJQUVBLENBQUM7Q0FRRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIHNlbGVjdGVkR29vZHMgPSB7XG4gIHRvdGFsOiBudW1iZXIsXG4gIHByaWNlOiBudW1iZXIsXG4gIGRldGFpbDogQXJyYXk8Z29vZHNJdGVtPlxufVxuaW1wb3J0IHd4U2V0dGluZyBmcm9tICcuLi8uLi91dGlscy93eFNldHRpbmdzJ1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICAvL+aUtui0p+WcsOWdgFxuICAgIGNvbmRpdGlvbjogJycsXG4gICAgLy/otK3nianovabkuK3nmoTmlbDmja5cbiAgICBjYXJ0OiB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIiksXG4gICAgLy/miYDmnInpgInkuK3nmoTllYblk4HmlbDmja5cbiAgICByZXN1bHQ6IDxBcnJheTxzdHJpbmc+PltdLFxuICAgIC8v5piv5ZCm5YWo6YCJXG4gICAgaXNTZWxlY3RBbGw6IGZhbHNlLFxuICAgIHNlbGVjdGVkR29vZHM6IDxzZWxlY3RlZEdvb2RzPnt9XG4gIH0sXG4gIC8v5o+Q5Lqk6K6i5Y2VXG4gIHN1Ym1pdENhcnQoKSB7XG5cbiAgICB3eC5zZXRTdG9yYWdlU3luYyhcInNlbGVjdGVkR29vZHNcIiwgdGhpcy5kYXRhLnNlbGVjdGVkR29vZHMpXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IFwiL3BhZ2VzL3BheS9pbmRleFwiXG4gICAgfSlcbiAgfSxcbiAgLy/miYvliqjliIfmjaLmmK/lkKblhajpgIlcbiAgc2VsZWN0QWxsT3JOdWxsKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc1NlbGVjdEFsbDogIXRoaXMuZGF0YS5pc1NlbGVjdEFsbFxuICAgIH0pXG4gICAgY29uc3QgYWxsOiBzdHJpbmdbXSA9IFtdXG4gICAgaWYgKHRoaXMuZGF0YS5pc1NlbGVjdEFsbCkge1xuXG4gICAgICB0aGlzLmRhdGEuY2FydC5mb3JFYWNoKChlbGVtZW50OiBnb29kc0l0ZW0pID0+IHtcbiAgICAgICAgYWxsLnB1c2goU3RyaW5nKGVsZW1lbnQuZ29vZHNfaWQpKVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7IHJlc3VsdDogYWxsIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IHJlc3VsdDogW10gfSlcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VTdWJtaXQoKVxuXG4gIH0sXG5cbiAgLy/mjqXmlLbmlbDph4/lj5jljJZcbiAgY2hhbmdlTnVtKGU6IHsgZGV0YWlsOiBnb29kc0l0ZW0gfSkge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuY2FydC5maW5kSW5kZXgoKGl0ZW06IGdvb2RzSXRlbSkgPT4geyByZXR1cm4gaXRlbS5nb29kc19pZCA9PT0gZS5kZXRhaWwuZ29vZHNfaWQgfSlcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGEuY2FydFtpbmRleF0ubnVtYmVyID0gZS5kZXRhaWwubnVtYmVyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImNhcnRcIiwgdGhpcy5kYXRhLmNhcnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YS5yZXN1bHQuc29tZShpdGVtID0+IHsgcmV0dXJuIGUuZGV0YWlsLmdvb2RzX2lkLnRvU3RyaW5nKCkgPT09IGl0ZW0gfSkpIHtcbiAgICAgIHRoaXMuY2hhbmdlU3VibWl0KClcbiAgICB9XG5cbiAgfSxcbiAgLy/lvZPpgInkuK3lgLzlhoXlrrnmlLnlj5jml7bop6blj5FcbiAgc2VsZWN0Q2hhbmdlKGV2ZW50OiB7IGRldGFpbDogQXJyYXk8c3RyaW5nPiB9KSB7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcmVzdWx0OiBldmVudC5kZXRhaWwsXG4gICAgfSlcbiAgICBpZiAodGhpcy5kYXRhLnJlc3VsdC5sZW5ndGggPT09IHRoaXMuZGF0YS5jYXJ0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXREYXRhKHsgaXNTZWxlY3RBbGw6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREYXRhKHsgaXNTZWxlY3RBbGw6IGZhbHNlIH0pXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlU3VibWl0KClcblxuICB9LFxuICAvL+eUqOaIt+WvueWVhuWTgei/m+ihjOaUtuiXj+aIluWIoOmZpOaTjeS9nFxuICBoYW5kbGVHb29kcyhlOiBBbnlPYmplY3QpIHtcbiAgICBpZiAoZS5kZXRhaWwudHlwZSA9PT0gJ2NvbGxlY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29sbGVjdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5jYXJ0LnNwbGljZSh0aGlzLmRhdGEuY2FydC5maW5kSW5kZXgoKGl0ZW06IGdvb2RzSXRlbSkgPT4geyByZXR1cm4gaXRlbS5nb29kc19pZCA9PT0gZS5kZXRhaWwuZGV0YWlsLmdvb2RzX2lkIH0pLCAxKVxuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTmiJDlip8nIH0pXG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7IGNhcnQ6IHRoaXMuZGF0YS5jYXJ0IH0pXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjYXJ0XCIsIHRoaXMuZGF0YS5jYXJ0KTtcbiAgfSxcbiAgY2hhbmdlU3VibWl0KCkge1xuICAgIGNvbnN0IHNlbGVjdGVkR29vZHMgPSB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIHByaWNlOiAwLFxuICAgICAgZGV0YWlsOiA8QXJyYXk8Z29vZHNJdGVtPj5bXVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhLnJlc3VsdCkge1xuICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZGF0YS5jYXJ0LmZpbmRJbmRleCgoZ29vZHM6IGdvb2RzSXRlbSkgPT4geyByZXR1cm4gTnVtYmVyKGdvb2RzLmdvb2RzX2lkKSA9PT0gTnVtYmVyKGl0ZW0pIH0pXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkR29vZHMuZGV0YWlsLnB1c2godGhpcy5kYXRhLmNhcnRbaW5kZXhdKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdGVkR29vZHMuZGV0YWlsLmZvckVhY2goKGl0ZW06IGdvb2RzSXRlbSkgPT4ge1xuICAgICAgc2VsZWN0ZWRHb29kcy50b3RhbCArPSBpdGVtLm51bWJlclxuICAgICAgc2VsZWN0ZWRHb29kcy5wcmljZSArPSBpdGVtLm51bWJlciAqIGl0ZW0uZ29vZHNEZXRhaWwuZ29vZHNfcHJpY2VcbiAgICB9KVxuICAgIHRoaXMuc2V0RGF0YSh7IHNlbGVjdGVkR29vZHMgfSlcblxuICB9LFxuICAvL+iOt+WPlueUqOaIt+aUtui0p+WcsOWdgFxuICBhc3luYyBnZXRBZHJlc3MoKSB7XG4gICAgY29uc3Qgc2V0dGluZyA9IG5ldyB3eFNldHRpbmcoKVxuXG4gICAgdHJ5IHtcbiAgICAgIC8v6I635Y+W5omA5pyJ5p2D6ZmQ54q25oCBXG4gICAgICBjb25zdCByb2xlU3RhdHVzID0gYXdhaXQgc2V0dGluZy5nZXRTZXR0aW5nKCk7XG4gICAgICAvLyAg5Yik5pat5piv5ZCm5pyJ5Zyw5Z2A5p2D6ZmQXG4gICAgICBpZiAocm9sZVN0YXR1cy5hdXRoU2V0dGluZ1tcInNjb3BlLmFkZHJlc3NcIl0gPT09IGZhbHNlKSB7XG4gICAgICAgIGF3YWl0IHNldHRpbmcub3BlblNldHRpbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vICDosIPnlKjojrflj5bmlLbotKflnLDlnYDnmoQgYXBpXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2V0dGluZy5jaG9vc2VBZGRyZXNzKCk7XG4gICAgICBhZGRyZXNzLmFsbCA9IGFkZHJlc3MucHJvdmluY2VOYW1lICsgYWRkcmVzcy5jaXR5TmFtZSArIGFkZHJlc3MuY291bnR5TmFtZSArIGFkZHJlc3MuZGV0YWlsSW5mbztcblxuICAgICAgLy8g5pS+5YWl57yT5a2Y5LitXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImFkZHJlc3NcIiwgYWRkcmVzcyk7XG4gICAgICB0aGlzLnNldERhdGEoeyBjb25kaXRpb246IGFkZHJlc3MuYWxsIH0pXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG5cbiAgfSxcbiAgb25TaG93KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7IGNhcnQ6IHd4LmdldFN0b3JhZ2VTeW5jKFwiY2FydFwiKSB9KVxuICAgIHRoaXMuY2hhbmdlU3VibWl0KClcbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICAvKipvbkxvYWQob3B0aW9ucyk6dm9pZCB7XG4gICAgXG4gIH0sKi9cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKTogdm9pZCB7XG4gICAgLy9kbyBzb21ldGhpbmcgd2hlbiBwYWdlIHJlYWR5XG4gIH0sXG5cblxuXG5cblxuXG5cbn0pIl19