import React, { Fragment, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LazyComponent from '@/page_components/LazyComponent'
import App from './App'

interface IRouterConfig {
	path: string
	component: any
	exact?: boolean
}

const router_config: Array<IRouterConfig> = [
	{
		path: '/',
		component: App,
		exact: true
	},
	{
		path: '/Modal',
		component: lazy(() => import('./pages/Modal'))
	},
	{
		path: '/Dialog',
		component: lazy(() => import('./pages/Dialog'))
	},
	{
		path: '/DialogQueue',
		component: lazy(() => import('./pages/DialogQueue'))
	},
	{
		path: '/Card',
		component: lazy(() => import('./pages/Card'))
	},
	{
		path: '/Section',
		component: lazy(() => import('./pages/Section'))
	},
	{
		path: '/Loading',
		component: lazy(() => import('./pages/Loading'))
	},
	{
		path: '/ActionSheet',
		component: lazy(() => import('./pages/ActionSheet'))
	}
]

const RouterConfig: React.FC = () => {
	return (
		<Fragment>
			<Switch>
				{router_config.map(
					(item, index) =>
						item.exact ? (
							<Route
								path={item.path}
								component={item.component}
								key={index}
								exact
							/>
						) : (
							<Route
								path={item.path}
								component={LazyComponent(item.component)}
								key={index}
							/>
						)
				)}
				<Redirect from='/*' to='/' />
			</Switch>
		</Fragment>
	)
}

export default RouterConfig
