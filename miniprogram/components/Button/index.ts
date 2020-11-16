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
		autoWidth: {
			type: Boolean,
			value: false
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
            iconPath: {
			type: String,
			value: ''
            },
		ghost: Boolean,
		disabled: Boolean,
		light-loading: Boolean
	}
})
