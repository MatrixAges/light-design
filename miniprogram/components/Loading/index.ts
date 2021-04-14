Component( {
      options: {
            pureDataPattern: /^(visible|delay|timeout|timer_show|timer_hide)$/
      },
      properties: {
            visible: {
                  type: Boolean,
                  value: false
            },
            type: {
                  type: String,
                  value: 'refresh'
            } as {
                  type: StringConstructor
                  value: 'refresh' | 'loading'
            },
            size: {
                  type: Number,
                  value: 1
            },
            text: {
                  type: String,
                  value: ''
            },
            delay: {
                  type: Number,
                  value: 0
            },
            timeout: {
                  type: Number,
                  value: 0
            }
      },
      data: {
            _visible: false,
            timer_show: 0,
            timer_hide: 0
      },
      observers: {
            visible ( new_val ) {
                  const _that = this
                  const { delay, timeout, timer_show, timer_hide } = _that.data

                  clearTimeout( timer_show )
                  clearTimeout( timer_hide )

                  if ( new_val ) {
                        const timer_show = setTimeout( () => {
                              _that.setData( { _visible: true } )
                        }, delay )

                        _that.setData( { timer_show } )
                  } else {
                        const timer_hide = setTimeout( () => {
                              _that.setData( { _visible: false } )
                        }, timeout )

                        _that.setData( { timer_hide } )
                  }
            }
      },
      methods: {
            onShow () {
                  const _that = this

                  _that.setData( { visible: true } )

                  _that.triggerEvent( 'onShow' )
            },
            onClose () {
                  const _that = this

                  _that.setData( { visible: false } )

                  _that.triggerEvent( 'onClose' )
            }
      }
} )
