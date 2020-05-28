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
		attribute: 'position',
		type: 'string',
		default: 'center',
		is_required: '否',
		description: '弹出位置'
	},
	{
		attribute: 'zIndex',
		type: 'number',
		default: '100',
		is_required: '否',
		description: '层级高度'
	},
	{
		attribute: 'duration',
		type: 'number',
		default: '300',
		is_required: '否',
		description: '动画时间'
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
		value: 'center',
		description: '从屏幕中心弹出'
	},
	{
		value: 'top',
		description: '从顶部弹出'
	},
	{
		value: 'bottom',
		description: '从底部弹出'
	},
	{
		value: 'left',
		description: '从左侧弹出'
	},
	{
		value: 'right',
		description: '从右侧弹出'
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
							弹窗蒙版：支持任意形势的弹出层内容，是在Dialog的基础上衍生出的一个组件，满足全场景下的弹层需求。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<Modaling
      visible="{{true}}"
      position="center"
>
      <view class="bg_white p_32 radius_10 border_box">居中显示的内容</view>
</Modaling>`}
						</Highlight>
					</div>
				</Section>
				<Section title='API'>
					<Table columns={columns_index} dataSource={dataSource_index} />
				</Section>
				<Section title='position'>
					<Table columns={columns_mode} dataSource={dataSource_mode} />
				</Section>
			</div>
		</Container>
	)
}

export default Index
