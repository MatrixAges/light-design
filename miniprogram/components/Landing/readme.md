<Description>
      <Text type='desc'>
           页面加载的作用相当于一个落地页，避免应用在加载数据和渲染的过程中出现肉眼可见的闪烁，排版错乱。通过将品牌 Logo 设定为 Landing 的展示内容，加强用户对品牌的认知。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>用户访问应用首页时。</li>
            <li>切换到新的页面数据还未加载完成时，用以代替占位符。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 是 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| maskVisible | 遮罩是否可见 | boolean | false | 否 | 1.0.0 |
| maskColor | 遮罩颜色 | string | 'white' | 否 | 1.0.0 |
| delay | 延迟显示时间 | number | 0 | 否 | 1.0.0 |
| timeout | 延迟关闭时间 | number | 0 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
 <Landing visible="{{visible_default}}"></Landing>
```

<Title>显示遮罩</Title>

```html
<Landing 
      visible="{{visible_default}}"
      maskVisible
 ></Landing>
```

<Title>遮罩颜色</Title>

```html
<Landing 
      visible="{{visible_default}}"
      maskColor="rgba(255, 255, 255, 0.8)"
      maskVisible
 ></Landing>
```