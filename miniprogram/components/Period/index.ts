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
		},
		timeItems: {
			type: Array,
			value: []
		},
		days: Number,
		startTime: Number,
		endTime: Number,
		duration: Number
	},
	data: {
		_visible_dialog_wrap: false,
		_visible_dialog: false,
		_visible_mask: false,
		active_date_index: 0,
		active_time_index: 0,
		date_items: [] as Array<string>,
		time_items: [] as Array<string>,
		time_items_raw: [] as Array<string>
	},
	observers: {
		visible (new_val) {
			const _that = this

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

				setTimeout(() => {
					_that.setData({ _visible_dialog_wrap: false })
				}, 300)
			}
		},
		days (new_val) {
			const _that = this
			const _date_items = []

			for (let i = 0; i < new_val; i++) {
				const day = new Date()

				day.setTime(day.getTime() + i * 24 * 60 * 60 * 1000)

				const getDesc = () => {
					if (i === 0) return '今天 '
					if (i === 1) return '明天 '
					if (i === 2) return '后天 '

					return ''
				}

				_date_items.push(`${getDesc()}${day.getMonth() + 1}月${day.getDate()}日`)
			}

			_that.setData({
				date_items: _date_items
			})

			_that.setTodayTimes()
		},
		'startTime,endTime,duration': function (startTime, endTime, duration){
			const _that = this

			if (_that.data.time_items.length) return

			const _time_items = []
			const _time_items_raw = []

			for (let i = startTime; i < endTime; i = i + duration) {
				_time_items.push(`${i}:00 - ${i + duration}:00`)
				_time_items_raw.push(`${i}:00 - ${i + duration}:00`)
			}

			_that.setData({
				time_items: _time_items,
				time_items_raw: _time_items_raw
			})

			_that.setTodayTimes()
		},
		active_date_index (new_val) {
			const _that = this

			if (new_val === 0) {
				_that.setTodayTimes()
			} else {
				console.log(_that.data.time_items_raw)

				_that.setData({
					time_items: _that.data.time_items_raw
				})
			}

			_that.setData({
				active_time_index: 0
			})
		}
	},
	methods: {
		catchtouchmove () {},
		setTodayTimes () {
			const _that = this
			const now = new Date().valueOf()

			if (!_that.data.time_items.length) return

			_that.data.time_items.map((item, index) => {
				const start_time = new Date()
				const time = item.trim().split('-')

				start_time.setHours(Number(time[0].split(':')[0]))

				if (now > start_time.valueOf()) {
					delete _that.data.time_items[index]
				}
			})

			if (!_that.data.time_items.includes('两小时以内'))
				_that.data.time_items.unshift('两小时以内')

			const _time_items = _that.data.time_items.filter(item => item)

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
