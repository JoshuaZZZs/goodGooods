/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    cssSet?: AnyObject
  }
  request: {}
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}