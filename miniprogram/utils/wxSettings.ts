  export default class wxSetting {
    protected reject: any = (msg: any) => {
        return console.error(msg)
    }
    constructor() {
        
    }
    //获取设置
    public getSetting(): any {
        return new Promise((resolve, reject = this.reject) => {
            wx.getSetting({
                success: (result) => {
                    resolve(result);
                },
                fail: reject

            });
        })
    }
    //打开设置
    public openSetting(): any {
        return new Promise((resolve, reject = this.reject) => {
            wx.openSetting({
                success: (result) => {
                    resolve(result);
                },
                fail: reject
            });
        })
    }
    //获取地址
    public getAddress(): any {
        return new Promise((resolve, reject = this.reject) => {
            wx.chooseAddress({
                success: (result) => {
                    resolve(result);
                },
                fail: reject
            });
        })
    }
    //选中地址状态
    public chooseAddress(): any {
        return new Promise((resolve, reject = this.reject) => {
            wx.chooseAddress({
                success: (result) => {
                    resolve(result);
                },
                fail: (err) => {
                    reject(err);
                }
            });
        })
    }


}