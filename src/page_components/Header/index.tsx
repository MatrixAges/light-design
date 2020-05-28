import React, { Fragment, useState } from 'react'
import store from 'store'
import styles from './index.less'
import logo from '@/assets/images/logo_main.svg'
import icon_git from '@/assets/icons/icon_git.svg'

const Index: React.FC = () => {
	const [ state_has_shown_intro, setStateHasShownIntro ] = useState(
		store.get('has_shown_intro')
	)

	const hideIntro = () => {
		setStateHasShownIntro(true)

		store.set('has_shown_intro', new Date().valueOf())
	}

	return (
		<Fragment>
			<div className={styles._local}>
				{state_has_shown_intro ? (
					''
				) : (
					<div className='intro_wrap w_100vw h_100vh border_box fixed top_0 z_index_100'>
						<div className='intro w_100 h_100 border_box flex flex_column align_center justify_center'>
							<img className='logo' src={logo} alt='logo' />
							<span className='name'>Light Design</span>
							<span className='slogan'>大道万千，创意至简</span>
							<div className='options_wrap flex'>
								<button
									className='btn_check_components morphic btn flex justify_center align_center'
									onClick={hideIntro}
								>
									开始使用
								</button>
							</div>
						</div>
					</div>
				)}
				<div className='header_wrap flex justify_center'>
					<div className='header flex align_center justify_between'>
						<a
							href='http://192.168.0.46:3000/xjj/light-design/src/master/wxapp/miniprogram/components'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='left flex align_center'>
								<span className='name color_000 mr_20 transition_normal'>
									Light Design
								</span>
							</div>
						</a>
						<div className='flex align_center'>
							<a
								className='icon_wrap morphic flex justify_center align_center'
								href='http://192.168.0.46:3000/xjj/light-design/src/master/wxapp/miniprogram/components'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									className='icon_git'
									src={icon_git}
									alt='icon_git'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Index
