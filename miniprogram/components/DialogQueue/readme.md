| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| list | 数据项 | Array`<List>` | [] | 是 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |

### [types](#types)

```typescript
type List = {
      rank:number
      title:string
      imgSrc: string
	target: string
	url: string
	appId: string
	version: string
	path: string
	daily: boolean
	durations: Array<{
		startTime: string
		endTime: string
	}>
}
```

### [list](#list)

| 值 | 说明 | 版本 |
| - | - | - |
| rank | 排序值 | 1.0.0 |
| title | 弹窗标题 | 1.0.0 |
| imgSrc | 弹窗图片 | 1.0.0 |
| target | 跳转类型 | 1.0.0 |
| url | 跳转链接 | 1.0.0 |
| appId | appId | 1.0.0 |
| version | 版本 | 1.0.0 |
| path | 路径 | 1.0.0 |
| daily | 是否为每日弹窗 | 1.0.0 |
| durations | 弹出时间 | 1.0.0 |

> 当daily为true时，durations中startTime、endTime格式为18:00:00，当daily为false时，durations中startTime、endTime格式为2020/8/1 00:00:00

### [默认效果](#默认效果)

```html
 <DialogQueue
      visible="{{visible_default}}"
      list="{{list}}"
></DialogQueue>
```
