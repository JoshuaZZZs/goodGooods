/// <reference path="./wx/index.d.ts" />

declare namespace WechatMiniprogram {
    //封装的工具类

    interface Wx {
        util: any
        /**
         * 方法例子
         *  formatTime(date: Date): string {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
      [year, month, day].map(this.formatNumber).join('/') +
      ' ' +
      [hour, minute, second].map(this.formatNumber).join(':')
    )
  },

  formatNumber(n: number): string {
    const s = n.toString()
    return s[1] ? s : '0' + s
  },
  confirm({ title: title = <string>'', content: content = <string>'', ...config }: AnyObject): Promise<AnyObject> {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: content,
        ...config,
        success(res) {
          if (res.confirm) {
            resolve
          } else if (res.cancel) {
            reject
          }
        }
      })
    })

  }
         */
    }
}


