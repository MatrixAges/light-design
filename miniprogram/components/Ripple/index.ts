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
			value: 'rgba(0, 0, 0, 0.3)'
		}
	},
	data: {
		visible: false,
		styles: ''
	},
	methods: {
		getRect (): Promise<{ width: number; height: number; left: number; top: number }> {
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

			_that.setData({ visible: true })

			wx.nextTick(() => {
				this.setStyle(e)
			})
		},
		async setStyle (e) {
			const _that = this

			const { width, height, left, top } = await _that.getRect()
			const offset_x = e.detail.x - left
			const offset_y = e.detail.y - top
			const limitX = Math.max(offset_x, width - offset_x)
			const limitY = Math.max(offset_y, height - offset_y)

			const limit = Math.max(limitX, limitY)
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
