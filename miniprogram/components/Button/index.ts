Component({
	options: {
		multipleSlots: true
	},
	properties: {
		type: <{
			type: StringConstructor
			value:
				| 'default'
				| 'primary'
				| 'border'
				| 'dashed'
				| 'warning'
				| 'success'
				| 'error'
		}>{
			type: String,
			value: 'default'
		},
		size: <{
			type: StringConstructor
			value: 'normal' | 'small' | 'large'
		}>{
			type: String,
			value: 'normal'
		},
		shape: <{
			type: StringConstructor
			value: 'normal' | 'circle' | 'rect'
		}>{
			type: String,
			value: 'normal'
		},
		mode: <{
			type: StringConstructor
			value: 'fixed' | 'padding'
		}>{
			type: String,
			value: 'fixed'
		},
		width: {
			type: String,
			value: ''
		},
		height: {
			type: String,
			value: ''
		},
		color: {
			type: String,
			value: ''
		},
		bgColor: {
			type: String,
			value: ''
		},
		ghost: Boolean,
		iconPath: String,
		disabled: Boolean,
		loading: Boolean
	}
})
