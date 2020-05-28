import React, { Fragment } from 'react'
import styles from './index.less'
import logo from '@/assets/images/logo_main.svg'

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={`${styles._local} w_100vw h_100vh border_box fixed flex flex_column justify_center align_center`}>
                        <img className='logo mb_10' src={logo} alt="logo" />
                        <span className='fontsize_24'>Loading</span>
                  </div>
            </Fragment>
      )
}


export default Index