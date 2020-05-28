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
		attribute: 'list',
		type: 'array',
		default: '[]',
		is_required: '是',
		description: '弹窗队列数据'
	},
	{
		attribute: 'visible',
		type: 'boolean',
		default: 'false',
		is_required: '是',
		description: '是否显示弹窗队列'
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
		attribute: 'bind:onNext',
		type: 'method',
		default: '',
		is_required: '否',
		description: 'onNext方法，点击下一个时触发，抛出数据项当前数据项'
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
		value: 'rank',
		description: '排序值，值越大越靠前'
	},
	{
		value: 'title',
		description: '弹窗标题'
	},
	{
		value: 'imgSrc',
		description: '弹窗图片，图片宽:高 = 4:5'
	},
	{
		value: 'target',
		description: '跳转类型，同navigator的target'
	},
	{
		value: 'url',
		description: '跳转链接，同navigator的url'
	},
	{
		value: 'appId',
		description: 'app-id，同navigator的app-id，仅当target="miniProgram"有效'
	},
	{
		value: 'version',
		description: '版本，同navigator的version，仅当target="miniProgram"有效'
	},
	{
		value: 'path',
		description: '路径，同navigator的path，仅当target="miniProgram"有效'
	},
	{
		value: 'daily',
		description: '是否为每日弹窗，当daily为true时，duration数组元素格式必须为 18:00:00'
	},
	{
		value: 'durations',
		description: '触发时间数组'
	},
	{
		value: 'durations startTime',
		description: '开始时间，当daily为false时，格式必须为 2020/8/1 00:00:00'
	},
	{
		value: 'durations endTime',
		description: '结束时间，当daily为false时，格式必须为 2020/8/1 00:00:00'
	}
]

const Index: React.FC = () => {
	return (
		<Container>
			<div className={styles._local}>
				<div className='title_wrap w_100 border_box flex justify_center'>
					<div className='title width_index_body flex flex_column'>
						<h1>DialogQueue</h1>
						<span className='description black'>
							弹窗队列:根据优先级依次展示多个弹窗，支持后台配置模式，支持多个弹窗多个时间段的配置。
						</span>
					</div>
				</div>
				<Section title='Usage'>
					<div className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'>
						<Highlight language='javascriptreact'>
							{`<DialogQueuing
      visible="{{true}}"
      list="{{list}}"
></DialogQueuing>`}
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
