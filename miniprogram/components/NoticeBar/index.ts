import icons from './rest/icons'

Component({
	options: {
		//@ts-ignore
		pureDataPattern: /^(timer_interval)$/
	},
	properties: {
		list: <{
			type: ArrayConstructor
			value: Array<string>
		}>{
			type: Array,
			value: []
		},
		horizontal: {
			type: Boolean,
			value: false
		},
		color: {
			type: String,
			value: 'black'
		},
		bgColor: {
			type: String,
			value: 'whitesmoke'
		},
		styles: {
			type: String,
			value: ''
		},
		interval: {
			type: Number,
			value: 3000
		}
	},
	data: {
		timer_interval: 0,
		icon_notice:
			'data:image/svg+xml,' +
			icons.iconNotice.replace(/</g, '%3C').replace(/>/g, '%3E'),
		icon_right:
			'data:image/svg+xml;base64,' +
			icons.iconRight.replace(/</g, '%3C').replace(/>/g, '%3E')
	},
	methods: {
		onDetail ({ mark: { index } }) {
			if (index === undefined) return

			this.triggerEvent('onDetail', { index })
		},
		onMore () {
			this.triggerEvent('onMore')
		}
	}
})
