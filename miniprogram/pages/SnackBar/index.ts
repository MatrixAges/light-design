Page({
	data: {
		visible_default: false
	},
	onOption ({ mark: { type } }: any) {
		const _that = this

		if (!type) return

		_that.setData({
			[`visible_${type}`]: true
		})
	},
	hide ({ mark: { type } }: any) {
		const _that = this

		if (!type) return

		_that.setData({
			[`visible_${type}`]: false
		})
	}
})
