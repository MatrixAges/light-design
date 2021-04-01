<Description>
      <Text type='desc'>
           线条是原子化的元素，可用来包裹其他任何类型的子元素，且能够单独使用。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>需要设定0.5px线条时。</li>
            <li>包裹内容，以代替 border。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| width | 宽度 | string | '100%' | 否 | 1.0.0 |
| height | 高度 | string | '2rpx' | 否 | 1.0.0 |
| radius | 圆角 | number | 0 | 否 | 1.0.0 |
| color | 颜色 | string | 'black' | 否 | 1.0.0 |
| thin | 0.5px边界 | boolean | false | 否 | 1.0.0 |
| box | 包裹对象 | boolean | false | 否 | 1.0.0 |
| borderSize | 边界大小 | number | 2 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Line></Line>
```

<Title>设定宽度</Title>

```html
<Line width="50%"></Line>
```

<Title>设定高度</Title>

```html
<Line height="10rpx"></Line>
```

<Title>0.5px线条</Title>

```html
<Line thin></Line>
```

<Title>设定圆角</Title>

```html
<Line 
      height="10rpx"
      radius="{{10}}"
></Line>
```

<Title>配合使用</Title>

```html
<Line
      class="mr_24"
      box
      thin
      radius="{{8}}"
      catchtap="click"
>
      <Button ghost>Primary</Button>
</Line>
```

<Title>包裹对象</Title>

```html
<Line
      radius="{{8}}"
      box
>
      <Card
            title="Primary"
            width="100%"
      >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua.
      </Card>
</Line>
```

<Title>0.5px边界</Title>

```html
<Line
      radius="{{8}}"
      box
      thin
>
      <Card
            title="Primary"
            width="100%"
      >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua.
      </Card>
</Line>
```

<Title>边界颜色</Title>

```html
<Line
      color="red"
      radius="{{8}}"
      box
>
      <Card
            title="Primary"
            width="100%"
      >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua.
      </Card>
</Line>
```
