| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| color | 颜色 | string | 'rgba(0, 0, 0, 0.2)' | 否 | 1.0.0 |
| radius | 圆角 | number | 8 | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
<Ripple>
      <Button type="border">Ripple</Button>
</Ripple>
```

### [设定颜色](#设定颜色)

```html
<Ripple color="red">
      <Button type="border">Ripple</Button>
</Ripple>
```

### [绑定方法](#绑定方法)

```html
<Ripple>
      <Button 
            type="border"
            bindtap="click"
      >Ripple</Button>
</Ripple>
```

### [设定圆角](#设定圆角)

```html
<Ripple radius="{{100}}">
      <Button 
            type="border"
            shape="circle"
      >Ripple</Button>
</Ripple>
```

### [幽灵按钮](#幽灵按钮)

```html
<Ripple>
      <Button ghost>Ripple</Button>
</Ripple>
```

### [任意使用](#任意使用)

```html
<Ripple color="white">
      <Card
            title="Primary"
            width="100%"
            bgColor="#222"
            color="white"
            radius="{{8}}"
      >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt
            ut labore et dolore magna aliqua.
      </Card>
</Ripple>
```