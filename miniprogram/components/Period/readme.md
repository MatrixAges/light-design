| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| title | 标题 | string | '预约上门时间' | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| showTwoHours | 两小时以内 | boolean | false | 否 | 1.0.0 |
| timeItems | 时间范围 | Array`<ITime>` | [] | 否 | 1.0.0 |
| days | 天数 | number | 0 | 否 | 1.0.0 |
| startTime | 开始时间 | number | 0 | 否 | 1.0.0 |
| endTime | 结束时间 | number | 0 | 否 | 1.0.0 |
| duration | 时间间隔 | number | 0 | 否 | 1.0.0 |

### [types](#types)

```ts
interface IDate {
	raw: Date
	text: string
}

type ITime = {
      raw: { from: number; to: number }
	text: string
}
```

### [triggerEvents](#triggerEvents)

```ts
onSelectedPeriod:(
      {
            detail: {
                  date,
                  time
            }:{
                  date:Array<IDate>
                  time:Array<ITime>
            }
      }
)=>void
```

### [默认效果](#默认效果)

```html
<Period
      visible="{{visible_default}}"
      days="{{3}}"
      startTime="{{8}}"
      endTime="{{17}}"
      duration="{{2}}"
>
</Period>
```

### [设置日期范围](#设置日期范围)

```html
<Period
      visible="{{visible_default}}"
      days="{{9}}"
      startTime="{{8}}"
      endTime="{{17}}"
      duration="{{2}}"
>
</Period>
```

### [设置时间范围](#设置时间范围)

```html
<Period
      visible="{{visible_startTime}}"
      days="{{3}}"
      startTime="{{9}}"
      endTime="{{18}}"
      duration="{{2}}"
>
</Period>
```

### [直接设置时间](#直接设置时间)

```html
<Period
      visible="{{visible_timeItems}}"
      days="{{3}}"
      timeItems="{{['12:00 - 14:00','14:00 - 16:00','16:00 - 18:00','18:00 - 19:00']}}"
>
</Period>
```

### [两小时以内](#两小时以内)

```html
<Period
      visible="{{visible_showTwoHours}}"
      days="{{3}}"
      startTime="{{8}}"
      endTime="{{17}}"
      duration="{{2}}"
      showTwoHours
>
</Period>
```

### [获取数据](#获取数据)

```html
<Period
      visible="{{visible_onSelectedPeriod}}"
      days="{{3}}"
      startTime="{{8}}"
      endTime="{{17}}"
      duration="{{2}}"
      showTwoHours
      bind:onSelectedPeriod="onSelectedPeriod"
>
</Period>
```

