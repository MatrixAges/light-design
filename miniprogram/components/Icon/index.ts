Component( {
      options: {
            pureDataPattern: /^(type)$/
      },
      properties: {
            icon: {
                  type: Object,
                  value: {}
            } as {
                  type: ObjectConstructor
                  value: { outline: string; filled: string }
            },
            type: {
                  type: String,
                  value: 'outline'
            } as {
                  type: StringConstructor
                  value: 'outline' | 'filled'
            },
            size: {
                  type: Number,
                  value: 20
            },
            color: {
                  type: String,
                  value: '#000000'
            },
            visibleWrap: {
                  type: Boolean,
                  value: false
            },
            bordered: {
                  type: Boolean,
                  value: false
            },
            filled: {
                  type: Boolean,
                  value: false
            },
            round: {
                  type: Boolean,
                  value: false
            },
            borderColor: {
                  type: String,
                  value: 'whitesmoke'
            },
            fillColor: {
                  type: String,
                  value: 'whitesmoke'
            }
      },
      observers: {
            type ( v ) {
                  this.getSrc( this.data.icon[ v ] )
            },
            icon ( v ) {
                  if ( !v ) return
                  if ( !this.data.type ) return

                  this.getSrc( v[ this.data.type ] )
            }
      },
      data: {
            src: '',
            height: 20,
            width: 20
      },
      methods: {
            getSrc ( svg: string ) {
                  if ( !svg ) return

                  this.setData( {
                        src: 'data:image/svg+xml,' + svg.replace( /</g, '%3C' ).replace( />/g, '%3E' )
                  } )
            }
      }
} )
