<Description>
      <Text type='desc'>
           加载中用来表示数据加载状态，对页面的不同内容之间进行过渡，她是连续性设计的一部分。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>配合按钮进行使用。</li>
            <li>当加载列表数据项时。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| position | 弹出位置 | enum_position | false | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| duration | 过渡时间 | number | 300 | 否 | 1.0.0 |
| maskVisible | 遮罩是否可见 | boolean | true | 否 | 1.0.0 |
| maskClosable | 点击遮罩关闭 | boolean | true | 否 | 1.0.0 |

<Title>types</Title>

```typescript
type enum_position = 'center' | 'top' | 'bottom' | 'left' | 'right'
```

<Title>triggerEvents</Title>

```typescript
// 展示时触发
onShow:()=>void

// 隐藏时触发
onClose:()=>void

```

<Title>默认效果</Title>

```html
<Modal visible="{{visible_default}}">
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>顶部弹出</Title>

```html
<Modal 
      visible="{{visible_top}}"
      position="top"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>底部弹出</Title>

```html
<Modal 
      visible="{{visible_bottom}}"
      position="bottom"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>左侧弹出</Title>

```html
<Modal 
      visible="{{visible_left}}"
      position="left"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>右侧弹出</Title>

```html
<Modal 
      visible="{{visible_right}}"
      position="right"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>没有遮罩</Title>

```html
<Modal 
      visible="{{visible_maskVisible}}"
      maskVisible="{{false}}"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```

<Title>蒙层关闭</Title>

```html
<Modal 
      visible="{{visible_maskVisible}}"
      maskClosable="{{false}}"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modal>
```