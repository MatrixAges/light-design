const path = require('path')
const MiniProgramPlugin = require('mini-program-webpack-loader').plugin
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('./utils')

module.exports = [
	new IgnoreEmitPlugin('.DS_Store'),
	new MiniProgramPlugin({
		extfile: false
	}),
	new CopyWebpackPlugin({
		patterns: [
			// {
			// 	from: resolve('miniprogram/**/*.(svg|png|jpg|jpeg|gif)'),
			// 	to: '[path][name].[ext]'
			// },
			{
				from: path.posix.join(
					path.resolve(__dirname, '../miniprogram').replace(/\\/g, '/'),
					'/**/*.(svg|png|jpg|jpeg|gif)'
				),
				to: '[path][name].[ext]'
			},
			{
				from: resolve('miniprogram/sitemap.json'),
				to: resolve('dist/sitemap.json')
			}
		]
	})
]
