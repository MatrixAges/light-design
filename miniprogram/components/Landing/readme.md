| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 是 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| maskVisible | 遮罩是否可见 | boolean | false | 否 | 1.0.0 |
| maskColor | 遮罩颜色 | string | 'white' | 否 | 1.0.0 |
| delay | 延迟显示时间 | number | 0 | 否 | 1.0.0 |
| timeout | 延迟关闭时间 | number | 0 | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
 <Landing visible="{{visible_default}}"></Landing>
```

### [显示遮罩](#显示遮罩)

```html
<Landing 
      visible="{{visible_default}}"
      maskVisible
 ></Landing>
```

### [遮罩颜色](#遮罩颜色)

```html
<Landing 
      visible="{{visible_default}}"
      maskColor="rgba(255, 255, 255, 0.8)"
      maskVisible
 ></Landing>
```