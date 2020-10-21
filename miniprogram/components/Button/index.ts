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
		ghost: Boolean,
		iconPath: String,
		disabled: Boolean,
		loading: Boolean
      }
})
