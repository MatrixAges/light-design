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
		description: '是否显示弹层'
	},
	{
		attribute: 'title',
		type: 'string',
		default: '',
		is_required: '否',
		description: '标题'
	},
	{
		attribute: 'list',
		type: 'array',
		default: '[]',
		is_required: '是',
		description: '数据项'
	},
	{
		attribute: 'scroll',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否为横向滚动（与vertical属性互斥）'
	},
	{
		attribute: 'vertical',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否为纵向排列（与scroll属性互斥）'
	},
	{
		attribute: 'column',
		type: 'number',
		default: '3',
		is_required: '否',
		description: '列的数量'
	},
	{
		attribute: 'zIndex',
		type: 'number',
		default: '100',
		is_required: '否',
		description: '层级高度'
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
	},
	{
		attribute: 'bind:onOption',
		type: 'method',
		default: '',
		is_required: '否',
		description: 'onOption方法，点击选项时触发，抛出数据项下标index'
	}
]

const columns_mode = [
	{
		title: '值',
		key: 'value'
	},
	{
		title: '说明',
		key: 'description'
	}
]

const dataSource_mode = [
	{
		value: 'name',
		description: '名称'
	},
	{
		value: 'icon',
		description: '图标'
	}
]

const Index: React.FC = () => {
	return (
		<Container>
			<div className={styles._local}>
				<div className='title_wrap w_100 border_box flex justify_center'>
					<div className='title width_index_body flex flex_column'>
						<h1>Modal</h1>
						<span className='description black'>
							抽屉:从底部弹出的选项列表，用于提供一些隐藏操作。区别于小程序原生的actionSheet，该组件更加美观且在使用上更灵活
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<ActionSheeting
      visible="{{visible_default}}"
      list="{{list}}"
      bind:onOption="onAction"
></ActionSheeting>`}
						</Highlight>
					</div>
				</Section>
				<Section title='API'>
					<Table columns={columns_index} dataSource={dataSource_index} />
				</Section>
				<Section title='list'>
					<Table columns={columns_mode} dataSource={dataSource_mode} />
				</Section>
			</div>
		</Container>
	)
}

export default Index
