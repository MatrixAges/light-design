| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| type | 样式 | string | default | 否 | 1.0.0 |
| size | 大小 | string | normal | 否 | 1.0.0 |
| shape | 形状 | string | normal | 否 | 1.0.0 |
| autoWidth | 宽度自适应 | boolean | false | 否 | 1.0.0 |
| width | 宽度 | string | '' | 否 | 1.0.0 |
| height | 高度 | string | '' | 否 | 1.0.0 |
| color | 颜色 | string | '' | 否 | 1.0.0 |
| bgColor | 背景色 | string | '' | 否 | 1.0.0 |
| iconPath | 图标路径 | string | '' | 否 | 1.0.0 |
| ghost | 幽灵按钮 | boolean | false | 否 | 1.0.0 |
| disabled | 禁用 | boolean | false | 否 | 1.0.0 |
| loading | 等待中 | boolean | false | 否 | 1.0.0 |

### type

| 值 | 说明 | 版本 |
| - | - | - |
| default | 默认 | 1.0.0 |
| primary | 主要 | 1.0.0 |
| border | 带边框的 | 1.0.0 |
| dashed | 带虚线边框的 | 1.0.0 |
| warning | 警告 | 1.0.0 |
| success | 成功 | 1.0.0 |
| error | 错误 | 1.0.0 |
| ghost | 幽灵按钮 | 1.0.0 |


### [size](#size)

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规大小 | 1.0.0 |
| large | 大尺寸按钮 | 1.0.0 |
| small | 小尺寸按钮 | 1.0.0 |

### [shape](#shape)

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规形状 | 1.0.0 |
| circle | 圆边按钮 | 1.0.0 |
| rect | 矩形按钮 | 1.0.0 |

### [按钮类型](#按钮类型)

```html
<Button type="primary">primary</Button>
<Button type="success">success</Button>
<Button type="warning">warning</Button>
<Button type="error">error</Button>
<Button type="border">border</Button>
<Button type="dashed">dashed</Button>
<Button type="default">default</Button>
```

### [幽灵按钮](#幽灵按钮)

```html
<Button type="primary" ghost>primary</Button>
<Button type="success" ghost>success</Button>
<Button type="warning" ghost>warning</Button>
<Button type="error" ghost>error</Button>
<Button type="border" ghost>border</Button>
<Button type="dashed" ghost>dashed</Button>
<Button type="default" ghost>default</Button>
```

### [按钮大小](#按钮大小)

```html
<Button size="large">large</Button>
<Button size="normal">normal</Button>
<Button size="small">small</Button>
```

### [按钮形状](#按钮形状)

```html
<Button shape="normal">large</Button>
<Button shape="circle">large</Button>
<Button shape="rect">large</Button>
```

### [添加图标](#添加图标)

```html
<Button 
      iconPath="microsoft.png"
      autoWidth
>Microsoft</Button>
```

### [宽度自适应](#宽度自适应)

```html
<Button autoWidth>autoWidth true</Button>
```

### [自定义宽度](#自定义宽度)

```html
<Button width="100%">custom width</Button>
```

### [自定义高度](#自定义高度)

```html
<Button 
      autoWidth 
      height="100rpx"
>custom height</Button>
```

### [不可点击](#不可点击)

```html
<Button disabled>true</Button>
```

### [自定义样式](#自定义样式)

```html
<Button
      bgColor="red"
      color="white"
>custom</Button>
```

### [加载中](#加载中)

```html
<Button
      loading="{{true}}"
      type="default"
>true</Button>
```

### [自定义图标](#自定义图标)

```html
<Button type="default">
      <image
            slot="icon"
            mode="widthFix"
            style="width: 24rpx;height: 24rpx;margin-right: 10rpx;"
            src="apple.png"
      ></image>
      apple
</Button>
```

### 配合使用

```html
<navigator url="/pages/index/index">
      <Button type="default">button</Button>
</navigator>

<button open-type="share">
      <Button type="default">button</Button>
</button>
```