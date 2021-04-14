// copy from we-ui component Sticky 😁

const target = '#sticky'

Component( {
      options: {
            pureDataPattern: /^_/
      },
      properties: {
            offsetTop: {
                  type: Number,
                  value: 0
            },
            zIndex: {
                  type: Number,
                  value: 100
            },
            container: {
                  type: String,
                  value: ''
            },
            disabled: {
                  type: Boolean,
                  value: false
            }
      },
      data: {
            fixed: false,
            width: 0,
            height: 0,
            _attached: false,
            _relativeTop: 0,
            _containerHeight: 0,
            _container: null,
            _contentObserver: null,
            _containerObserver: null
      } as {
            fixed: boolean
            width: number
            height: number
            _attached: boolean
            _relativeTop: number
            _containerHeight: number
            _container: ( () => WechatMiniprogram.NodesRef ) | null
            _contentObserver: WechatMiniprogram.IntersectionObserver | null
            _containerObserver: WechatMiniprogram.IntersectionObserver | null
      },
      observers: {
            disabled ( new_val ) {
                  if ( !this.data._attached ) return

                  new_val ? this.disconnectObserver() : this.initObserver()
            }
      },
      lifetimes: {
            attached () {
                  this.data._attached = true

                  if ( this.data.disabled ) return

                  if ( this.data.container ) {
                        this.data._container = () =>
                              wx.createSelectorQuery().select( this.data.container )
                        this.observerContainer()
                  }

                  this.initObserver()
            },
            detached () {
                  this.data._attached = false
                  this.disconnectObserver()
            }
      },
      methods: {
            getRect (): Promise<WechatMiniprogram.BoundingClientRectCallbackResult> {
                  const _that = this

                  return new Promise( ( resolve ) => {
                        _that
                              .createSelectorQuery()
                              .select( target )
                              .boundingClientRect( resolve )
                              .exec()
                  } )
            },
            getContainerRect (): Promise<WechatMiniprogram.BoundingClientRectCallbackResult> {
                  const _that = this
                  const ref = _that.data._container && _that.data._container()

                  return new Promise( ( resolve ) => ref && ref.boundingClientRect( resolve ).exec() )
            },
            initObserver () {
                  const _that = this

                  _that.disconnectObserver()
                  _that
                        .getRect()
                        .then( ( { width, height }: { width: number; height: number } ) => {
                              _that.setData( { width, height } )
                              _that.observerContent()
                              _that.observerContainer()
                        } )
                        .catch( ( err: any ) => {
                              console.log( err )
                        } )
            },
            observerContent () {
                  const _that = this
                  const { offsetTop } = _that.data

                  _that.disconnectObserver( '_contentObserver' )

                  const _contentObserver = _that.createIntersectionObserver( {
                        thresholds: [ 1 ],
                        initialRatio: 1
                  } )
                  _contentObserver.relativeToViewport( { top: -offsetTop } )
                  _contentObserver.observe( target, ( res ) => {
                        if ( _that.data.disabled ) return

                        _that.setFixed( res.boundingClientRect.top )
                  } )

                  _that.data._contentObserver = _contentObserver
            },
            observerContainer () {
                  const _that = this
                  const { container, height, offsetTop } = _that.data

                  if ( !container ) return

                  _that.disconnectObserver( '_containerObserver' )

                  _that.getContainerRect().then( ( rect: WechatMiniprogram.BoundingClientRectCallbackResult ) => {
                        _that.getRect().then( ( contentRect: WechatMiniprogram.BoundingClientRectCallbackResult ) => {
                              const _contentTop = contentRect.top
                              const _containerTop = rect.top
                              const _containerHeight = rect.height
                              const _relativeTop = _contentTop - _containerTop
                              const _containerObserver = _that.createIntersectionObserver( {
                                    thresholds: [ 1 ],
                                    initialRatio: 1
                              } )
                              _containerObserver.relativeToViewport( {
                                    top: _containerHeight - height - offsetTop - _relativeTop
                              } )
                              _containerObserver.observe( target, ( res ) => {
                                    if ( _that.data.disabled ) return

                                    _that.setFixed( res.boundingClientRect.top )
                              } )

                              _that.data._relativeTop = _relativeTop
                              _that.data._containerHeight = _containerHeight
                              _that.data._containerObserver = _containerObserver
                        } )
                  } )
            },
            setFixed ( top: number ) {
                  const _that = this
                  const { height, offsetTop, _relativeTop, _containerHeight } = _that.data

                  const getFixed = () => {
                        if ( height && _containerHeight ) {
                              const calc_top = height + offsetTop + _relativeTop - _containerHeight
                              const case_a = top < offsetTop
                              const case_b = top >= calc_top

                              return case_a && case_b
                        } else {
                              return top < offsetTop
                        }
                  }

                  const fixed = getFixed()

                  _that.setData( { fixed } )
                  _that.triggerEvent( 'scroll', { scrollTop: top, isFixed: fixed } )
            },
            disconnectObserver ( observerName?: '_contentObserver' | '_containerObserver' ) {
                  const _that = this

                  if ( observerName ) {
                        const observer = _that.data[ observerName ]

                        observer && observer.disconnect()
                  } else {
                        _that.data._contentObserver && _that.data._contentObserver.disconnect()
                        _that.data._containerObserver && _that.data._containerObserver.disconnect()
                  }
            }
      }
} )
