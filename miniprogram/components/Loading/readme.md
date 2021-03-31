| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| type | 类型 | 'refresh' or 'loading' | 'refresh' | 否 | 1.0.0 |
| size | 大小 | number | 1 | 否 | 1.0.0 |
| text | 文字 | string | '' | 否 | 1.0.0 |
| delay | 延迟显示时间 | number | 0 | 否 | 1.0.0 |
| timeout | 延迟关闭时间 | number | 0 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Loading
      type="refresh"
      visible
></Loading>
```

<Title>加载中</Title>

```html
<Loading
      type="loading"
      visible
></Loading>
```