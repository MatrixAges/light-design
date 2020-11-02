interface IList {
	name: String
	icon: String
}

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
		position: {
			type: Array,
			value: [ '', '', '', '' ] // top , bottom , left , right
		},
		mark: {
			type: Array,
			value: [ '-8rpx', '', '', '30rpx' ] // top , bottom , left , right
		},
		transformOrigin: {
			type: String,
			value: 'top right'
		},
		list: {
			type: Array,
			value: []
		},
		bgColor: {
			type: String,
			value: 'black'
		},
		color: {
			type: String,
			value: 'white'
		},
		divideColor: {
			type: String,
			value: 'rgba(255, 255, 255, 0.15)'
		},
		zIndex: {
			type: Number,
			value: 100
		}
	},
	data: {
		_visible_dialog_wrap: false,
		_visible_dialog: false,
		timer_close: 0
	},
	observers: {
		visible (new_val) {
			const _that = this

			clearTimeout(_that.data.timer_close)

			if (new_val) {
				_that.setData({ _visible_dialog_wrap: true }, () => {
					_that.setData({ _visible_dialog: true })
				})
			} else {
				_that.setData({ _visible_dialog: false })

				const timer_close = setTimeout(() => {
					_that.setData({ _visible_dialog_wrap: false })
				}, 300)

				_that.setData({ timer_close })
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
