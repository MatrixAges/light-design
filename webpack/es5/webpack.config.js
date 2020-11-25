const { paths } = require('../utils')
const resolve = require('../resolve')
const loaders = require('./loaders')
const plugins = require('./plugins')

module.exports = {
	context: paths.miniprogram,
	entry: paths.app_json,
	output: { path: paths.components_es5 },
	resolve: resolve,
	module: { rules: loaders },
	plugins: plugins,
	optimization: {
		minimize: false
	}
}
