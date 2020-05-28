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
						<h1>bgColor</h1>
						<span className='description black'>
							段落:语意同HTML5
							section标签，表示页面的一个段落。段落通常用来表示宽度占屏幕100%的纵向排列的内容，另外，Section的对于文字的表达能力要比Card要好。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<Sectioning
      title="结果"
      bgColor="black"
      color="white"
>
      <view>
            <text>title="Result"</text>
            <text>bgColor="black"</text>
            <text>color="white"</text>
      </view>
</Sectioning>`}
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
