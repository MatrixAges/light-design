const path = require('path')

const is_dev = process.env.NODE_ENV === 'development'
const resolve = (file) => path.resolve(__dirname, '../', file)
const paths = {
	dist: resolve('dist'),
	node_modules: resolve('node_modules'),
	miniprogram: resolve('miniprogram'),
	app_json: resolve('miniprogram/app.json'),
	components: resolve('miniprogram/components'),
	root: path.resolve(__dirname, '.')
}

module.exports = {
	is_dev,
	resolve,
	paths
}
