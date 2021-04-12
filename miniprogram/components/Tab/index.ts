import touch_handler from './behavior'

const TabItem = './TabItem/index'

interface ITitle {
      text: string
      disabled: boolean
}

Component({
      externalClasses: [ 'class_tab' ],
      relations: { [ TabItem ]: { type: 'child' } },
      behaviors: [ touch_handler ],
      properties: {
            vertical: Boolean,
            current: Number,
            titleStyle: String,
            activeStyle: String,
            scrollBarStyle: String,
            contentStyle: String,
            bordered: Boolean,
            sticky: Boolean,
            offsetTop: Number,
            navZIndex: Number,
            lazyload: Boolean,
            persist: Boolean,
            activeLine: Boolean,
            swiper: Boolean,
            zIndex: Number,
            visibleBar: {
                  type: Boolean,
                  value: true
            }
      },
      data: <
            {
                  titles: Array<ITitle>,
                  current_tab: number,
                  bar_items: Array<BoundingClientRect>
            }
            >{
                  titles: [],
                  current_tab: 0,
                  bar_items: []
            },
      observers: {
            current(new_val) {
                  const len = this.data.titles.length

                  if (len === 0) return

                  let current_tab = new_val - 1

                  if (current_tab < 0) current_tab = 0
                  if (current_tab > len - 1) current_tab = len - 1

                  this.setData({ current_tab })
            }
      },
      methods: {
            onBarItem(e: WechatMiniprogram.TouchEvent) {
                  const index = e.mark?.index

                  if (index === undefined) return

                  const _that = this

                  _that.setData({ current: index })
                  _that.triggerEvent('onBarItem', index)

                  const tab_item = _that.getRelationNodes(TabItem)[ index ]

                  tab_item.updateCurrent()
            },
            getRect(target: string): Promise<Array<BoundingClientRect>> {
                  const _that = this

                  return new Promise((resolve: any) => {
                        _that
                              .createSelectorQuery()
                              .selectAll(target)
                              .boundingClientRect(resolve)
                              .exec()
                  })
            },
            onTouchStart(e: WechatMiniprogram.TouchEvent) {
                  if (!this.data.swiper) return

                  // @ts-ignore
                  this.touchStart(e)
            },
            onTouchMove(e: WechatMiniprogram.TouchEvent) {
                  if (!this.data.swiper) return

                  // @ts-ignore
                  this.touchMove(e)
            },
            onTouchEnd() {
                  if (!this.data.swiper) return

                  // @ts-ignore
                  if (Math.abs(this.offset_x) < 50) return

                  // @ts-ignore
                  if (this.offset_x > 0) {
                        if (this.data.current !== 0) {
                              this.setData({ current: this.data.current - 1 })
                        }
                  } else {
                        if (this.data.current < this.data.titles.length - 1) {
                              this.setData({ current: this.data.current + 1 })
                        }
                  }
            }
      },
      lifetimes: {
            async ready() {
                  const _that = this
                  const nodes = _that.getRelationNodes(TabItem)
                  const titles: Array<ITitle> = []

                  nodes.map((item) => {
                        titles.push({ text: item.__data__.title, disabled: item.__data__.disabled })
                  })

                  _that.setData({ titles })

                  const bar_items = await _that.getRect('#tab_wrap .bar_item')

                  _that.setData({ bar_items })
            }
      }
})
