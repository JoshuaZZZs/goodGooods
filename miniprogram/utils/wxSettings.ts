export default class wxSetting {
    protected reject: AnyFunction = (msg: AnyObject) => {
        return console.error(msg)
    }


    //获取设置
    public getSetting(): Promise<AnyObject> {
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
    public openSetting(): Promise<AnyObject> {
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
    public getAddress(): Promise<AnyObject> {
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
    public chooseAddress(): Promise<AnyObject> {
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