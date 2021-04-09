const TabItem = './TabItem/index'

Component({
      externalClasses: [ 'class_tab' ],
      relations: { [ TabItem ]: { type: 'child' } },
      properties: {
            vertical: Boolean,
            current: Number
      },
      data: <{ titles: Array<string>, current_tab: number }>{
            titles: [],
            current_tab: 0
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

                  const _that = this

                  _that.setData({ current: index })
                  _that.triggerEvent('onBarItem', index)
            }
      },
      lifetimes: {
            ready() {
                  const _that = this
                  const nodes = _that.getRelationNodes(TabItem)
                  const titles: Array<string> = []

                  nodes.map((item) => {
                        titles.push(item.__data__.title)
                  })

                  _that.setData({ titles })
            }
      }
})
