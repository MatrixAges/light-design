<Description>
      <Text type='desc'>
           粘性布局来源于css中的 position:sticky 属性，由于小程序浏览器内核的原因，该特性需要通过组件的形式来实现。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>当页面滚动时，将tabbar悬浮显示在页面顶部。</li>
            <li>页面有长的 table 时，滚动页面，表头悬浮显示在页面顶部，获得更好的信息展示效果。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| offsetTop | 顶部距离 | number | 0 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| container | 容器 | string | '' | 否 | 1.0.0 |
| disabled | 禁用 | boolean | false | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Sticky>
      <Button>默认效果</Button>
</Sticky>
```

<Title>顶部距离</Title>

```html
<Sticky offsetTop="{{30}}">
      <Button>顶部距离</Button>
</Sticky>
```

<Title>指定容器</Title>

```html
<view
      id="container"
      class="example"
      style="height: 600px; background-color: #E0E0E0;"
>
      <view style="height: 200px; background-color: #eee;"></view>
            <Sticky
                  offsetTop="{{30}}"
                  container="#container"
            >
                  <Card
                        title="Primary"
                        width="auto"
                        bgColor="red"
                        color="white"
                        radius="{{8}}"
                  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua.
                  </Card>
            </Sticky>
      </view>
</view>
```