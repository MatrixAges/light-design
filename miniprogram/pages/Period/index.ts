import { blockRight } from 'components/Icon/data'

Page({
	data: {
		blockRight: blockRight,
		visible_default: false,
		visible_period_data: false,
		period_data: {}
	},
	onOption (e: any) {
		const _that = this
		const { mark: { type } } = e

		if (!type) return

		_that.setData({
			[`visible_${type}`]: true
		})
	},
	onSelectedPeriod ({ detail }: WechatMiniprogram.TouchEvent) {
		const _that = this

		_that.setData({
			visible_period_data: true,
			period_data: JSON.parse(JSON.stringify(detail))
		})
	}
})
