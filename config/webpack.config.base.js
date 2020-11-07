const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniPlugin = require('mini-program-webpack-loader').plugin
const Yargs = require('yargs')
const Dotenv = require('dotenv-webpack')
const utils = require('./utils')
const mode = process.env.NODE_ENV

const fileLoader = (name) => ({
	loader: 'file-loader',
	options: {
		publicPath: '',
		context: path.resolve(__dirname, utils.resolve('src')),
		name
	}
})

module.exports = {
	// 关闭devtool，development模式下会编译成eval模式，小程序不支持
	devtool: false,
	// 这里配置的是多个情况，单个也可以直接配置一个入口即可
	entry: [
		path.resolve(__dirname, utils.resolve('src/app.json'))
		// path.resolve(__dirname, utils.resolve('src/plugin/plugin.json'))
	],
	output: {
		path: path.resolve(__dirname, utils.resolve('dist'))
	},
	resolve: {
		// 你可以在 json wxml wxss scss 中使用这里配置的 alias
		alias: {
			'@': path.resolve(__dirname, utils.resolve('src')),
			src: path.resolve(__dirname, utils.resolve('src')),
			pages: path.resolve(__dirname, utils.resolve('src/pages')),
			utils: path.resolve(__dirname, utils.resolve('src/utils')),
			components: path.resolve(__dirname, utils.resolve('src/components'))
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, utils.resolve('src/icons')),
				to: path.resolve(__dirname, utils.resolve('dist/icons'))
			}
		]),
		new MiniPlugin(
			{
				// extfile: true,
				// setSubPackageCacheGroup
			}
		),
		new Dotenv({
			path: path.resolve(
				__dirname,
				utils.resolve(
					`.env${mode && mode !== 'none' && mode !== '' ? `.${mode}` : ''}`
				)
			)
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, utils.resolve('src')),
				exclude: path.resolve(__dirname, utils.resolve('node_modules')),
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true // cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
						}
					},
					{
						loader: 'eslint-loader',
						options: {
							formatter: require('eslint-friendly-formatter')
						}
					}
				]
			},
			{
				test: /.wxs$/,
				use: [
					fileLoader('[path][name].[ext]'),
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true // cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
						}
					},
					{
						loader: 'eslint-loader',
						options: {
							formatter: require('eslint-friendly-formatter')
						}
					},
					'mini-program-webpack-loader'
				]
			},
			{
				test: /.wxml/,
				use: [ fileLoader('[path][name].[ext]'), 'mini-program-webpack-loader' ]
			},
			{
				test: /\.json/,
				type: 'javascript/auto',
				use: [ fileLoader('[path][name].[ext]'), 'mini-program-webpack-loader' ]
			},
			{
				test: /\.wxss$/,
				use: [ fileLoader('[path][name].[ext]'), 'mini-program-webpack-loader' ]
			},
			{
				test: /\.less$/,
				use: [ fileLoader('[path][name].wxss'), 'postcss-loader', 'less-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ fileLoader('[path][name].wxss'), 'postcss-loader', 'sass-loader' ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				include: /src/,
				use: fileLoader('[path][name].[ext]')
			}
		]
	},
	watchOptions: {
		ignored: [ /node_modules/, /dist/ ]
	}
}
