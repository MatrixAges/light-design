import Base64 from './base64'
import data from './data'

const _data: { [key: string]: { [key: string]: string } } = data

Component({
	options: {},
	properties: {
		type: {
			type: String,
			value: 'outline' // outline | filled
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
			this.getSrc(_data[this.data.icon][v])
		},
		icon (v) {
			this.getSrc(_data[v][this.data.type])
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
                  
                  console.log(Base64.encode(svg));

			this.setData({ src: 'data:image/svg+xml;base64,' + Base64.encode(svg) })
		}
	}
})
