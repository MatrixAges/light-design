const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniProgramPlugin = require('mini-program-webpack-loader').plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const { resolve } = require('../utils')

module.exports = [
	new IgnoreEmitPlugin('.DS_Store'),
	new CleanWebpackPlugin(),
	new MiniProgramPlugin({
		extfile: false
	}),
	new CopyWebpackPlugin({
		patterns: [
			{
				from: resolve('miniprogram/components/**/*/package.json')
                  },
                  {
				from: resolve('miniprogram/components/**/*/readme.md')
			}
		]
	}),
	new FileManagerPlugin({
		runTasksInSeries: true,
		events: {
			onEnd: {
				delete: [
					resolve('miniprogram/components_es5/pages'),
					resolve('miniprogram/components_es5/page_components'),
					resolve('miniprogram/components_es5/app.js'),
					resolve('miniprogram/components_es5/app.json'),
					resolve('miniprogram/components_es5/app.wxss'),
					resolve('miniprogram/components_es5/webpack-require.js'),
					resolve('miniprogram/components_es5/**/*.js')
                        ]
			}
		}
	})
]
