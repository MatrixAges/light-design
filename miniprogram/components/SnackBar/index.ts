interface IPositionStyle {
	show: string
	hide: string
}

type SnackBar_position = 'top' | 'bottom'
type SnackBar_type = 'success' | 'warning' | 'error'
type SnackBar_IgetPositionStyle = { [key in SnackBar_position]: IPositionStyle }

Component({
	properties: {
		visible: {
			type: Boolean,
			value: false
            },
            type: {
			type: String,
			value: '' // success | warning | error
		},
		position: {
			type: String,
			value: 'bottom' // top | bottom
		},
		top: {
			type: Number,
			value: 0
		},
		bottom: {
			type: Number,
			value: 0
		},
		cover: {
			type: Boolean,
			value: false
		},
		color: {
			type: String,
			value: ''
		},
		bgColor: {
			type: String,
			value: ''
		},
		title: {
			type: String,
			value: ''
		},
		description: {
			type: String,
			value: ''
		},
		okText: {
			type: String,
			value: 'OK'
		},
		autoClose: {
			type: Boolean,
			value: false
		},
		duration: {
			type: Number,
			value: 3000
		},
		zIndex: {
			type: Number,
			value: 100
		},
		mini: {
			type: Boolean,
			value: false
		},
		custom: {
			type: Boolean,
			value: false
		}
	},
	data: {
		_visible: false,
		style: '',
		timer_duration: 0,
		timer_close: 0
	},
	observers: {
		visible (new_val) {
			const _that = this
			const { position, autoClose, duration } = _that.data
                  const position_style: any = _that.getPositionStyle()
                  
			clearTimeout(_that.data.timer_duration)
                  clearTimeout(_that.data.timer_close)

			if (new_val) {
				_that.setData(
					{
						_visible: true,
						_duration: 0
					},
					() => {
						_that.setData({ style: position_style[position].show })
					}
				)

				if (autoClose) {
					const timer_duration = setTimeout(() => {
						_that.setData({ visible: false })
					}, duration + 30)

					_that.setData({ timer_duration })
				}
			} else {
				_that.setData({ style: position_style[position].hide })

				const timer_close = setTimeout(() => {
					_that.setData({ _visible: false })
				}, 300)

				_that.setData({ timer_close })
			}
		}
	},
	methods: {
		catchtouchmove () {},
		getPositionStyle (): SnackBar_IgetPositionStyle {
			const _that = this
			const { top, bottom } = _that.data

			return {
				top: {
					show: `opacity:1;transform:translateY(0);top:${top}rpx;`,
					hide: `opacity:0;transform:translateY(-120%);top:${top}rpx;`
				},
				bottom: {
					show: `opacity:1;transform:translateY(0);bottom:${bottom}rpx;`,
					hide: `opacity:0;transform:translateY(120%);bottom:${bottom}rpx;`
				}
			}
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
		},
		onOk () {
			const _that = this

			_that.setData({ visible: false })

			_that.triggerEvent('onOk')
		}
	}
})
