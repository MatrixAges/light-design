| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| width | 宽度 | string | '100%' | 否 | 1.0.0 |
| padding | 内边距 | string | '' | 否 | 1.0.0 |
| margin | 外边距 | string | '' | 否 | 1.0.0 |
| radius | 圆角 | number | 0 | 否 | 1.0.0 |
| fontSize | 文字排版 | number | 30 | 否 | 1.0.0 |
| color | 字体颜色 | string | 'black' | 否 | 1.0.0 |
| bgColor | 背景颜色 | string | '' | 否 | 1.0.0 |
| textAlign | 文字排版 | string | '' | 否 | 1.0.0 |
| bordered | 边框 | boolean | false | 否 | 1.0.0 |
| shadow | 阴影 | boolean | false | 否 | 1.0.0 |
| style | 自定义样式 | string | '' | 否 | 1.0.0 |

### [默认效果](#默认效果)

```html
<Card
      title="标题"
      width="100%"
      padding="48rpx"
      radius="{{12}}"
      bordered
>
      南山经之首曰䧿山。其首曰招摇之山，临于西海之上，多桂，多金玉。有草焉，其状如韭而青华，其名曰祝馀，食之不饥。有木焉，其状如榖而黑理，其华四照。其名曰迷榖，佩之不迷。有兽焉，其状如禺而白耳，伏行人走，其名曰狌狌，食之善走。丽麂之水出焉，而西流注于海，其中多育沛，佩之无瘕疾。
</Card>
```

### [设置样式](#设置样式)

```html
<Card
      title="标题"
      width="100%"
      padding="48rpx"
      radius="{{12}}"
      fontSize="{{26}}"
      textAlign="justify"
      bgColor="black"
      color="white"
>
      <text
            style="margin-bottom: 20rpx;">西山经华山之首，曰钱来之山，其上多松，其下多洗石。有兽焉，其状如羊而马尾，名曰羬羊，其脂可以已腊。</text>
      <text
            style="margin-bottom: 20rpx;">西四十五里，曰松果之山。濩水出焉，北流注于渭，其中多铜。有鸟焉，其名曰䳋渠，其状如山鸡，黑身赤足，可以已[月暴]。</text>
      <text>又西六十里，曰太华之山，削成而四方，其高五千仞，其广十里，鸟兽莫居。有蛇焉，名曰肥（虫遗），六足四翼，见则天下大旱。</text>
</Card>
```

### [悬浮阴影](#悬浮阴影)

```html
<Card
      title="标题"
      width="100%"
      padding="48rpx"
      radius="{{24}}"
      shadow
>
      《中山经》薄山之首，曰甘枣之山。共水出焉，而西流注于河。其上多杻木，其下有草焉，葵本而杏叶，黄华而荚实，名曰箨，可以已懵。有兽焉，其状如囗鼠而文题，其名曰㔮，食之已瘿。
</Card>
```