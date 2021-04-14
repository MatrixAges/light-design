import icons from './rest/icons'

Component( {
      properties: {
            list: {
                  type: Array,
                  value: []
            } as {
                  type: ArrayConstructor
                  value: Array<string>
            },
            horizontal: {
                  type: Boolean,
                  value: false
            },
            color: {
                  type: String,
                  value: 'black'
            },
            bgColor: {
                  type: String,
                  value: 'whitesmoke'
            },
            styles: {
                  type: String,
                  value: ''
            },
            interval: {
                  type: Number,
                  value: 3000
            }
      },
      data: {
            icon_notice: `"data:image/svg+xml,${ icons.iconNotice
                  .replace( /</g, '%3C' )
                  .replace( />/g, '%3E' ) }"`,
            icon_right: `"data:image/svg+xml,${ icons.iconRight
                  .replace( /</g, '%3C' )
                  .replace( />/g, '%3E' ) }"`
      },
      methods: {
            catchtouchmove () { },
            onDetail ( { mark: { index } } ) {
                  if ( index === undefined ) return

                  this.triggerEvent( 'onDetail', { index } )
            },
            onMore () {
                  this.triggerEvent( 'onMore' )
            }
      }
} )
