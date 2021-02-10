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

### [默认效果](#默认效果)

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
>
</Popover>
```

### [设定位置](#设定位置)

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
>
</Popover>
```

### [设定标记](#设定标记)

```html
<Popover
      visible="{{visible_default}}"
      list="{{list}}"
      position="{{['100rpx','','','30rpx']}}"
      mark="{{['-8rpx','','30rpx','']}}"
>
</Popover>
```

### [动画原点](#动画原点)

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

### [自定义颜色](#自定义颜色)

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