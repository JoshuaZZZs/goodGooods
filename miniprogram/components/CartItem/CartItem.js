"use strict";
Component({
    properties: {
        cartItemData: {
            type: Object,
            value: {},
        },
    },
    data: {},
    attached: function () {
        this.setData({ itemData: JSON.parse(JSON.stringify(this.properties.cartItemData)) });
    },
    methods: {
        handleGoods: function (e) {
            var _this = this;
            var content = '';
            if (e.target.dataset.type === 'collect') {
                content = '即将把该商品移入收藏夹';
            }
            else {
                content = '将该删除该商品';
            }
            wx.util.confirm({ title: '', content: content }).then(function (res) {
                if (res.confirm) {
                    _this.triggerEvent('handleGoods', { type: e.target.dataset.type, detail: _this.properties.cartItemData });
                }
            });
        },
        changeGoodsItem: function (e) {
            this.properties.cartItemData.number = e.detail;
            this.triggerEvent("changeNum", this.properties.cartItemData);
        },
        handleSelect: function () {
            this.triggerEvent("handleSelect", this.properties.cartItemData);
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXJ0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBRVYsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUVWO0tBRUY7SUFDRCxJQUFJLEVBQUUsRUFDTDtJQUNELFFBQVEsRUFBRTtRQUdSLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdEYsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLFdBQVcsRUFBWCxVQUFZLENBQU07WUFBbEIsaUJBYUM7WUFYQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxPQUFPLEdBQUcsYUFBYSxDQUFBO2FBQ3hCO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxTQUFTLENBQUE7YUFDcEI7WUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBYztnQkFDbkUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNmLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBO2lCQUN4RztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGVBQWUsRUFBZixVQUFnQixDQUFxQjtZQUVuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRTlELENBQUM7UUFDRCxZQUFZO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNqRSxDQUFDO0tBQ0Y7Q0FFRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBPYmplY3RcbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvL+i+heWKqeS7tuS8oOmAkueahOaVsOaNrlxuICAgIGNhcnRJdGVtRGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuXG4gICAgfSxcblxuICB9LFxuICBkYXRhOiB7XG4gIH0sXG4gIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyDlnKjnu4Tku7blrp7kvovov5vlhaXpobXpnaLoioLngrnmoJHml7bmiafooYxcbiAgICB0aGlzLnNldERhdGEoeyBpdGVtRGF0YTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BlcnRpZXMuY2FydEl0ZW1EYXRhKSkgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUdvb2RzKGU6IGFueSkge1xuXG4gICAgICBsZXQgY29udGVudCA9ICcnXG4gICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC50eXBlID09PSAnY29sbGVjdCcpIHtcbiAgICAgICAgY29udGVudCA9ICfljbPlsIbmioror6XllYblk4Hnp7vlhaXmlLbol4/lpLknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gJ+WwhuivpeWIoOmZpOivpeWVhuWTgSdcbiAgICAgIH1cbiAgICAgIHd4LnV0aWwuY29uZmlybSh7IHRpdGxlOiAnJywgY29udGVudDogY29udGVudCB9KS50aGVuKChyZXM6IEFueU9iamVjdCkgPT4ge1xuICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaGFuZGxlR29vZHMnLCB7IHR5cGU6IGUudGFyZ2V0LmRhdGFzZXQudHlwZSwgZGV0YWlsOiB0aGlzLnByb3BlcnRpZXMuY2FydEl0ZW1EYXRhIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VHb29kc0l0ZW0oZTogeyBkZXRhaWw6IG51bWJlciB9KSB7XG5cbiAgICAgIHRoaXMucHJvcGVydGllcy5jYXJ0SXRlbURhdGEubnVtYmVyID0gZS5kZXRhaWxcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2hhbmdlTnVtXCIsIHRoaXMucHJvcGVydGllcy5jYXJ0SXRlbURhdGEpXG5cbiAgICB9LFxuICAgIGhhbmRsZVNlbGVjdCgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiaGFuZGxlU2VsZWN0XCIsIHRoaXMucHJvcGVydGllcy5jYXJ0SXRlbURhdGEpXG4gICAgfSxcbiAgfSxcblxufSk7Il19