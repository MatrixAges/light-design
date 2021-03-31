| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| list | 数据项 | Array`<List>` | [] | 是 | 1.0.0 |
| scroll | 横向显示 | boolean | false | 否 | 1.0.0 |
| vertical | 纵向显示 | boolean | false | 否 | 1.0.0 |
| textOnly | 仅有文字 | boolean | false | 否 | 1.0.0 |
| visibleCancel | 显示取消 | boolean | false | 否 | 1.0.0 |
| column | 列数 | number | 3 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |

<Title>types</Title>

```typescript
type List = {
      name:string
      icon:string
}
```

<Title>triggerEvents</Title>

```typescript
// 点击列表项时触发
onSelectedPeriod:(
      {
            detail: {
                  index
            }:{
                  index：number
            }
      }
)=>void

// 展示时触发
onShow:()=>void

// 隐藏时触发
onClose:()=>void
```

<Title>list</Title>

| 值 | 说明 | 版本 |
| - | - | - |
| name | 名称 | 1.0.0 |
| icon | 图标链接 | 1.0.0 |

<Title>默认效果</Title>

```html
<ActionSheet
      visible="{{visible_default}}"
      title="分享"
      list="{{list}}"
></ActionSheet>
```

<Title>没有标题</Title>

```html
<ActionSheet
      visible="{{visible_default}}"
      list="{{list}}"
></ActionSheet>
```

<Title>横向滚动</Title>

```html
<ActionSheet
      visible="{{visible_scroll}}"
      title="分享"
      list="{{list}}"
      scroll
></ActionSheet>
```

<Title>纵向显示</Title>

```html
<ActionSheet
      visible="{{visible_scroll}}"
      list="{{list}}"
      vertical
></ActionSheet>
```

<Title>仅有文字</Title>

```html
<ActionSheet
      visible="{{visible_textOnly}}"
      title="分享"
      list="{{list}}"
      vertical
      textOnly
      visibleCancel
></ActionSheet>
```

<Title>显示取消</Title>

```html
<ActionSheet
      visible="{{visible_visibleCancel}}"
      list="{{list}}"
      vertical
      visibleCancel
></ActionSheet>
```

<Title>列数</Title>

```html
<ActionSheet
      visible="{{visible_column}}"
      title="分享"
      list="{{list}}"
      column="{{4}}"
></ActionSheet>
```