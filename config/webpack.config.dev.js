const path = require('path')
const merge = require('webpack-merge')
const utils = require('./utils')
const base = require('./webpack.config.base')

module.exports = merge(base, {
	plugins: [
		// 此处可以添加dev模式需要增加的plugins
	]
})
