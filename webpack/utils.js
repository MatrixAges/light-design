const fs = require('fs')
const path = require('path')

const is_dev = process.env.NODE_ENV === 'development'
const resolve = (file) => path.resolve(__dirname, '../', file)
const paths = {
	dist: resolve('dist'),
	node_modules: resolve('node_modules'),
	miniprogram: resolve('miniprogram'),
	app_json: resolve('miniprogram/app.json'),
	dist_app_json: resolve('dist/app.json'),
	components: resolve('miniprogram/components'),
	page_components: resolve('miniprogram/page_components'),
	root: path.resolve(__dirname, '.')
}

const copyAppJson = () => {
	fs.copyFile(paths.app_json, paths.dist_app_json, (err) => {
		if (err) console.log(err)
	})
}

module.exports = {
	is_dev,
	paths,
	resolve,
	copyAppJson
}
