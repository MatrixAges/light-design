import Base64 from './rest/base64'
import _data from './data'
import { Icon } from './rest/icon_types'

type Data = Record<Icon, { outline: string; filled: string }>

const data: Data | any = _data

Component({
	properties: {
		//当treeShaking设定为true时，icon属性失效，svg属性生效，可直接传入对象
		treeShaking: {
			type: Boolean,
			value: true
		},
		icon: <{
			type: StringConstructor
			value: Icon
		}>{
			type: String,
			value: ''
		},
		svg: <{
			type: ObjectConstructor
			value: { outline: string; filled: string }
		}>{
			type: Object,
			value: {}
		},
		type: <{
			type: StringConstructor
			value: 'outline' | 'filled'
		}>{
			type: String,
			value: 'outline'
		},
		visibleWrap: {
			type: Boolean,
			value: false
		},
		bordered: {
			type: Boolean,
			value: false
		},
		filled: {
			type: Boolean,
			value: false
		},
		round: {
			type: Boolean,
			value: false
		},
		borderColor: {
			type: String,
			value: 'whitesmoke'
		},
		fillColor: {
			type: String,
			value: 'whitesmoke'
		},
		size: {
			type: Number,
			value: 20
		},
		color: {
			type: String,
			value: '#000000'
		}
	},
	observers: {
		type (v) {
			if (this.data.treeShaking) {
				this.getSrc(this.data.svg[v])
			} else {
				this.getSrc(data[this.data.icon][v])
			}
		},
		// treeShaking=false时，生效
		icon (v) {
			if (!v) return
			if (!this.data.type) return

			this.getSrc(data[v][this.data.type])
		},
		// treeShaking=true时，生效
		svg (v) {
			if (!v) return
			if (!this.data.type) return

			this.getSrc(v[this.data.type])
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
