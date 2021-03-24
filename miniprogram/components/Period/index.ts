Component({
	properties: {
		visible: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: '预约上门时间'
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
		active_date_index: 0,
		active_time_index: 0,
		date_items: [ '' ],
		time_items: [
			'08:00 - 10:00',
			'10:00 - 12:00',
			'12:00 - 14:00',
			'14:00 - 16:00',
			'16:00 - 18:00'
		]
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
		active_date_index (new_val) {
			const _that = this

			if (new_val === 0) {
				_that.setTodayTimes()
			} else {
				_that.setData({
					time_items: [
						'08:00 - 10:00',
						'10:00 - 12:00',
						'12:00 - 14:00',
						'14:00 - 16:00',
						'16:00 - 18:00'
					]
				})
			}

			_that.setData({
				active_time_index: 0
			})
		}
	},
	lifetimes: {
		attached () {
			const _that = this

			const day1 = new Date()
			const day2 = new Date()
			const day3 = new Date()

			day1.setTime(day1.getTime())
			day2.setTime(day1.getTime() + 24 * 60 * 60 * 1000)
			day3.setTime(day1.getTime() + 24 * 60 * 60 * 1000 * 2)

			_that.data.date_items = [
				`今天 ${day1.getMonth() + 1}月${day1.getDate()}日`,
				`明天 ${day2.getMonth() + 1}月${day2.getDate()}日`,
				`后天 ${day2.getMonth() + 1}月${day3.getDate()}日`
			]

			_that.setData({
				date_items: _that.data.date_items
			})

			_that.setTodayTimes()
		}
	},
	methods: {
		catchtouchmove () {},
		setTodayTimes () {
			const _that = this
			const now = new Date().valueOf()

			_that.data.time_items.map((item, index) => {
				const start_time = new Date()
				const time = item.trim().split('-')

				start_time.setHours(Number(time[0].split(':')[0]))

				if (now > start_time.valueOf()) {
					delete _that.data.time_items[index]
				}
			})

			_that.data.time_items.unshift('两小时以内')

			const _time_items = _that.data.time_items.filter((item) => item)

			if (_time_items.length === 1) {
				const start_time = new Date()

				start_time.setHours(18)

				if (now >= start_time.valueOf()) {
					_that.setData({
						time_items: [],
						active_date_index: 1
					})

					return
				}
			}

			_that.setData({
				time_items: _time_items
			})
		},
		onPeriodItem (e: any) {
			const _that = this
			const { mark: { type, index } } = e

			if (!type) return

			_that.setData({
				[`${type === 'date' ? 'active_date_index' : 'active_time_index'}`]: index
			})
		},
		onSelected () {
			const _that = this
			const {
				date_items,
				time_items,
				active_date_index,
				active_time_index
			} = _that.data
			const date = date_items[active_date_index]
			const times = time_items[active_time_index]
			const now = new Date()
			const order_time_1 = new Date()
			const order_time_2 = new Date()

			let start_time: number | string = ''
			let end_time: number | string = ''

			switch (date.split(' ')[0]) {
				case '今天':
					break
				case '明天':
					order_time_1.setTime(now.getTime() + 24 * 60 * 60 * 1000)
					order_time_2.setTime(now.getTime() + 24 * 60 * 60 * 1000)
					break
				case '后天':
					order_time_1.setTime(now.getTime() + 24 * 60 * 60 * 1000 * 2)
					order_time_2.setTime(now.getTime() + 24 * 60 * 60 * 1000 * 2)
					break
			}

			if (times !== '两小时以内') {
				order_time_1.setHours(Number(times.split('-')[0].split(':')[0]))
				order_time_2.setHours(Number(times.split('-')[1].split(':')[0]))
				order_time_1.setMinutes(0)
				order_time_2.setMinutes(0)
				order_time_1.setSeconds(0)
				order_time_2.setSeconds(0)

				start_time = parseInt(String(order_time_1.valueOf() / 1000))
				end_time = parseInt(String(order_time_2.valueOf() / 1000))
			}

			_that.triggerEvent('onSelectedPeriod', {
				start_time: start_time,
				end_time: end_time,
				date: date,
				times: times
			})

			_that.onClose()
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
