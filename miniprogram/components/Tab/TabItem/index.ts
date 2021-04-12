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
      methods: {
            updateCurrent() {
                  const { index, rendered } = this.data
                  const tab = this.getRelationNodes(Tab)[ 0 ]
                  const { current } = tab.__data__

                  this.setData({ current })

                  if (rendered) return

                  this.setData({
                        rendered: index === current
                  })
            }
      },
      lifetimes: {
            ready() {
                  const tab = this.getRelationNodes(Tab)[ 0 ]
                  const { titles, lazyload } = tab.__data__
                  const index = titles.findIndex((item: { text: string, disabled: boolean }) => item.text === this.data.title)

                  this.setData({ index })

                  if (!lazyload) this.setData({ rendered: true })

                  this.updateCurrent()
            }
      }
})
