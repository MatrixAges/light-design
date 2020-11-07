const path = require('path')

const fileLoader = (name) => ({
	loader: 'file-loader',
	options: {
		publicPath: '',
		context: global.context || path.resolve(__dirname, '.'),
		name
	}
})

module.exports = [
	{
		test: /\.ts$/,
		exclude: path.resolve(__dirname, '../node_modules'),
		use: [
			'cache-loader',
			'ts-loader'
		]
	},
	{
		test: /.wxml/,
		use: [ fileLoader('[path][name].[ext]'), 'mini-program-webpack-loader' ]
	},
	{
		test: /\.wxss$/,
		use: [ fileLoader('[path][name].[ext]'), 'mini-program-webpack-loader' ]
	},
	{
		test: /\.less$/,
		use: [
			fileLoader('[path][name].wxss'),
			{
				loader: 'less-loader'
			}
		]
	},
	{
		test: /.wxs$/,
		use: [ fileLoader('[path][name].[ext]'), 'babel-loader', 'mini-program-webpack-loader' ]
	},
	{
		test: /\.json/,
		type: 'javascript/auto',
		use: [ fileLoader('[path][name].[ext]') ]
	},
	{
		test: /\.(png|jpg|gif)$/,
		include: /miniprogram/,
		use: fileLoader('[path][name].[ext]')
	}
]
