// copy from we-ui component sticky 😁

type BoundingClientRect = WechatMiniprogram.BoundingClientRectCallbackResult
type IntersectionObserver = WechatMiniprogram.IntersectionObserver

const target = '#sticky'

Component({
	options: {
		//@ts-ignore
		pureDataPattern: /^_/
	},
	properties: {
		offsetTop: {
			type: Number,
			value: 0
		},
		zIndex: {
			type: Number,
			value: 99
		},
		container: {
			type: null
		}
	},
	data: {
		fixed: false,
		height: 0,
		_attached: false,
		_relativeTop: 0,
		_containerHeight: 0,
		//@ts-ignore
		contentObserver,
		//@ts-ignore
		containerObserver
	} as {
		fixed: boolean
		height: number
		_attached: boolean
		_relativeTop: number
		_containerHeight: number
		contentObserver: IntersectionObserver
		containerObserver: IntersectionObserver
	},
	observers: {
		container (new_val) {
			if (typeof new_val !== 'function' || !this.data.height) return

			this.observerContainer()
		}
	},
	lifetimes: {
		attached: function attached (){
			this.data._attached = true
			this.initObserver()
		},
		detached: function detached (){
			this.data._attached = false
			this.disconnectObserver()
		}
	},
	methods: {
		getRect () {
			const _that = this

			return new Promise((resolve) => {
				_that
					.createSelectorQuery()
					.select('#sticky')
					.boundingClientRect(resolve)
					.exec()
			})
		},
		getContainerRect: function getContainerRect (){
			const _that = this
			const ref = _that.data.container()

			return new Promise((resolve) => ref.boundingClientRect(resolve).exec())
		},
		initObserver () {
			const _that = this

			_that.disconnectObserver()
			_that
				.getRect()
				.then(({ height }: { height: number }) => {
					_that.setData({ height })
					_that.observerContent()
					_that.observerContainer()
				})
				.catch((err: any) => {
					console.log(err)
				})
		},
		observerContent: function observerContent (){
			const _that = this
			const offsetTop = _that.data.offsetTop

			_that.disconnectObserver('contentObserver')

			const contentObserver = _that.createIntersectionObserver({
				thresholds: [ 1 ],
				initialRatio: 1
			})
			contentObserver.relativeToViewport({ top: -offsetTop })
			contentObserver.observe(target, (res) =>
				_that.setFixed(res.boundingClientRect.top)
			)

			_that.data.contentObserver = contentObserver
		},
		observerContainer: function observerContainer (){
			const _that = this
			const { container, height, offsetTop } = _that.data

			if (typeof container !== 'function') return

			_that.disconnectObserver('containerObserver')

			_that.getContainerRect().then((rect: BoundingClientRect) => {
				_that.getRect(target).then((contentRect: BoundingClientRect) => {
					const _contentTop = contentRect.top
					const _containerTop = rect.top
					const _containerHeight = rect.height
					const _relativeTop = _contentTop - _containerTop
					const containerObserver = _that.createIntersectionObserver({
						thresholds: [ 1 ],
						initialRatio: 1
					})
					containerObserver.relativeToViewport({
						top: _containerHeight - height - offsetTop - _relativeTop
					})
					containerObserver.observe(target, function (res){
						_that.setFixed(res.boundingClientRect.top)
					})

					_that.data._relativeTop = _relativeTop
					_that.data._containerHeight = _containerHeight
					_that.data.containerObserver = containerObserver
				})
			})
		},
		setFixed: function setFixed (top){
			const _that = this
			const { height, _relativeTop, offsetTop, _containerHeight } = _that.data

			const getFixed = () => {
				if (height && _containerHeight) {
					const calc_top = height + offsetTop + _relativeTop - _containerHeight
					const case_a = top < offsetTop
					const case_b = top >= calc_top

					return case_a && case_b
				} else {
					return top < offsetTop
				}
			}

			const fixed = getFixed()

			_that.setData({ fixed })
			_that.triggerEvent('scroll', { scrollTop: top, isFixed: fixed })
		},
		disconnectObserver (observerName: 'contentObserver' | 'containerObserver') {
			const _that = this

			if (observerName) {
                        const observer = _that.data[observerName]
                        
				observer && observer.disconnect()
			} else {
				_that.data.contentObserver.disconnect()
				_that.data.containerObserver.disconnect()
			}
		}
	}
})
