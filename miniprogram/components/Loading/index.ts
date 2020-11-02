Component({
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		size: {
			type: Number,
			value: 1
		}
	},
	methods: {
		onShow () {
			const _that = this

			_that.setData({ visible: true })

			_that.triggerEvent('onShow')
		},
		onClose () {
			const _that = this

			_that.setData({ visible: false })

			_that.triggerEvent('onClose')
		}
	}
})
