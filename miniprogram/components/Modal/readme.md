| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| position | 弹出位置 | enum_position | false | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| duration | 过渡时间 | number | 300 | 否 | 1.0.0 |
| maskVisible | 遮罩是否可见 | boolean | true | 否 | 1.0.0 |
| maskClosable | 点击遮罩关闭 | boolean | true | 否 | 1.0.0 |

### [types](#types)

```typescript
type enum_position = 'center' | 'top' | 'bottom' | 'left' | 'right'
```

### [triggerEvents](#triggerEvents)

```typescript
// 展示时触发
onShow:()=>void

// 隐藏时触发
onClose:()=>void

```

### [默认效果](#默认效果)

```html
<Modal visible="{{visible_default}}">
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [顶部弹出](#顶部弹出)

```html
<Modal 
      visible="{{visible_top}}"
      position="top"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [底部弹出](#底部弹出)

```html
<Modal 
      visible="{{visible_bottom}}"
      position="bottom"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [左侧弹出](#左侧弹出)

```html
<Modal 
      visible="{{visible_left}}"
      position="left"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [右侧弹出](#右侧弹出)

```html
<Modal 
      visible="{{visible_right}}"
      position="right"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [没有遮罩](#没有遮罩)

```html
<Modal 
      visible="{{visible_maskVisible}}"
      maskVisible="{{false}}"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

### [蒙层关闭](#蒙层关闭)

```html
<Modal 
      visible="{{visible_maskVisible}}"
      maskClosable="{{false}}"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```