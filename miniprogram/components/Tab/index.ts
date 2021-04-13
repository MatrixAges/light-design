// @ts-nocheck

import touch_handler from './behavior'

const TabItem = './TabItem/index'

interface ITitle {
      text: string
      disabled: boolean
}

Component( {
      externalClasses: [ 'class_tab' ],
      relations: { [ TabItem ]: { type: 'child' } },
      behaviors: [ touch_handler ],
      properties: {
            current: Number,
            vertical: Boolean,
            position: String as 'left' | 'right',
            heightOfBar: String,
            heightOfContent: String,
            bordered: Boolean,
            sticky: Boolean,
            offsetTop: Number,
            navZIndex: Number,
            lazyload: Boolean,
            activeLine: Boolean,
            swiper: Boolean,
            zIndex: Number,
            styleOfRoot: String,
            styleOfTitle: String,
            styleOfActive: String,
            styleOfBar: String,
            styleOfContent: String,
            visibleBar: {
                  type: Boolean,
                  value: true
            },
            persist: {
                  type: Boolean,
                  value: false
            },
            AnimationOfBar: {
                  type: Boolean,
                  value: true
            },
            AnimationOfContent: {
                  type: Boolean,
                  value: true
            },
      },
      data: {
            current_tab: 0,
            titles: [] as Array<ITitle>,
            bar_items: [] as Array<BoundingClientRect>
      },
      tab_items: [] as Array<WechatMiniprogram.Component.TrivialInstance>,
      observers: {
            current ( new_val ) {
                  const len = this.data.titles.length

                  if ( len === 0 ) return

                  let current_tab = new_val - 1

                  if ( current_tab < 0 ) current_tab = 0
                  if ( current_tab > len - 1 ) current_tab = len - 1

                  this.setData( { current_tab } )

                  this.triggerEvent( 'onCurrentChange', new_val )
            }
      },
      methods: {
            changeCurrent ( index: number ) {
                  const _that = this

                  const tab_item = _that.tab_items[ index ]
                  const tab_item_prev = _that.tab_items[ _that.data.current ]

                  _that.setData( { current: index }, () => {
                        if ( _that.data.lazyload ) {
                              tab_item.updateCurrent()

                              if ( !_that.data.persist ) tab_item_prev.reset()
                        }
                  } )
            },
            onBarItem ( e: WechatMiniprogram.TouchEvent ) {
                  const _that = this
                  const index = e.mark?.index

                  if ( index === undefined ) return
                  if ( index === this.data.current ) return

                  _that.changeCurrent( index )
                  _that.triggerEvent( 'onBarItem', index )
            },
            getRect ( target: string ): Promise<Array<BoundingClientRect>> {
                  const _that = this

                  return new Promise( ( resolve ) => {
                        _that
                              .createSelectorQuery()
                              .selectAll( target )
                              .boundingClientRect( resolve )
                              .exec()
                  } )
            },
            onTouchStart ( e: WechatMiniprogram.TouchEvent ) {
                  if ( !this.data.swiper ) return

                  this.touchStart( e )
            },
            onTouchMove ( e: WechatMiniprogram.TouchEvent ) {
                  if ( !this.data.swiper ) return

                  this.touchMove( e )
            },
            onTouchEnd () {
                  if ( !this.data.swiper ) return

                  if ( Math.abs( this.offset_x ) < 50 ) return

                  if ( this.offset_x > 0 ) {
                        if ( this.data.current !== 0 ) {
                              this.changeCurrent( this.data.current - 1 )
                        }
                  } else {
                        if ( this.data.current < this.data.titles.length - 1 ) {
                              this.changeCurrent( this.data.current + 1 )
                        }
                  }
            }
      },
      lifetimes: {
            async ready () {
                  const _that = this
                  const nodes = _that.getRelationNodes( TabItem )
                  const titles: Array<ITitle> = []

                  this.tab_items = nodes

                  nodes.map( ( item ) => {
                        titles.push( { text: item.__data__.title, disabled: item.__data__.disabled } )
                  } )

                  _that.setData( { titles } )

                  const bar_items = await _that.getRect( '#tab_wrap .bar_item' )

                  _that.setData( { bar_items } )
            }
      }
} )
