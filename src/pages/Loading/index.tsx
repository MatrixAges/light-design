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
		attribute: 'visible',
		type: 'boolean',
		default: 'false',
		is_required: '是',
		description: '是否显示Loading'
	},
	{
		attribute: 'zIndex',
		type: 'number',
		default: '100',
		is_required: '否',
		description: '层级高度'
	},
	{
		attribute: 'maskVisible',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否显示蒙层'
	},
	{
		attribute: 'bind:onShow',
		type: 'method',
		default: '',
		is_required: '否',
		description: 'onShow方法，当使用this.selectComponent(#element_id).onShow()时触发'
	},
	{
		attribute: 'bind:onClose',
		type: 'method',
		default: '',
		is_required: '否',
		description: 'onClose方法，当使用this.selectComponent(#element_id).onClose()时触发'
	}
]

const Index: React.FC = () => {
	return (
		<Container>
			<div className={styles._local}>
				<div className='title_wrap w_100 border_box flex justify_center'>
					<div className='title width_index_body flex flex_column'>
						<h1>Loading</h1>
						<span className='description black'>
							等待:页面切换，加载数据时使用。基于CSS3的clip-rect属性实现，动画流畅，不需要lottie to
							js等库支持，灵感来源于“耐克小程序”的loading动效。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<Loading
      visible="{{visible_showMask}}"
      maskVisible="{{true}}"
></Loading>`}
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
