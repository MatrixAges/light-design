Component({
	options: {
		//@ts-ignore
		pureDataPattern: /^(visible|timer_close)$/
	},
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: ''
		},
		list: <{
			type: ArrayConstructor
			value: Array<{
				name: String
				icon: String
			}>
		}>{
			type: Array,
			value: []
		},
		scroll: {
			type: Boolean,
			value: false
		},
		vertical: {
			type: Boolean,
			value: false
		},
		textOnly: {
			type: Boolean,
			value: false
		},
		visibleCancel: {
			type: Boolean,
			value: false
		},
		column: {
			type: Number,
			value: 3
		},
		zIndex: {
			type: Number,
			value: 100
		}
	},
	data: {
		_visible_dialog_wrap: false,
		_visible_dialog: false,
		_visible_mask: false,
		timer_close: 0
	},
	observers: {
		visible (new_val) {
			const _that = this

			clearTimeout(_that.data.timer_close)

			if (new_val) {
				_that.setData({ _visible_dialog_wrap: true }, () => {
					_that.setData({
						_visible_dialog: true,
						_visible_mask: true
					})
				})
			} else {
				_that.setData({
					_visible_dialog: false,
					_visible_mask: false
				})

				const timer_close = setTimeout(() => {
					_that.setData({ _visible_dialog_wrap: false })
				}, 300)

				_that.setData({ timer_close })
			}
		},
		vertical (new_val) {
			const _that = this

			if (new_val) {
				_that.setData({ column: 1 })
			}
		}
	},
	methods: {
		catchtouchmove () {},
		onActionItem (e) {
			const _that = this
			const { mark: { index } } = e

			if (index === undefined) return

			_that.setData({ visible: false })

			_that.triggerEvent('onOption', { index: index })
		},
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
