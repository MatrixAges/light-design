import Base64 from './rest/base64'
import _data from './rest/data'

type Icon = '' | 'add'

let data: any = _data

Component({
	properties: {
		type: <{
			type: StringConstructor
			value: 'outline' | 'filled'
		}>{
			type: String,
			value: 'outline'
		},
		icon: <{
			type: StringConstructor
			value: Icon
		}>{
			type: String,
			value: ''
		},
		size: {
			type: Number,
			value: 20
		},
		color: {
			type: String,
			value: '#000000'
		},
		extend: {
			type: Object,
			value: {}
		}
	},
	observers: {
		type (v) {
			this.getSrc(data[this.data.icon][v])
		},
		icon (v) {
			this.getSrc(data[v][this.data.type])
		},
		extend (v) {
			data = { ...v, ..._data }
		}
	},
	data: {
		src: '',
		height: 20,
		width: 20
	},
	methods: {
		getSrc (svg) {
			if (!svg) return

			this.setData({ src: 'data:image/svg+xml;base64,' + Base64.encode(svg) })
		}
	}
})
