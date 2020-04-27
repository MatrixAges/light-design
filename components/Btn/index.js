Component({
	options: {
		multipleSlots: true
	},
	properties: {
		size: {
			type: String,
			value: 'normal' // small | normal | large
		},
		type: {
			type: String,
			value: 'default' // primary | border | default | dashed | warning | success | error | ghost
		},
		shape: {
			type: String,
			value: 'normal' // circle | normal | rect
		},
		url: String,
		target: String,
		iconPath: String,
		disabled: Boolean,
		plain: Boolean,
		loading: Boolean,
		lang: String,
		'form-type': String,
		'open-type': String,
		'session-from': String,
		'url-open-type': String,
		'app-parameter': String,
		'hover-stay-time': Number,
		'hover-stay-time': Number,
		'hover-start-time': Number,
		'hover-stop-propagation': Boolean,
		'send-message-img': String,
		'send-message-path': String,
		'show-message-card': String,
		'send-message-title': String,
		binderror: null,
		bindcontact: null,
		bindlaunchapp: null,
		bindgetuserinfo: null,
		bindopensetting: null,
		bindgetphonenumber: null
	},
	data: {},
	methods: {}
})
