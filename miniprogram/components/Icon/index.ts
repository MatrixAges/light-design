import Base64 from './base64'
import data from './data'

const _data: { [key: string]: { [key: string]: string } } = data

const getFixedIconType = function (type: string): string{
	// 兼容旧版本 typo
	return type === 'field' ? 'filled' : type
}

Component({
	options: {},
	properties: {
		type: {
			type: String,
			value: 'outline'
		},
		icon: {
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
		}
	},
	observers: {
		type (v) {
			this._genSrc(_data[v][getFixedIconType(this.data.type)])
		},
		icon (v) {
			this._genSrc(_data[this.data.icon][getFixedIconType(v)])
		}
	},
	data: {
		src: '',
		height: 20,
		width: 20
	},
	methods: {
		_genSrc (svg) {
			if (!svg) return

			this.setData({ src: 'data:image/svg+xml;base64,' + Base64.encode(svg) })
		}
	}
})
