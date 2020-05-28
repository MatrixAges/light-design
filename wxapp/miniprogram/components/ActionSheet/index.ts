interface IList {
	name: String
	icon: String
}

Component({
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: ''
		},
		list: {
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
		_visible_mask: false
	},
	observers: {
		visible (new_val) {
			const _that = this

			if (new_val) {
				_that.setData({ _visible_dialog_wrap: true })

				setTimeout(() => {
					_that.setData({
						_visible_dialog: true,
						_visible_mask: true
					})
				}, 30)
			} else {
				_that.setData({
					_visible_dialog: false,
					_visible_mask: false
				})

				setTimeout(() => {
					_that.setData({ _visible_dialog_wrap: false })
				}, 300)
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

                  if (!index) return
                  
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
