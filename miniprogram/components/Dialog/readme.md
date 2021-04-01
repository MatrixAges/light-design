<Description>
      <Text type='desc'>
           对话框提供对话般的交互体验，她是用户操作的二次确认，确保用户不会因为误操作而导致不可逆的后果。她由操作按钮、内容区和标题组成。
      </Text>
      <Text type='title'>使用场景</Text>
      <ul>
            <li>用于对操作进行二次确认，确保操作的准确性。</li>
            <li>展示详细的数据信息，并提供操作。</li>
            <li>提供便携的用户表单输入项。</li>
      </ul>
</Description>

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| - | - | - | - | - | - |
| visible | 是否可见 | boolean | false | 否 | 1.0.0 |
| title | 标题 | string | '' | 否 | 1.0.0 |
| custom | 自定义 | boolean | false | 否 | 1.0.0 |
| confirmLoading | 加载中 | boolean | false | 否 | 1.0.0 |
| footerVisible | 显示底栏 | boolean | true | 否 | 1.0.0 |
| closeVisible | 显示关闭 | boolean | false | 否 | 1.0.0 |
| bottom | 再底部 | boolean | false | 否 | 1.0.0 |
| zIndex | 层级 | number | 100 | 否 | 1.0.0 |
| okText | 确定按钮文字 | string | '确定' | 否 | 1.0.0 |
| cancelText | 取消按钮文字 | string | '取消' | 否 | 1.0.0 |
| cancelVisible | 显示取消 | boolean | true | 否 | 1.0.0 |
| maskVisible | 显示取消 | boolean | true | 否 | 1.0.0 |
| maskClosable | 显示取消 | boolean | true | 否 | 1.0.0 |
| bodyStyle | 内容样式 | string | '' | 否 | 1.0.0 |

<Title>triggerEvents</Title>

```typescript
// 展示时触发
onShow:()=>void

// 隐藏时触发
onClose:()=>void

// 点击确认时触发
onOk:()=>void
```

<Title>默认效果</Title>

```html
<Dialog visible="{{visible_default}}">
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>没有标题</Title>

```html
<Dialog 
      visible="{{visible_no_title}}"  
      title=""
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>loading</Title>

```html
<Dialog 
      visible="{{visible_confirmLoading}}"  
      confirmLoading
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>自定义内容</Title>

```html
<Dialog 
      visible="{{visible_custom}}"  
      custom
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>底部弹出</Title>

```html
<Dialog 
      visible="{{visible_bottom}}"  
      bottom
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>隐藏取消</Title>

```html
<Dialog 
      visible="{{visible_cancelVisible}}"  
      cancelVisible="{{false}}"
      custom
>
      <view
            class="w_100 border_box text_center"
            style="padding: 240rpx 0;background-color: whitesmoke;"
      >我们的目标是：星辰大海！</view>
</Dialog>
```

<Title>显示关闭</Title>

```html
<Dialog 
      visible="{{visible_cancelVisible}}"  
      custom
      closeVisible
>
      <view
            class="w_100 border_box text_center"
            style="padding: 240rpx 0;background-color: whitesmoke;"
      >我们的目标是：星辰大海！</view>
</Dialog>
```

<Title>隐藏遮罩</Title>

```html
<Dialog 
      visible="{{visible_maskVisible}}"  
      maskVisible="{{false}}"
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>点击遮罩关闭</Title>

```html
<Dialog 
      visible="{{visible_maskClosable}}"  
      maskVisible="{{false}}"
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>自定义样式</Title>

```html
<Dialog 
      visible="{{visible_bodyStyle}}"
      bodyStyle="padding:200rpx 0;margin-top:40rpx;border-radius:0;background-color:whitesmoke;color:black"
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>确定文字</Title>

```html
<Dialog 
      visible="{{visible_okText}}"
      okText="是的哟～"
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>取消文字</Title>

```html
<Dialog 
      visible="{{visible_cancelText}}"
      okText="～bu bu～"
>
      结果并不重要，重要的是过程？
</Dialog>
```

<Title>slot</Title>

```html
<Dialog 
      visible="{{visible_slot}}"
>
      结果并不重要，重要的是过程？
      <navigator
            class="w_100 h_100 flex justify_center align_center bg_black white"
            slot="confirm"
            url="/pages/index/index"
      >去首页</navigator>
</Dialog>
```