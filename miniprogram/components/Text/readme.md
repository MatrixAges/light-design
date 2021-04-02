<Description>
      <Text type='desc'>
           文字用来提供统一标准的文字内容，她是 span/text 的加强版。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>承载任何文字内容。</li>
            <li>替代 p 标签，表示段落。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| p | 段落 | boolean | false | 否 | 1.0.0 |
| b | 粗体 | boolean | false | 否 | 1.0.0 |
| i | 斜体 | boolean | false | 否 | 1.0.0 |
| del | 删除线 | boolean | false | 否 | 1.0.0 |
| h1 | h1 | boolean | false | 否 | 1.0.0 |
| h2 | h2 | boolean | false | 否 | 1.0.0 |
| h3 | h3 | boolean | false | 否 | 1.0.0 |
| h4 | h4 | boolean | false | 否 | 1.0.0 |
| h5 | h5 | boolean | false | 否 | 1.0.0 |
| h6 | h6 | boolean | false | 否 | 1.0.0 |
| h7 | h7 | boolean | false | 否 | 1.0.0 |
| quote | 引用 | boolean | false | 否 | 1.0.0 |
| success | 成功 | boolean | false | 否 | 1.0.0 |
| warning | 警告 | boolean | false | 否 | 1.0.0 |
| error | 错误 | boolean | false | 否 | 1.0.0 |
| color | 颜色 | string | '' | 否 | 1.0.0 |
| fontSize | 字体大小 | string | '' | 否 | 1.0.0 |
| textAlign | 文字对齐 | string | '' | 否 | 1.0.0 |
| style | 样式 | string | '' | 否 | 1.0.0 |
| lineClamp | 换行省略 | string | '' | 否 | 1.0.0 |

<Title>标题</Title>

```html
<Text h7>This is the way.</Text>
<Text h6>This is the way.</Text>
<Text h5>This is the way.</Text>
<Text h4>This is the way.</Text>
<Text h3>This is the way.</Text>
<Text h2>This is the way.</Text>
<Text h1>This is the way.</Text>
```

<Title>段落</Title>

```html
<Text p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
<Text p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

<Title>换行省略</Title>

```html
<Text
      p
      lineClamp="{{1}}"
>lineClamp = 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
<Text
      p
      lineClamp="{{2}}"
>lineClamp = 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

<Title>粗体</Title>

```html
<Text b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

<Title>斜体</Title>

```html
<Text i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

<Title>引用</Title>

```html
<Text quote>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>成功</Title>

```html
<Text success>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>警告</Title>

```html
<Text warning>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>错误</Title>

```html
<Text error>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>删除线</Title>

```html
<Text del>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>设置颜色</Title>

```html
<Text color="purple">巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

<Title>文字对齐</Title>

```html
<Text textAlign="center">人生是开放游戏</Text>
```