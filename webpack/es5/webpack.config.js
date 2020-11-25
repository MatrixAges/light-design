const path = require('path')
const glob = require('glob')
const { paths } = require('../utils')
const resolve = require('../resolve')
const loaders = require('./loaders')
const plugins = require('./plugins')

const getComponents = path => {
	const files = glob.sync(path)

	let entry = {}

	files.map(item => {
		const array_package_path = item.split('/')
		const package_name = array_package_path[array_package_path.length - 2]

		entry[package_name] = item
	})

	return entry
}

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
