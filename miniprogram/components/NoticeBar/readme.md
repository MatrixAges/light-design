| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| list | 数据项 | boolean | false | 否 | 1.0.0 |
| horizontal | 横向滚动 | boolean | false | 否 | 1.0.0 |
| color | 颜色 | string | 'black' | 否 | 1.0.0 |
| bgColor | 背景 | string | 'whitesmoke' | 否 | 1.0.0 |
| styles | 自定义样式 | string | '' | 否 | 1.0.0 |
| interval | 时间间隔 | number | 3000 | 否 | 1.0.0 |
| duration | 时间间隔 | number | 3000 | 否 | 1.0.0 |

<Title>triggerEvents</Title>

```typescript
// 点击滚动项时触发
onDetail:(
      {
            detail: {
                  index
            }:{
                  index：number
            }
      }
)=>void

// 点击更多时触发
onMore:()=>void
```

<Title>默认效果</Title>

```html
<NoticeBar list="{{list}}"></NoticeBar>
```

<Title>横向滚动</Title>

```html
<NoticeBar 
      list="{{list}}"
      interval="{{5000}}"
      horizontal
></NoticeBar>
```

<Title>颜色</Title>

```html
<NoticeBar 
      list="{{list}}"
      color="white"
      bgColor="black"
></NoticeBar>
```

<Title>背景</Title>

```html
<NoticeBar 
      list="{{list}}"
      color="white"
      bgColor="linear-gradient(to right,red,purple)"
></NoticeBar>
```

<Title>时间间隔</Title>

```html
<NoticeBar 
      list="{{list}}"
      interval="{{1000}}"
></NoticeBar>
```

<Title>自定义样式</Title>

```html
<NoticeBar 
      list="{{list}}"
      styles="height:90rpx;background:transparent;border:2rpx solid black;border-radius:30rpx;"
></NoticeBar>
```