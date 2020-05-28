import React, { Fragment } from 'react'
import Highlight from 'react-highlight.js'

interface IProps {
	title: string
	description: string
	image: string
	code: React.ReactNode
}

const Index: React.FC<IProps> = (props) => {
	const { title, description, image, code } = props

	return (
		<Fragment>
			<div className='w_100 border_box flex flex_column'>
				<h4 className='black mb_10'>{title}</h4>
				<div className='black pb_20'>{description}</div>
			</div>
			<div
				className='demo_wrap flex flex_column w_100 border_box'
				style={{ marginBottom: '40px' }}
			>
				<div className='component_wrap w_100 border_box flex bg_whitesmoke'>
					{image}
				</div>
				<div
					className='code_wrap w_100 border_box flex pl_30 pr_30 bg_black'
					style={{ overflowX: 'scroll' }}
				>
					<Highlight language='javascriptreact'>{`${code}`}</Highlight>
				</div>
			</div>
		</Fragment>
	)
}

export default Index
