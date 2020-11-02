interface IPositionStyle {
	show: string
	hide: string
}

type Toastenum_position = 'top' | 'bottom'
type Toastenum_type = 'success' | 'warning' | 'error'
type ToastIgetPositionStyle = { [key in Toastenum_position]: IPositionStyle }

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
			type: String,
			value: 'bottom' // top | bottom
		},
		type: {
			type: String,
			value: '' // success | warning | error
		},
		useColor: {
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
		duration: {
			type: Number,
			value: 3000
		},
		zIndex: {
			type: Number,
			value: 100
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
			const { position, duration } = _that.data
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

				const timer_duration = setTimeout(() => {
					_that.setData({ visible: false })
				}, duration)

				_that.setData({ timer_duration })
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
		getPositionStyle (): ToastIgetPositionStyle {
			return {
				top: {
					show: `opacity:1;transform:translateY(0);top:15vh;`,
					hide: `opacity:0;transform:translateY(-120%);top:15vh;`
				},
				bottom: {
					show: `opacity:1;transform:translateY(0);bottom:15vh;`,
					hide: `opacity:0;transform:translateY(120%);bottom:15vh;`
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
		}
	}
})
