| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| color | 颜色 | string | 'rgba(0, 0, 0, 0.2)' | 否 | 1.0.0 |
| radius | 圆角 | number | 8 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Ripple>
      <Button type="border">Ripple</Button>
</Ripple>
```

<Title>设定颜色</Title>

```html
<Ripple color="red">
      <Button type="border">Ripple</Button>
</Ripple>
```

<Title>绑定方法</Title>

```html
<Ripple>
      <Button 
            type="border"
            bindtap="click"
      >Ripple</Button>
</Ripple>
```

<Title>设定圆角</Title>

```html
<Ripple radius="{{100}}">
      <Button 
            type="border"
            shape="circle"
      >Ripple</Button>
</Ripple>
```

<Title>幽灵按钮</Title>

```html
<Ripple>
      <Button ghost>Ripple</Button>
</Ripple>
```

<Title>任意使用</Title>

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