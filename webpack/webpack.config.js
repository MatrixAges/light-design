const MiniProgramPlugin = require('mini-program-webpack-loader').plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const { is_dev, resolve, paths } = require('./utils')
const devConfig = require('./dev')
const prodConfig = require('./prod')

global.context = paths.miniprogram

module.exports = merge(is_dev ? devConfig : prodConfig, {
	context: paths.miniprogram,
	entry: paths.app_json,
	output: { path: paths.dist },
	plugins: [
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
