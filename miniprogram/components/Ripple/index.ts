// inspired by geist-ui component button 😊

const default_styles = `
      left: '';
      top: '';
      opacity: 0.8;
      transform: translate(-50%, -50%);
`

Component({
      options: {
		//@ts-ignore
		pureDataPattern: /^(timer_hide)$/
	},
	properties: {
		color: {
			type: String,
			value: 'rgba(0, 0, 0, 0.2)'
		},
		radius: {
			type: Number,
			value: 8
		}
	},
	data: {
		visible: false,
		styles: '',
		timer_hide: 0
	},
	methods: {
		getRect (): Promise<{
			width: number
			height: number
			left: number
			top: number
		}> {
			const _that = this

			return new Promise((resolve) => {
				_that
					.createSelectorQuery()
					.select('#ripple')
					.boundingClientRect(({ width, height, left, top }) => {
						resolve({ width, height, left, top })
					})
					.exec()
			})
		},
		trigger (e) {
			const _that = this

			if (_that.data.visible) return
			if (!e.detail.x || !e.detail.y) return
			if (!e || typeof e !== 'object') return
			if (!e.currentTarget.offsetLeft || !e.currentTarget.offsetTop) return

                  clearTimeout(_that.data.timer_hide)
			_that.reset()

			_that.setData({ visible: true }, () => {
				this.setStyle(e)
			})
		},
		async setStyle (e) {
			const _that = this
			const { currentTarget: { offsetLeft: left, offsetTop: top } } = e

			const { width, height } = await _that.getRect()
			const offset_x = e.detail.x - left
			const offset_y = e.detail.y - top
			const limit_x = Math.max(offset_x, width - offset_x)
			const limit_y = Math.max(offset_y, height - offset_y)
			const limit = Math.max(limit_x, limit_y)
			const scale = limit / 6
			const duration_ratio = Math.floor(Math.max(width, height) / 81)
			const duration_time = 0.3 + duration_ratio * 0.1

			const styles = `
				left: ${offset_x}px;
				top: ${offset_y}px;
                        opacity: 0.25;
                        transition-duration: ${e.type === 'longpress'
					? duration_time * 3
					: duration_time}s;
                        transform: translate(-50%, -50%) scale(${scale});
			`

			_that.setData({ styles })

			if (e.type === 'tap') {
				const timer_hide = setTimeout(() => {
					_that.reset()
					clearTimeout(timer_hide)
				}, duration_time * 1000)

				_that.setData({ timer_hide })
			}
		},
		reset () {
			this.setData({
				styles: default_styles,
				visible: false
			})
		}
	}
})
