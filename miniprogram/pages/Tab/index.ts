Page({
      data: {
            visible_default: false,
            titles: [ '标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10', ]
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
