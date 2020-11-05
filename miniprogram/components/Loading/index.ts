Component({
	options: {
		//@ts-ignore
		pureDataPattern: /^visible|delay$/
	},
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		type: <{
			type: StringConstructor
			value:
				| 'refresh'
				| 'loading'
				| 'dots'
				| 'flower'
				| 'dashboard'
				| 'heartbeat'
				| 'taiji'
		}>{
			type: String,
			value: 'refresh'
		},
		size: {
			type: Number,
			value: 1
		},
		text: {
			type: String,
			value: ''
		},
		delay: {
			type: Number,
			value: 0
		}
	},
	observers: {
		visible (new_val) {
			const _that = this
			const { delay, timer_show } = _that.data

			clearTimeout(timer_show)

			if (new_val) {
				const timer_show = setTimeout(() => {
					_that.setData({ _visible: true })
				}, delay)

				_that.setData({ timer_show })
			} else {
				_that.setData({ _visible: false })
			}
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
