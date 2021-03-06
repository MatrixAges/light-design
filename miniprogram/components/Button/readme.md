<Description>
      <Text type='desc'>
           按钮提供了一个可点击的元素，可以在表单中使用，也可以在任何需要简单、标准按钮功能的地方使用。她可以显示文本、图标或两者兼备。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>表示为可点击，即可交互的。</li>
            <li>表单内容填写之后进行提交，或在表单中提供交互。</li>
            <li>触发某种事件，反馈信息给用户。</li>
      </ul>
</Description>

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

<Title>type</Title>

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


<Title>size</Title>

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规大小 | 1.0.0 |
| large | 大尺寸按钮 | 1.0.0 |
| small | 小尺寸按钮 | 1.0.0 |

<Title>shape</Title>

| 值 | 说明 | 版本 |
| - | - | - |
| normal | 常规形状 | 1.0.0 |
| circle | 圆边按钮 | 1.0.0 |
| rect | 矩形按钮 | 1.0.0 |

<Title>按钮类型</Title>

```html
<Button type="primary">primary</Button>
<Button type="success">success</Button>
<Button type="warning">warning</Button>
<Button type="error">error</Button>
<Button type="border">border</Button>
<Button type="dashed">dashed</Button>
<Button type="default">default</Button>
```

<Title>幽灵按钮</Title>

```html
<Button type="primary" ghost>primary</Button>
<Button type="success" ghost>success</Button>
<Button type="warning" ghost>warning</Button>
<Button type="error" ghost>error</Button>
<Button type="border" ghost>border</Button>
<Button type="dashed" ghost>dashed</Button>
<Button type="default" ghost>default</Button>
```

<Title>按钮大小</Title>

```html
<Button size="large">large</Button>
<Button size="normal">normal</Button>
<Button size="small">small</Button>
```

<Title>按钮形状</Title>

```html
<Button shape="normal">large</Button>
<Button shape="circle">large</Button>
<Button shape="rect">large</Button>
```

<Title>添加图标</Title>

```html
<Button 
      iconPath="microsoft.png"
      autoWidth
>Microsoft</Button>
```

<Title>宽度自适应</Title>

```html
<Button autoWidth>autoWidth true</Button>
```

<Title>自定义宽度</Title>

```html
<Button width="100%">custom width</Button>
```

<Title>自定义高度</Title>

```html
<Button 
      autoWidth 
      height="100rpx"
>custom height</Button>
```

<Title>不可点击</Title>

```html
<Button disabled>true</Button>
```

<Title>自定义样式</Title>

```html
<Button
      bgColor="red"
      color="white"
>custom</Button>
```

<Title>加载中</Title>

```html
<Button
      loading="{{true}}"
      type="default"
>true</Button>
```

<Title>自定义图标</Title>

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

<Title>配合使用</Title>

```html
<navigator url="/pages/index/index">
      <Button type="default">button</Button>
</navigator>

<button open-type="share">
      <Button type="default">button</Button>
</button>
```