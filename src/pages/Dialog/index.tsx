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
		attribute: 'custom',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否自定义弹窗内容'
	},
	{
		attribute: 'visible',
		type: 'boolean',
		default: 'false',
		is_required: '是',
		description: '是否显示弹层'
	},
	{
		attribute: 'footerVisible',
		type: 'boolean',
		default: 'true',
		is_required: '否',
		description: '是否显示底部操作栏'
	},
	{
		attribute: 'closeVisible',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否显示右上角关闭图标'
	},
	{
		attribute: 'bottom',
		type: 'boolean',
		default: 'false',
		is_required: '否',
		description: '是否从底部弹出'
	},
	{
		attribute: 'zIndex',
		type: 'number',
		default: '100',
		is_required: '否',
		description: '层级高度'
	},
	{
		attribute: 'title',
		type: 'string',
		default: '提示',
		is_required: '否',
		description: '弹窗标题'
	},
	{
		attribute: 'okText',
		type: 'string',
		default: '确定',
		is_required: '否',
		description: '确定按钮的文字'
	},
	{
		attribute: 'cancelText',
		type: 'string',
		default: '取消',
		is_required: '否',
		description: '取消按钮的文字'
	},
	{
		attribute: 'closeVisible',
		type: 'boolean',
		default: 'true',
		is_required: '否',
		description: '是否显示取消按钮'
	},
	{
		attribute: 'maskVisible',
		type: 'boolean',
		default: 'true',
		is_required: '否',
		description: '是否显示蒙层'
	},
	{
		attribute: 'maskClosable',
		type: 'boolean',
		default: 'true',
		is_required: '否',
		description: '点击蒙层关闭'
	},
	{
		attribute: 'bodyStyle',
		type: 'string',
		default: '',
		is_required: '否',
		description: '自定义弹窗样式'
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
		attribute: 'bind:onOk',
		type: 'method',
		default: '',
		is_required: '否',
		description: 'onOk方法，点击确定按钮时触发'
	}
]

const Index: React.FC = () => {
	return (
		<Container>
			<div className={styles._local}>
				<div className='title_wrap w_100 border_box flex justify_center'>
					<div className='title width_index_body flex flex_column'>
						<h1>Dialog</h1>
						<span className='description black'>
							对话框:展示提示信息，提供交互面板，或是承载数据。对话框是交互组件当中最常见的，所以对于它，应该有严格的标准，严格遵守“一致”、“实用”、“简约”的设计准则，开发者在使用该组件的过程中也不能偏离上述“三大规则”。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<Dialoging
      visible="{{visible_default}}"
      title="警告"
>
      确认删除改商品？
</Dialoging>`}
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
