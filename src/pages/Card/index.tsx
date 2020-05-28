import React from 'react'
import Highlight from 'react-highlight.js'
import Container from '@/page_components/Container'
import Table from '@/page_components/Table'
import Section from '@/page_components/Section'
import styles from './index.less'

const columns_index = [
	{
		title: '属性',
		key: 'attribute'
	},
	{
		title: '类型',
		key: 'type'
	},
	{
		title: '默认值',
		key: 'default'
	},
	{
		title: '必填',
		key: 'is_required'
	},
	{
		title: '说明',
		key: 'description'
	}
]

const dataSource_index = [
	{
		attribute: 'bgColor',
		type: 'string',
		default: 'white',
		is_required: '否',
		description: '背景颜色'
	},
	{
		attribute: 'color',
		type: 'string',
		default: 'black',
		is_required: '否',
		description: '字体颜色'
	},
	{
		attribute: 'width',
		type: 'string',
		default: '100%',
		is_required: '否',
		description: '卡片宽度'
	},
	{
		attribute: 'title',
		type: 'string',
		default: '',
		is_required: '否',
		description: '标题'
	}
]

const Index: React.FC = () => {
	return (
		<Container>
			<div className={styles._local}>
				<div className='title_wrap w_100 border_box flex justify_center'>
					<div className='title width_index_body flex flex_column'>
						<h1>Card</h1>
						<span className='description black'>
							卡片:通常用来表示一个信息块。使用通用的Card组件来规约样式，加强页面整体布局和设计的一致性。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<Carding>
      <view
            slot="title"
            style="padding: 24rpx;background-color: var(--color_main);color: white;"
      >自定义标题</view>
      <view class="placeholder_items">
            <view class="placeholder_item"></view>
            <view class="placeholder_item"></view>
            <view class="placeholder_item"></view>
            <view class="placeholder_item"></view>
      </view>
</Carding>`}
						</Highlight>
					</div>
				</Section>
				<Section title='API'>
					<Table columns={columns_index} dataSource={dataSource_index} />
				</Section>
			</div>
		</Container>
	)
}

export default Index
