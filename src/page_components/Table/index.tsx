import React, { Fragment } from 'react'
import styles from './index.less'

interface IColumns {
      title: string,
      key: string
}

interface IDataSource {
      [key: string]: number | string | boolean
}

interface IProps {
      columns: Array<IColumns>,
      dataSource: Array<IDataSource>
}

const Index: React.FC<IProps> = (props) => {

      const { columns, dataSource } = props

      const Th: React.FC = () => {
            return (
                  <Fragment>
                        {
                              columns.map(item => (
                                    <td key={item.key}>{item.title}</td>
                              ))
                        }
                  </Fragment>
            )
      }

      const Tbody: React.FC = () => {
            return (
                  <Fragment>
                        {
                              dataSource.map((item, index) => (
                                    <tr key={index}>
                                          {
                                                Object.keys(item).map(key => {
                                                      return (
                                                            <td key={key}>{String(item[key])}</td>
                                                      )
                                                })
                                          }
                                    </tr>
                              ))
                        }
                  </Fragment>
            )
      }

      return (
            <Fragment>
                  <div className={styles._local}>
                        <table>
                              <thead>
                                    <tr>
                                          <Th></Th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <Tbody></Tbody>
                              </tbody>
                        </table>
                  </div>
            </Fragment>
      )
}

export default Index