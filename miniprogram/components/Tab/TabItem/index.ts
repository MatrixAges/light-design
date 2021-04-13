// @ts-nocheck

const Tab = '../index'

Component({
      relations: {
            [ Tab ]: { type: 'parent' }
      },
      properties: {
            title: String,
            disabled: Boolean
      },
      data: {
            current: null,
            index: null,
            rendered: false
      },
      tab: {} as WechatMiniprogram.Component.TrivialInstance,
      methods: {
            reset() {
                  this.setData({
                        current: null,
                        index: null,
                        rendered: false
                  })
            },
            updateCurrent() {
                  const { index, rendered } = this.data
                  const { current, persist } = this.tab.__data__

                  if (persist && rendered) {
                        this.setData({ current })
                  } else {
                        this.setData({
                              current,
                              rendered: index ? index === current : true
                        })
                  }
            }
      },
      lifetimes: {
            ready() {
                  const tab = this.getRelationNodes(Tab)[ 0 ]
                  const { titles, lazyload } = tab.__data__
                  const index = titles.findIndex((item: { text: string, disabled: boolean }) => item.text === this.data.title)

                  this.tab = tab
                  
                  this.setData({ index })

                  if (!lazyload) this.setData({ rendered: true })

                  this.updateCurrent()
            }
      }
})
