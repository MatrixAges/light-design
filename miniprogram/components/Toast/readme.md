| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| position | 位置 | 'top' or 'bottom' | 'bottom' | 否 | 1.0.0 |
| type | 类型 | Toast_type | '' | 否 | 1.0.0 |
| useColor | 背景色 | boolean | false | 否 | 1.0.0 |
| color | 颜色 | string | '' | 否 | 1.0.0 |
| bgColor | 背景颜色 | string | '' | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| duration | 关闭时间 | number | 3000 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |

### [types](#types)

```typescript
type Toast_type = '' | 'success' | 'warning' | 'error'
```

### [默认效果](#默认效果)

```html
<light-toast
      visible="{{visible_default}}"
      title="default Toast"
></light-toast>
```

### [顶部弹出](#顶部弹出)

```html
<light-toast
      visible="{{visible_position}}"
      title="default Toast"
      position="top"
></light-toast>
```

### [自定义颜色](#自定义颜色)

```html
<light-toast
      visible="{{visible_custom}}"
      title="default Toast"
      color="white"
      bgColor="linear-gradient(to right,red,blue)"
></light-toast>
```

### [关闭时间](#关闭时间)

```html
<light-toast
      visible="{{visible_duration}}"
      title="default Toast"
      duration="{{1000}}"
></light-toast>
```

### [设定类型](#设定类型)

```html
<light-toast
      visible="{{visible_success}}"
      title="success Toast"
      type="success"
></light-toast>
<light-toast
      visible="{{visible_warning}}"
      title="warning Toast"
      type="warning"
></light-toast>
<light-toast
      visible="{{visible_error}}"
      title="error Toast"
      type="error"
></light-toast>
```

### [背景色](#背景色)

```html
<light-toast
      visible="{{visible_useColor_success}}"
      title="success Toast"
      type="success"
      useColor
></light-toast>
<light-toast
      visible="{{visible_useColor_warning}}"
      title="warning Toast"
      type="warning"
      useColor
></light-toast>
<light-toast
      visible="{{visible_useColor_error}}"
      title="error Toast"
      type="error"
      useColor
></light-toast>
```