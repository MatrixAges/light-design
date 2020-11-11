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
	onAction (e: any) {
		console.log(e)
	}
})
