Component({
	options: {
		multipleSlots: true
	},
	properties: {
		type: {
			type: String,
			value: 'default' // primary | border | default | dashed | warning | success | error
		},
		size: {
			type: String,
			value: 'normal' // small | normal | large
		},
		shape: {
			type: String,
			value: 'normal' // circle | normal | rect
		},
		mode: {
			type: String,
			value: 'fixed' // 'fixed' | 'padding'
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
