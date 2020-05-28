import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.less'

interface ILinkItem {
	path: string
	name: string
	description: string
	tags: Array<string>
}

const link_items: Array<ILinkItem> = [
	{
		path: 'Modal',
		name: 'Modal',
		description: '弹窗蒙版：支持任意形势的弹出层内容',
		tags: [ 'motion' ]
	},
	{
		path: 'Dialog',
		name: 'Dialog',
		description: '对话框:展示提示信息，提供交互面板，或是承载数据',
		tags: [ 'motion' ]
	},
	{
		path: 'DialogQueue',
		name: 'DialogQueue',
		description: '弹窗队列:同时展示多个弹窗，多次弹出',
		tags: [ 'motion', 'display' ]
	},
	{
		path: 'Card',
		name: 'Card',
		description: '卡片:通常用来表示一个信息块',
		tags: [ 'display' ]
	},
	{
		path: 'Section',
		name: 'Section',
		description: '段落:语意同HTML5 section标签，表示页面的一个段落',
		tags: [ 'display' ]
	},
	{
		path: 'Loading',
		name: 'Loading',
		description: '等待:页面切换，加载数据时使用',
		tags: [ 'motion' ]
	},
	{
		path: 'ActionSheet',
		name: 'ActionSheet',
		description: '抽屉:从底部弹出的选项列表，用于提供一些隐藏操作',
		tags: [ 'motion' ]
	}
]

const Index: React.FC = () => {
	return (
		<Fragment>
			<div className={styles._local}>
				<div className='link_items w_100 border_box flex flex_column align_center'>
					{link_items.map((item, index) => (
						<Link
							className='link_item morphic border_box flex transition_normal'
							to={item.path}
							key={index}
						>
							<div className='detail border_box flex flex_column justify_between'>
								<div className='flex flex_column'>
									<span className='name color_000 fontsize_32'>
										{item.name}
									</span>
									<span className='description color_aaa fontsize_16'>
										{item.description}
									</span>
								</div>
								<div className='tags flex'>
									{item.tags.map((it) => (
										<div
											className='tag border_box flex align_center'
											key={it}
										>
											<span className='icon flex justify_center align_center'>
												#
											</span>
											<span className='text'>{it}</span>
										</div>
									))}
								</div>
							</div>
							<div className='img_wrap flex justify_center align_center'>
								<img
									className='img'
									src={require(`@/assets/images/img_preview_${item.name}.jpg`)}
									alt='img_preview'
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Fragment>
	)
}

export default Index
