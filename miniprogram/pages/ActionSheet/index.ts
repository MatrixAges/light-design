import { blockRight } from 'components/Icon/data'

Page({
	data: {
		blockRight: blockRight,
		visible_default: false,
		list: [
			{
				name: '朋友圈',
				icon: '/image/logo_pengyouquan.svg'
			},
			{
				name: '微信好友',
				icon: '/image/logo_wechat.svg'
			},
			{
				name: 'QQ空间',
				icon: '/image/logo_qzone.svg'
			},
			{
				name: 'QQ好友',
				icon: '/image/logo_qq.svg'
			},
			{
				name: '微博',
				icon: '/image/logo_weibo.svg'
			},
			{
				name: '钉钉',
				icon: '/image/logo_dingding.svg'
			},
			{
				name: '知乎',
				icon: '/image/logo_zhihu.svg'
			},
			{
				name: '易信',
				icon: '/image/logo_yixin.svg'
			},
			{
				name: 'instagram',
				icon: '/image/logo_instagram.svg'
			}
		],
		list_share: [
			{
				name: '朋友圈',
				icon: '/image/logo_pengyouquan.svg',
				button: true,
				openType: 'share'
			},
			{
				name: '微信好友',
				icon: '/image/logo_wechat.svg',
				button: true,
				openType: 'share'
			},
			{
				name: 'QQ空间',
				icon: '/image/logo_qzone.svg',
				button: true,
				openType: 'share'
			},
			{
				name: 'QQ好友',
				icon: '/image/logo_qq.svg',
				button: true,
				openType: 'share'
			},
			{
				name: '微博',
				icon: '/image/logo_weibo.svg',
				button: true,
				openType: 'share'
			},
			{
				name: '钉钉',
				icon: '/image/logo_dingding.svg',
				button: true,
				openType: 'share'
			},
			{
				name: '知乎',
				icon: '/image/logo_zhihu.svg',
				button: true,
				openType: 'share'
			},
			{
				name: '易信',
				icon: '/image/logo_yixin.svg',
				button: true,
				openType: 'share'
			},
			{
				name: 'instagram',
				icon: '/image/logo_instagram.svg',
				button: true,
				openType: 'share'
			}
		],
		list_getPhoneNumber: [
			{
				name: '朋友圈',
				icon: '/image/logo_pengyouquan.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: '微信好友',
				icon: '/image/logo_wechat.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: 'QQ空间',
				icon: '/image/logo_qzone.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: 'QQ好友',
				icon: '/image/logo_qq.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: '微博',
				icon: '/image/logo_weibo.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: '钉钉',
				icon: '/image/logo_dingding.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: '知乎',
				icon: '/image/logo_zhihu.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: '易信',
				icon: '/image/logo_yixin.svg',
				button: true,
				openType: 'getPhoneNumber'
			},
			{
				name: 'instagram',
				icon: '/image/logo_instagram.svg',
				button: true,
				openType: 'getPhoneNumber'
			}
		]
	},
	onOption (e: any) {
		const _that = this
		const { mark: { type } } = e

		if (!type) return

		_that.setData({
			[`visible_${type}`]: true
		})
	},
	onAction ({ detail: { index } }: WechatMiniprogram.TouchEvent) {
		wx.showToast({
			icon: 'none',
			title: `tapped item ${index}`
		})
	},
	onShareAppMessage ({ target: { dataset: { index } } }) {
		return {
			title: `tapped share item ${index}`,
			path: ''
		}
	},
	getphonenumber (
		e: WechatMiniprogram.TouchEvent<
			WechatMiniprogram.TouchEvent<WechatMiniprogram.ButtonGetPhoneNumber>
		>
	) {
		console.log(e.detail.detail)
	}
})
