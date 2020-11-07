const path = require('path')
const webpack = require('webpack')
const EntryExtractPlugin = require('./entry-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	mode: process.env.NODE_ENV,
	devtool: isProd ? 'none' : 'cheap-source-map',
	entry: {
		app: path.resolve(__dirname, 'miniprogram/app.ts')
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			}
		],
		rules: [ { test: /\.ts$/, loader: 'ts-loader' } ]
	},
	plugins: [
		new EntryExtractPlugin(),
		new MiniCssExtractPlugin({ filename: '[name].wxss' }),
		new webpack.BannerPlugin({
			banner:
				'const commons = require("./commons");\nconst runtime = require("./runtime");',
			raw: true,
			include: 'app.js'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					name: 'commons',
					minSize: 0,
					maxSize: 0,
					minChunks: 2
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}
	}
}
