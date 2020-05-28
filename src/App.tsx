import React, { Fragment } from 'react'
import RouterConfig from './RouterConfig'
import Header from './page_components/Header'
import Nav from './page_components/Nav'
import './App.less'

const App: React.FC = () => {
      return (
            <Fragment>
                  <Header></Header>
                  <Nav></Nav>
                  <RouterConfig></RouterConfig>
            </Fragment>
      )
}

export default App