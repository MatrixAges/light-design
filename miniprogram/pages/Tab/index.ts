Page({
      data: {
            visible_default: false,
            titles: [ '新闻', '视频', '图片', '军事', '体育', 'NBA', '娱乐', '财经', '科技', '时尚', ],
            titles_1: [ '微博热搜榜', '今日头条', '吃瓜' ],
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
