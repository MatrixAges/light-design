<Description>
      <Text type='desc'>
           加载中用来表示数据加载状态，主要用来缓解用户焦虑，她时连续性设计的一部分。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>配合按钮进行使用。</li>
            <li>当加载列表数据项时。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| type | 类型 | 'refresh' or 'loading' | 'refresh' | 否 | 1.0.0 |
| size | 大小 | number | 1 | 否 | 1.0.0 |
| text | 文字 | string | '' | 否 | 1.0.0 |
| delay | 延迟显示时间 | number | 0 | 否 | 1.0.0 |
| timeout | 延迟关闭时间 | number | 0 | 否 | 1.0.0 |

<Title>默认效果</Title>

```html
<Loading
      type="refresh"
      visible
></Loading>
```

<Title>加载中</Title>

```html
<Loading
      type="loading"
      visible
></Loading>
```