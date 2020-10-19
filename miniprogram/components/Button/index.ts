Component({
	options: {
		multipleSlots: true
	},
	properties: {
		type: {
			type: String,
			value: 'default' // primary | border | default | dashed | warning | success | error | ghost
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
		iconPath: String,
		disabled: Boolean,
		loading: Boolean
	}
})
