// inspired by geist-ui component button

const default_styles = `
      left: '';
      top: '';
      opacity: 0.8;
      transform: translate(-50%, -50%);
`

Component({
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
		styles: ''
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
			if (!e || typeof e !== 'object') return
			if (!e.detail.x || !e.detail.y) return
			if (!e.currentTarget.offsetLeft || !e.currentTarget.offsetTop) return

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
			const scale = limit / 9

			const styles = `
				left: ${offset_x}px;
				top: ${offset_y}px;
				opacity: 0.25;
				transform: translate(-50%, -50%) scale(${scale});
			`

			_that.setData({ styles })

			const timer = setTimeout(() => {
				_that.reset()
				clearTimeout(timer)
			}, 300)
		},
		reset () {
			this.setData({
				styles: default_styles,
				visible: false
			})
		}
	}
})
