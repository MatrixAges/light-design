const path = require('path')
const { merge } = require('webpack-merge')
const MiniProgramPlugin = require('mini-program-webpack-loader').plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./base')

const resolve = (file) => path.resolve(__dirname, '../', file)

global.context = resolve('miniprogram')

module.exports = merge(baseConfig, {
	context: global.context,
	entry: resolve('miniprogram/app.json'),
	output: {
		path: resolve('dist')
	},
	plugins: [
		process.env.NODE_ENV === 'production' ? '' : new CleanWebpackPlugin(),
		new MiniProgramPlugin({
			extfile: false
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: resolve('miniprogram/image'),
					to: resolve('dist/image')
				},
				{
					from: resolve('miniprogram/sitemap.json'),
					to: resolve('dist/sitemap.json')
				}
			]
		})
	]
})
