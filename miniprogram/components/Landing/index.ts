Component({
      options: {
		//@ts-ignore
		pureDataPattern: /^visible$/
	},
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		zIndex: {
			type: Number,
			value: 100
		},
		maskVisible: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		catchtouchmove () {},
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
