// @ts-nocheck

const Index = Behavior({
      x: 0,
      offset_x: 0,
      next: null,
      methods: {
            reset() {
                  this.x = 0
                  this.offset_x = 0
                  this.next = null
            },
            touchStart(e: WechatMiniprogram.TouchEvent) {
                  this.reset()

                  this.x = e.touches[ 0 ].clientX
            },
            touchMove(e: WechatMiniprogram.TouchEvent) {
                  this.offset_x = e.touches[ 0 ].clientX - this.x
            }
      }
})

export default Index