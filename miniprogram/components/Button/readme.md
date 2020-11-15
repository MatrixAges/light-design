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

<p id="type" class='anchor'>/</p>  

### [type](#type)

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

<p id="size" class='anchor'>/</p>  

### [size](#size)

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规大小 | 1.0.0 |
| large | 大尺寸按钮 | 1.0.0 |
| small | 小尺寸按钮 | 1.0.0 |

<p id="shape" class='anchor'>/</p> 

### [shape](#shape)

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规形状 | 1.0.0 |
| circle | 圆边按钮 | 1.0.0 |
| rect | 矩形按钮 | 1.0.0 |

## 例子

<p id="按钮类型" class='anchor'>/</p> 

### [按钮类型](#按钮类型)

```html
<light-button type="primary">primary</light-button>
<light-button type="success">success</light-button>
<light-button type="warning">warning</light-button>
<light-button type="error">error</light-button>
<light-button type="border">border</light-button>
<light-button type="dashed">dashed</light-button>
<light-button type="default">default</light-button>
```

<p id="幽灵按钮" class='anchor'>/</p> 

### [幽灵按钮](#幽灵按钮)

```html
<light-button type="primary" ghost>primary</light-button>
<light-button type="success" ghost>success</light-button>
<light-button type="warning" ghost>warning</light-button>
<light-button type="error" ghost>error</light-button>
<light-button type="border" ghost>border</light-button>
<light-button type="dashed" ghost>dashed</light-button>
<light-button type="default" ghost>default</light-button>
```

<p id="按钮大小" class='anchor'>/</p> 

### [按钮大小](#按钮大小)

```html
<light-button size="large">large</light-button>
<light-button size="normal">normal</light-button>
<light-button size="small">small</light-button>
```

<p id="按钮形状" class='anchor'>/</p> 

### [按钮形状](#按钮形状)

```html
<light-button shape="normal">large</light-button>
<light-button shape="circle">large</light-button>
<light-button shape="rect">large</light-button>
```

<p id="添加图标" class='anchor'>/</p> 

### [添加图标](#添加图标)

```html
<light-button 
      iconPath="microsoft.png"
      autoWidth
>Microsoft</light-button>
```

<p id="宽度自适应" class='anchor'>/</p> 

### [宽度自适应](#宽度自适应)

```html
<light-button autoWidth>autoWidth true</light-button>
```

<p id="自定义宽度" class='anchor'>/</p> 

### [自定义宽度](#自定义宽度)

```html
<light-button width="100%">custom width</light-button>
```

<p id="自定义高度" class='anchor'>/</p> 

### [自定义高度](#自定义高度)

```html
<light-button 
      autoWidth 
      height="100rpx"
>custom height</light-button>
```

<p id="不可点击" class='anchor'>/</p> 

### [不可点击](#不可点击)

```html
<light-button disabled>true</light-button>
```

<p id="自定义样式" class='anchor'>/</p> 

### [自定义样式](#自定义样式)

```html
<light-button
      bgColor="red"
      color="white"
>custom</light-button>
```

<p id="加载中" class='anchor'>/</p> 

### [加载中](#加载中)

```html
<light-button
      loading="{{true}}"
      type="default"
>true</light-button>
```

<p id="自定义图标" class='anchor'>/</p> 

### [自定义图标](#自定义图标)

```html
<light-button type="default">
      <image
            slot="icon"
            mode="widthFix"
            style="width: 24rpx;height: 24rpx;margin-right: 10rpx;"
            src="apple.png"
      ></image>
      apple
</light-button>
```

<p id="配合使用" class='anchor'>/</p> 

### [配合使用](#配合使用)

```html
<navigator url="/pages/index/index">
      <light-button type="default">button</light-button>
</navigator>

<button open-type="share">
      <light-button type="default">button</light-button>
</button>
```