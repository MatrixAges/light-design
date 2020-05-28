Component({
	properties: {
		color: {
			type: String,
			value: 'rgba(0, 0, 0, 0.3)'
		}
	},
	data: {},
	lifetimes: {
		attached () {
			const _that = this

			_that
				.createSelectorQuery()
				.select('#ripple')
				.boundingClientRect(function (rect){
					const { width, height } = rect

					console.log(width)
					console.log(height)
				})
				.exec()
		}
	},
	methods: {
		onRipple () {},
		clearRipple () {}
	}
})
