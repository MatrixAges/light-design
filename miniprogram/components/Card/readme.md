| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| title | 标题 | string | '' | 否 | 1.0.0 |
| width | 宽度 | string | '100%' | 否 | 1.0.0 |
| color | 字体颜色 | string | 'black' | 否 | 1.0.0 |
| bgColor | 背景颜色 | string | 'white' | 否 | 1.0.0 |
| bordered | 边框 | boolean | false | 否 | 1.0.0 |
| noPadding | 没有padding | boolean | false | 否 | 1.0.0 |
| shadow | 阴影 | boolean | false | 否 | 1.0.0 |
| media | 图片视频 | boolean | false | 否 | 1.0.0 |
| radius | 圆角 | number | 0 | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
<Card
      title="标题"
      width="100%"
      radius="{{8}}"
      bordered
>
      Lorem ipsum dolor sit amet, consectetur
</Card>
```

### [自定义背景](#自定义背景)

```html
<Card
      title="Primary"
      width="100%"
      bgColor="red"
      color="white"
      radius="{{8}}"
>
      Lorem ipsum dolor sit amet, consectetur
</Card>
```

### [阴影效果](#阴影效果)

```html
<Card
      title="标题"
      width="100%"
      radius="{{8}}"
      shadow
>
      Lorem ipsum dolor sit amet, consectetur
</Card>
```

### [完全自定义](#完全自定义)

```html
<Card
      bgColor="#222"
      color="white"
      radius="{{8}}"
      noPadding
>
      <view
            style="padding:30rpx 48rpx;padding-bottom: 24rpx;font-size: 32rpx;font-weight: 200;">
            Secondary</view>
      <view
            class="text_justify"
            style="padding:40rpx 48rpx;padding-top: 0;color: #aaa;"
      >
            Lorem ipsum dolor sit amet, consectetur
      </view>
</Card>
```

### [圆角大小](#圆角大小)

```html
<Card
      title="标题"
      width="100%"
      radius="{{24}}"
      shadow
      bordered
>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
</Card>
```

### [自定义用法](#自定义用法)

```html
<Card
      width="100%"
      radius="{{8}}"
      bordered
      shadow
      media
>
      <image
            class="w_100"
            slot="title"
            mode="aspectFill"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style="height: 300rpx;"
      ></image>
      <view>
            Lorem ipsum dolor sit amet, consectetur
      </view>
</Card>
```

### [自定义颜色](#自定义颜色)

```html
<Card
      title="标题"
      width="100%"
      color="gray"
      radius="{{8}}"
      bordered
>
      Lorem ipsum dolor sit amet, consectetur
</Card>
```

### [操作项](#操作项)

```html
<Card
      title="标题"
      width="100%"
      radius="{{8}}"
      bordered
>
      <image
            slot="option"
            mode="widthFix"
            src="/image/icon_right.svg"
            style="width: 24rpx;height: 24rpx;"
      ></image>
      <view class="text_justify">
            Lorem ipsum dolor sit amet, consectetur
      </view>
</Card>
```

### [自定义标题](#自定义标题)

```html
<Card
      width="100%"
      bordered
      noPadding
>
      <view
            slot="title"
            style="padding: 24rpx 48rpx;font-size: 32rpx;border: 2rpx solid var(--color_border);border-bottom: none;"
      >标题</view>
      <view
            class="text_justify"
            style="padding: 36rpx 48rpx;"
      >
            Lorem ipsum dolor sit amet, consectetur
      </view>
</Card>
```

### [无内边距](#无内边距)

```html
<Card
      width="100%"
      bordered
      noPadding
>
      Lorem ipsum dolor sit amet, consectetur
</Card>
```