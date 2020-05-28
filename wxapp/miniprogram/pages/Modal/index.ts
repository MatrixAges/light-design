Page({
	data: {
		visible: false,
		maskVisible: true
	},
	onOption (e: any) {
		const _that = this
		const { mark: { maskVisible, position } } = e

		if (!position) return

		if (maskVisible !== false) {
			_that.setData({
				[`visible_${position}`]: true
			})
		} else {
			_that.setData({
				visible_nomask: true
			})
		}
	},
	onClose () {
		const _that = this

		_that.setData({ maskVisible: true })
	}
})
