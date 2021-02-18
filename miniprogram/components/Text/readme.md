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

### [标题](#标题)

```html
<Text h7>This is the way.</Text>
<Text h6>This is the way.</Text>
<Text h5>This is the way.</Text>
<Text h4>This is the way.</Text>
<Text h3>This is the way.</Text>
<Text h2>This is the way.</Text>
<Text h1>This is the way.</Text>
```

### [段落](#段落)

```html
<Text p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
<Text p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

### [换行省略](#换行省略)

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

### [粗体](#粗体)

```html
<Text b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

### [斜体](#斜体)

```html
<Text i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore magna aliqua.</Text>
```

### [引用](#引用)

```html
<Text quote>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [成功](#成功)

```html
<Text success>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [警告](#警告)

```html
<Text warning>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [错误](#错误)

```html
<Text error>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [删除线](#删除线)

```html
<Text del>巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [设置颜色](#设置颜色)

```html
<Text color="purple">巨大的建筑，总是由一木一石叠起来的，我们何妨做做这一木一石呢？我时常做些零碎事，就是为此。</Text>
```

### [文字对齐](#文字对齐)

```html
<Text textAlign="center">人生是开放游戏</Text>
```