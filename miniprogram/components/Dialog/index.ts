Component({
	options: {
		//@ts-ignore
		pureDataPattern: /^(visible|confirmLoading|timer_show|timer_close|timer_hide_loading)$/,
		multipleSlots: true
	},
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: '提示'
            },
            custom: {
			type: Boolean,
			value: false
		},
		confirmLoading: {
			type: Boolean,
			value: false
		},
		footerVisible: {
			type: Boolean,
			value: true
		},
		closeVisible: {
			type: Boolean,
			value: false
		},
		bottom: {
			type: Boolean,
			value: false
		},
		zIndex: {
			type: Number,
			value: 100
		},
		okText: {
			type: String,
			value: '确定'
		},
		cancelText: {
			type: String,
			value: '取消'
		},
		cancelVisible: {
			type: Boolean,
			value: true
		},
		maskVisible: {
			type: Boolean,
			value: true
		},
		maskClosable: {
			type: Boolean,
			value: true
		},
		bodyStyle: {
			type: String,
			value: ''
		}
	},
	data: {
		_visible: false,
		_confirmLoading: false,
		maskBackgroundColor: 'rgba(0,0,0,0)',
		style: '',
		timer_show: 0,
		timer_close: 0,
		timer_hide_loading: 0
	},
	observers: {
		visible (new_val) {
			const _that = this
			const { bottom, maskVisible } = _that.data
			const style_visible = bottom
				? 'transform:translateY(0)'
				: 'opacity:1;transform:scale(1);'
			const style_unvisible = bottom
				? 'transform:translateY(120%)'
				: 'opacity:0;transform:scale(0);'

			clearTimeout(_that.data.timer_show)
			clearTimeout(_that.data.timer_close)

			if (new_val) {
				_that.setData({ _visible: true })

				const timer_show = setTimeout(() => {
					_that.setData({
						maskBackgroundColor: maskVisible
							? 'rgba(0,0,0,0.6)'
							: 'transparent',
						style: style_visible
					})
				}, 30)

				_that.setData({ timer_show })
			} else {
				_that.setData({
					maskBackgroundColor: 'rgba(0,0,0,0)',
					style: style_unvisible
				})

				const timer_close = setTimeout(() => {
					_that.setData({ _visible: false })
				}, 300)

				_that.setData({ timer_close })
			}
		},
		confirmLoading: function (new_val){
			var _that = this

			clearTimeout(_that.data.timer_hide_loading)

			if (new_val) {
				_that.setData({ _confirmLoading: true })
			} else {
				const timer_hide_loading = setTimeout(() => {
					_that.setData({ _confirmLoading: false })
				}, 300)

				_that.setData({ timer_hide_loading: timer_hide_loading })
			}
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
		},
		onOk () {
			const _that = this

			_that.triggerEvent('onOk')
		}
	}
})
