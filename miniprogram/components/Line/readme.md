| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| width | 宽度 | string | '100%' | 否 | 1.0.0 |
| height | 高度 | string | '2rpx' | 否 | 1.0.0 |
| radius | 圆角 | number | 0 | 否 | 1.0.0 |
| color | 颜色 | string | 'black' | 否 | 1.0.0 |
| thin | 0.5px边界 | boolean | false | 否 | 1.0.0 |
| box | 包裹对象 | boolean | false | 否 | 1.0.0 |
| borderSize | 边界大小 | number | 2 | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
<Line></Line>
```

### [设定宽度](#设定宽度)

```html
<Line width="50%"></Line>
```

### [设定高度](#设定高度)

```html
<Line height="10rpx"></Line>
```

### [0.5px线条](#0.5px线条)

```html
<Line thin></Line>
```

### [设定圆角](#设定圆角)

```html
<Line 
      height="10rpx"
      radius="{{10}}"
></Line>
```

### [配合使用](#配合使用)

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

### [包裹对象](#包裹对象)

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

### [0.5px边界](#0.5px边界)

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

### [边界颜色](#边界颜色)

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
