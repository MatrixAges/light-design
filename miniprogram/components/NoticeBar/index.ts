import Base64 from './rest/base64'
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
		},
		duration: {
			type: Number,
			value: 0
		}
	},
	data: {
		duration: 0,
		timer_interval: 0,
		icon_notice: 'data:image/svg+xml;base64,' + Base64.encode(icons.iconNotice),
		icon_right: 'data:image/svg+xml;base64,' + Base64.encode(icons.iconRight)
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
