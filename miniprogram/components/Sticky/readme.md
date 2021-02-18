| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| offsetTop | 顶部距离 | number | 0 | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| container | 容器 | string | '' | 否 | 1.0.0 |
| disabled | 禁用 | boolean | false | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
<Sticky>
      <Button>默认效果</Button>
</Sticky>
```

### [顶部距离](#顶部距离)

```html
<Sticky offsetTop="{{30}}">
      <Button>顶部距离</Button>
</Sticky>
```

### [指定容器](#指定容器)

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