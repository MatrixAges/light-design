<Description>
      <Text type='desc'>
           弹框的灵感来源与微信的右上角点击弹框，她提供一个固定在页面上的局部列表内容选项，比 ActionSheet 更有辨识度。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>应用扩展功能的交互展示。</li>
            <li>展示一些其他面板选项。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| list | 数据项 | IList | [] | 是 | 1.0.0 |
| position | 弹出位置 |  [string, string, string, string] |  [ '', '', '', '' ] | 否 | 1.0.0 |
| mark | 标记位置 |  [string, string, string, string] |  [ '-8rpx', '', '', '30rpx' ] | 否 | 1.0.0 |
| transformOrigin | 动画原点 | string | 'top right' | 否 | 1.0.0 |
| bgColor | 背景 | string | 'black' | 否 | 1.0.0 |
| color | 颜色 | string | 'white' | 否 | 1.0.0 |
| divideColor | 分割线颜色 | string | 'rgba(255, 255, 255, 0.15)' | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['30rpx','','','30rpx']}}"
>
</Popover>
```

<Title>设定位置</Title>

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['30rpx','','','30rpx']}}"
>
</Popover>
```

<Title>设定标记</Title>

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
      mark="{{['-8rpx','','30rpx','']}}"
>
</Popover>
```

<Title>动画原点</Title>

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
      mark="{{['-8rpx','','30rpx','']}}"
      transformOrigin="top left"
>
</Popover>
```

<Title>自定义颜色</Title>

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
      bgColor="whitesmoke"
      color="black"
      divideColor="#eee"
>
</Popover>
```