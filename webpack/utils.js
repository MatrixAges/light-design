const path = require('path')

const is_dev = process.env.NODE_ENV === 'development'
const resolve = (file) => path.resolve(__dirname, '../', file)
const paths = {
	miniprogram: resolve('miniprogram'),
	app_json: resolve('miniprogram/app.json'),
	dist: resolve('dist')
}

module.exports = {
	is_dev,
	resolve,
	paths
}
