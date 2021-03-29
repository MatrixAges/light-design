| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| custom | 自定义 | boolean | false | 否 | 1.0.0 |
| confirmLoading | 加载中 | boolean | false | 否 | 1.0.0 |
| footerVisible | 显示底栏 | boolean | true | 否 | 1.0.0 |
| closeVisible | 显示关闭 | boolean | false | 否 | 1.0.0 |
| bottom | 再底部 | boolean | false | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| okText | 确定按钮文字 | string | '确定' | 否 | 1.0.0 |
| cancelText | 取消按钮文字 | string | '取消' | 否 | 1.0.0 |
| cancelVisible | 显示取消 | boolean | true | 否 | 1.0.0 |
| maskVisible | 显示取消 | boolean | true | 否 | 1.0.0 |
| maskClosable | 显示取消 | boolean | true | 否 | 1.0.0 |
| bodyStyle | 内容样式 | string | '' | 否 | 1.0.0 |

### [triggerEvents](#triggerEvents)

```typescript
// 展示时触发
onShow:()=>void

// 隐藏时触发
onClose:()=>void

// 点击确认时触发
onOk:()=>void
```

### [默认效果](#默认效果)

```html
<Dialog visible="{{visible_default}}">
      结果并不重要，重要的是过程？
</Dialog>
```

### [没有标题](#没有标题)

```html
<Dialog 
      visible="{{visible_no_title}}"  
      title=""
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [loading](#loading)

```html
<Dialog 
      visible="{{visible_confirmLoading}}"  
      confirmLoading
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [自定义内容](#自定义内容)

```html
<Dialog 
      visible="{{visible_custom}}"  
      custom
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [底部弹出](#底部弹出)

```html
<Dialog 
      visible="{{visible_bottom}}"  
      bottom
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [隐藏取消](#隐藏取消)

```html
<Dialog 
      visible="{{visible_cancelVisible}}"  
      cancelVisible="{{false}}"
      custom
>
      <view
            class="w_100 border_box text_center"
            style="padding: 240rpx 0;background-color: whitesmoke;"
      >我们的目标是：星辰大海！</view>
</Dialog>
```

### [显示关闭](#显示关闭)

```html
<Dialog 
      visible="{{visible_cancelVisible}}"  
      custom
      closeVisible
>
      <view
            class="w_100 border_box text_center"
            style="padding: 240rpx 0;background-color: whitesmoke;"
      >我们的目标是：星辰大海！</view>
</Dialog>
```

### [隐藏遮罩](#隐藏遮罩)

```html
<Dialog 
      visible="{{visible_maskVisible}}"  
      maskVisible="{{false}}"
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [点击遮罩关闭](#点击遮罩关闭)

```html
<Dialog 
      visible="{{visible_maskClosable}}"  
      maskVisible="{{false}}"
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [自定义样式](#自定义样式)

```html
<Dialog 
      visible="{{visible_bodyStyle}}"
      bodyStyle="padding:200rpx 0;margin-top:40rpx;border-radius:0;background-color:whitesmoke;color:black"
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [确定文字](#确定文字)

```html
<Dialog 
      visible="{{visible_okText}}"
      okText="是的哟～"
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [取消文字](#取消文字)

```html
<Dialog 
      visible="{{visible_cancelText}}"
      okText="～bu bu～"
>
      结果并不重要，重要的是过程？
</Dialog>
```

### [slot](#slot)

```html
<Dialog 
      visible="{{visible_slot}}"
>
      结果并不重要，重要的是过程？
      <navigator
            class="w_100 h_100 flex justify_center align_center bg_black white"
            slot="confirm"
            url="/pages/index/index"
      >去首页</navigator>
</Dialog>
```