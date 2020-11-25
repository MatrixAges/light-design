const { merge } = require('webpack-merge')
const resolve = require('./resolve')
const loaders = require('./loaders')
const plugins = require('./plugins')
const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
const { is_dev, paths } = require('./utils')

//@ts-ignore
global.context = paths.miniprogram

module.exports = merge(is_dev ? devConfig : prodConfig, {
	context: paths.miniprogram,
	entry: paths.app_json,
	output: { path: paths.dist },
	resolve: resolve,
	module: { rules: loaders },
	plugins: plugins
})
