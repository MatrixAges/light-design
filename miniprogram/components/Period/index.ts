interface IDate {
	raw: Date
	text: string
}

interface ITime {
	raw: { from: number; to: number }
	text: string
}

Component({
      options: {
		pureDataPattern: /^(visible|showTwoHours|timeItems|days|startTime|endTime|duration|time_items_raw)$/
	},
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
		showTwoHours: {
			type: Boolean,
			value: false
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
		date_items: [] as Array<IDate>,
		time_items: [] as Array<ITime>,
		time_items_raw: [] as Array<ITime>
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

				const getWeek = () => {
					if (i < 3) return ''

					const week = day.getDay()

					if (week === 0) return ' 周日'
					if (week === 1) return ' 周一'
					if (week === 2) return ' 周二'
					if (week === 3) return ' 周三'
					if (week === 4) return ' 周四'
					if (week === 5) return ' 周五'
					if (week === 6) return ' 周六'

					return ''
				}

				const text = `${getDesc()}${day.getMonth() +
					1}月${day.getDate()}日${getWeek()}`

				_date_items.push({
					raw: day,
					text
				})
			}

			_that.setData({
				date_items: _date_items
			})
		},
		'startTime,endTime,duration,timeItems': function (
			startTime: number,
			endTime: number,
			duration: number,
			timeItems: Array<string>
		){
			const _that = this

			if (timeItems.length) {
				const _timeItems: Array<ITime> = []

				timeItems.map((item: string) => {
					const from = Number(item.trim().split('-')[0].split(':')[0])
					const to = Number(item.trim().split('-')[1].split(':')[1])

					_timeItems.push({
						raw: { from, to },
						text: item
					})
                        })
                        
				_that.setData({
					time_items: _timeItems,
					time_items_raw: _timeItems.slice(0)
				})

				_that.setTodayTimes()

				return
			}

			const _time_items: Array<{ raw: { from: number; to: number }; text: string }> = []

			for (let i = startTime; i < endTime; i = i + duration) {
				_time_items.push({
					raw: {
						from: i,
						to: i + duration
					},
					text: `${i}:00 - ${i + duration}:00`
				})
			}

			_that.setData({
				time_items: _time_items,
				time_items_raw: _time_items.slice(0)
			})

			_that.setTodayTimes()
		},
		active_date_index (new_val) {
			const _that = this

			if (new_val === 0) {
				_that.setTodayTimes()
			} else {
				_that.setData({
					time_items: _that.data.time_items_raw.slice(0)
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
				const time = item.text.trim().split('-')

				start_time.setHours(Number(time[0].split(':')[0]))

				if (now > start_time.valueOf()) {
					delete _that.data.time_items[index]
				}
                  })
                  
			const _time_items = _that.data.time_items.filter(item => item)

			if (
				_time_items.findIndex(item => item.text === '两小时以内') === -1 &&
				_that.data.showTwoHours
			) {
				_time_items.unshift({ raw: { from: 0, to: 0 }, text: '两小时以内' })
			}

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
			const time = time_items[active_time_index]

			_that.triggerEvent('onSelectedPeriod', {
				date,
				time
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
