/// <reference path="../node_modules/@types/wechat-miniprogram/index.d.ts" />

interface IAppOption {
	globalData: {
		userInfo?: WechatMiniprogram.UserInfo
	}
	userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback
}
