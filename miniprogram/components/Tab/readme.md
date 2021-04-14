<Description>
      <Text type='desc'>
           选项卡由导航栏和内容区域组成，用户点击导航栏可实现内容的切换，也支持滑动内容区域切换内容，选项卡支持懒加载，在一些场景下可作为小型路由使用。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>商城的订单中心展示订单相关信息。</li>
            <li>作为页面导航使用。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| current | 当前内容 | number | 0 | 否 | 1.0.0 |
| vertical | 垂直显示 | boolean | false | 否 | 1.0.0 |
| position | 导航位置 | 'left' | 'right' |  | 否 | 1.0.0 |
| heightOfBar | 导航高度 | string |  | 否 | 1.0.0 |
| heightOfContent | 内容高度 | string |  | 否 | 1.0.0 |
| bordered | 分隔线条 | boolean | false | 否 | 1.0.0 |
| sticky | 固定导航 | boolean | false | 否 | 1.0.0 |
| offsetTop | 固定位置 | number | 0 | 否 | 1.0.0 |
| navZIndex | 导航层级 | number |  | 否 | 1.0.0 |
| lazyload | 懒加载 | boolean | false | 否 | 1.0.0 |
| activeLine | 指示线条 | boolean | false | 否 | 1.0.0 |
| swiper | 滑动切换 | boolean | false | 否 | 1.0.0 |
| zIndex | 层级 | number |  | 否 | 1.0.0 |
| styleOfRoot | 根节点样式 | string | '' | 否 | 1.0.0 |
| styleOfTitle | 标题样式 | string | '' | 否 | 1.0.0 |
| styleOfActive | 标题激活样式 | string | '' | 否 | 1.0.0 |
| styleOfBar | 导航样式 | string | '' | 否 | 1.0.0 |
| styleOfContent | 内容样式 | string | '' | 否 | 1.0.0 |
| visibleBar | 导航可见 | boolean | true | 否 | 1.0.0 |
| persist | 内容保持 | boolean | false | 否 | 1.0.0 |
| AnimationOfBar | 导航动画 | boolean | true | 否 | 1.0.0 |
| AnimationOfContent | 内容动画 | boolean | true | 否 | 1.0.0 |

<Title>TabItem</Title>

| 值 | 说明 | 版本 |
| - | - | - |
| title | 标题 | 1.0.0 |
| disabled | 是否禁用 | 1.0.0 |

<Title>默认效果</Title>

```html
<Tab
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view class="content_item w_100 flex justify_center align_center">{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>垂直显示</Title>

```html
<Tab
      vertical
      heightOfBar="300rpx"
      heightOfContent="400rpx"
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view 
                  class="content_item w_100 flex justify_center align_center"
                  style="height: 100%;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>垂直右边</Title>

```html
<Tab
      vertical
      activeLine
      bordered
      position="right"
      heightOfBar="300rpx"
      heightOfContent="400rpx"
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view 
                  class="content_item w_100 flex justify_center align_center"
                  style="height: 100%;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>固定导航</Title>

```html
<Tab
      sticky
      navZIndex="{{100}}"
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view class="content_item w_100 flex justify_center align_center">{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>标题不定长</Title>

```html
<Tab
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles_1}}"
            wx:key="index"
            title="{{item}}"
      >
            <view class="content_item w_100 flex justify_center align_center">{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>懒加载</Title>

```html
<Tab
      lazyload
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view class="content_item w_100 flex justify_center align_center">{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>内容不定高</Title>

```html
<Tab
      lazyload
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view
                  class="content_item w_100 flex justify_center align_center"
                  style="height: {{(index*0.1+1)*300}}rpx;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>内容保持</Title>

```html
<Tab
      lazyload
      persist
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view
                  class="content_item w_100 flex justify_center align_center"
                  style="height: {{(index*0.1+1)*300}}rpx;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>指示条</Title>

```html
<Tab
      activeLine
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view
                  class="content_item w_100 flex justify_center align_center"
                  style="margin-top: 30rpx;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>分隔线条</Title>

```html
<Tab
      activeLine
      bordered
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view
                  class="content_item w_100 flex justify_center align_center"
                  style="margin-top: 30rpx;"
            >{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>滑动内容切换</Title>

```html
<Tab
      swiper
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem
            wx:for="{{titles}}"
            wx:key="index"
            title="{{item}}"
      >
            <view class="content_item w_100 flex justify_center align_center">{{item}}内容</view>
      </TabItem>
</Tab>
```

<Title>禁用选项</Title>

```html
<Tab
      styleOfRoot="border: 2rpx solid black;padding: 20rpx;border-radius: 12rpx"
>
      <TabItem title="Tab 1">
            <view class="content_item w_100 flex justify_center align_center">新闻</view>
      </TabItem>
      <TabItem title="Tab 2">
            <view class="content_item w_100 flex justify_center align_center">视频</view>
      </TabItem>
      <TabItem
            title="Tab 3"
            disabled
      >
            <view class="content_item w_100 flex justify_center align_center">图片</view>
      </TabItem>
</Tab>
```