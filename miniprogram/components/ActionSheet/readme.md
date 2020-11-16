| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| list | 数据项 | Array`<List>` | [] | 否 | 1.0.0 |
| scroll | 横向显示 | boolean | false | 否 | 1.0.0 |
| vertical | 纵向显示 | boolean | false | 否 | 1.0.0 |
| textOnly | 仅有文字 | boolean | false | 否 | 1.0.0 |
| visibleCancel | 显示取消 | boolean | false | 否 | 1.0.0 |
| column | 列数 | number | 3 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |

<p id="types" class='anchor'  style="opactiy:0">/</p>  

### [types](#types)

```typescript
type List = {
      name:string
      icon:string
}
```

<p id="list" class='anchor'  style="opactiy:0">/</p>  

### [list](#list)

| 值 | 说明 | 版本 |
| - | - | - |
| name | 名称 | 1.0.0 |
| icon | 图标链接 | 1.0.0 |

## 例子

<p id="默认效果" class='anchor'  style="opactiy:0">/</p> 

### [默认效果](#默认效果)

```html
<ActionSheet
      visible="{{visible_default}}"
      title="分享"
      list="{{list}}"
></ActionSheet>
```

<p id="没有标题" class='anchor'  style="opactiy:0">/</p> 

### [没有标题](#没有标题)

```html
<ActionSheet
      visible="{{visible_default}}"
      list="{{list}}"
></ActionSheet>
```

<p id="横向滚动" class='anchor'  style="opactiy:0">/</p> 

### [横向滚动](#横向滚动)

```html
<ActionSheet
      visible="{{visible_scroll}}"
      title="分享"
      list="{{list}}"
      scroll
></ActionSheet>
```

<p id="纵向显示" class='anchor'  style="opactiy:0">/</p> 

### [纵向显示](#纵向显示)

```html
<ActionSheet
      visible="{{visible_scroll}}"
      list="{{list}}"
      vertical
></ActionSheet>
```

<p id="仅有文字" class='anchor'  style="opactiy:0">/</p> 

### [仅有文字](#仅有文字)

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

<p id="显示取消" class='anchor'  style="opactiy:0">/</p> 

### [显示取消](#显示取消)

```html
<ActionSheet
      visible="{{visible_visibleCancel}}"
      list="{{list}}"
      vertical
      visibleCancel
></ActionSheet>
```

<p id="列数" class='anchor'  style="opactiy:0">/</p> 

### [列数](#列数)

```html
<ActionSheet
      visible="{{visible_column}}"
      title="分享"
      list="{{list}}"
      column="{{4}}"
></ActionSheet>
```