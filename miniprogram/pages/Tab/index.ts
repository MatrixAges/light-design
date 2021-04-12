Page({
      data: {
            visible_default: false,
            titles: [ 'Tab 1', 'Tab2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10', ],
            titles_1: [ 'this is tab title', 'Tab 2', 'Tab 3' ],
      },
      onOption(e: any) {
            const _that = this
            const { mark: { type } } = e

            if (!type) return

            _that.setData({
                  [ `visible_${type}` ]: true
            })

      }
})
