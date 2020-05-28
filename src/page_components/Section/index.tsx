import React, { Fragment } from 'react'
import styles from './index.less'

interface IProps {
      title: string | React.ReactNode
}

const Index: React.FC<IProps> = (props) => {
      const { title } = props

      return (
            <Fragment>
                  <div className={`${styles._local} w_100 flex justify_center pt_30`}>
                        <section className="section">
                              <h2>{title}</h2>
                              {props.children}
                        </section>
                  </div>
            </Fragment>
      )
}


export default Index