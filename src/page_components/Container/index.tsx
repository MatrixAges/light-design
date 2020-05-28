import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { throttle } from '@/utils'
import styles from './index.less'

import icon_close from '@/assets/icons/icon_close.svg'
import icon_backtop from '@/assets/icons/icon_backtop.svg'

const Index: React.FC = (props) => {
      const [state_show_backtop, setStateBacktop] = useState(false)

      let container: HTMLDivElement | null

      const onScrollContainer = throttle(() => {
            if (container) {
                  if (container.scrollTop > 1200) {
                        setStateBacktop(true)
                  } else {
                        setStateBacktop(false)
                  }
            }
      }, 1000)

      const onBacktop = () => {
            if (container) {
                  container.scrollTop = 0
            }
      }

      return (
            <Fragment>
                  <div className={`${styles.component_wrap} w_100vw h_100vh border_box fixed`}>
                        <Link to='/'>
                              <button className={`${styles.btn_close} morphic absolute`}>
                                    <img
                                          className="icon_close"
                                          src={icon_close}
                                          alt="icon_close" />
                              </button>
                        </Link>
                        <button
                              className={`${styles.btn_backtop} ${state_show_backtop ? 'flex' : 'none'} morphic absolute`}
                              onClick={onBacktop}
                        >
                              <img
                                    className="icon_backtop"
                                    src={icon_backtop}
                                    alt="icon_close" />
                        </button>
                        <div
                              className={`${styles.component} w_100 h_100 border_box flex flex_column`}
                              ref={(e) => (container = e)}
                              onScrollCapture={onScrollContainer}
                        >
                              {props.children}
                        </div>
                  </div>
            </Fragment>
      )
}


export default Index