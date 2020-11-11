import { blockRight } from 'components/Icon/data'

Page({
	data: {
		blockRight:blockRight,visible_default: false
	},
	onOption (e: any) {
		const _that = this
		const { mark: { type } } = e

		if (!type) return

		_that.setData({
			[`visible_${type}`]: true
		})
	}
})
