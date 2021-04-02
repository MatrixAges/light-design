<Description>
      <Text type='desc'>
           提示栏正如起其名，想小吃一样，不是必要的，但对于应用程序又不可或缺。她由信息展示区域和一组操作按钮组成。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>提示用户需要登录才能拥有更多权限。</li>
            <li>推送系统通知，并在一段时间后自动隐藏。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| position | 位置 | 'top' or 'bottom' | 'bottom' | 否 | 1.0.0 |
| type | 类型 | SnackBar_type | '' | 否 | 1.0.0 |
| top | 距离顶部距离 | number | 0 | 否 | 1.0.0 |
| bottom | 距离底部距离 | number | 0 | 否 | 1.0.0 |
| cover | 全部覆盖 | boolean | false | 否 | 1.0.0 |
| color | 颜色 | string | '' | 否 | 1.0.0 |
| bgColor | 背景颜色 | string | '' | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| description | 描述 | string | '' | 否 | 1.0.0 |
| okText | 确认文字 | string | '' | 否 | 1.0.0 |
| autoClose | 自动关闭 | boolean | false | 否 | 1.0.0 |
| closeable | 点击确认关闭 | boolean | false | 否 | 1.0.0 |
| duration | 关闭时间 | number | 3000 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| mini | 小尺寸 | boolean | false | 否 | 1.0.0 |
| custom | 自定义 | boolean | false | 否 | 1.0.0 |

<Title>types</Title>

```typescript
type SnackBar_type = '' | 'success' | 'warning' | 'error'
```

<Title>默认效果</Title>

```html
<SnackBar
      visible="{{visible_default}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
></SnackBar>
```

<Title>没有描述</Title>

```html
<SnackBar
      visible="{{visible_description}}"
      title="更多内容请登录"
      okText="登录"
></SnackBar>
```

<Title>自动关闭</Title>

```html
<SnackBar
      visible="{{visible_autoClose}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      autoClose
></SnackBar>
```

<Title>关闭时间</Title>

```html
<SnackBar
      visible="{{visible_duration}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      duration="{{5000}}"
      autoClose
></SnackBar>
```

<Title>弹出位置</Title>

```html
<SnackBar
      visible="{{visible_position}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      position="top"
></SnackBar>
```

<Title>具体位置</Title>

```html
<SnackBar
      visible="{{visible_bottom}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      bottom="{{60}}"
></SnackBar>
```

<Title>小尺寸</Title>

```html
<SnackBar
      visible="{{visible_mini}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      mini
></SnackBar>
```

<Title>自定义</Title>

```html
<SnackBar
      visible="{{visible_slot}}"
      title="您的账户余额不足，请尽快充值"
      custom
      mini
></SnackBar>
```

<Title>全部覆盖</Title>

```html
<SnackBar
      visible="{{visible_cover}}"
      title="更多内容请登录"
      description="登录后可享受更多服务，快登录吧"
      okText="登录"
      cover
></SnackBar>
```

<Title>组合使用</Title>

```html
<SnackBar
      visible="{{visible_composition}}"
      title="您的账户余额不足，请尽快充值"
      position="top"
      custom
      mini
      cover
>
      <image
            style="width: 30rpx;height: 30rpx;background-color: white;border-radius: 30rpx;"
            mode="widthFix"
            src="/image/icon_close.svg"
            mark:type="composition"
            catchtap="hide"
      ></image>
</SnackBar>
```

<Title>自定义样式</Title>

```html
<SnackBar
      visible="{{visible_styles}}"
      title="您的账户余额不足，请尽快充值"
      position="top"
      color="white"
      bgColor="red"
      custom
      mini
      cover
>
      <image
            style="width: 30rpx;height: 30rpx;background-color: white;border-radius: 30rpx;"
            mode="widthFix"
            src="/image/icon_close.svg"
            mark:type="styles"
            catchtap="hide"
      ></image>
</SnackBar>
```