const { paths, fileLoader } = require('../utils')

module.exports = [
	{
		test: /\.ts$/,
		exclude: paths.node_modules,
		use: [ 'cache-loader', 'ts-loader?transpileOnly' ]
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
		use: [ fileLoader('[path][name].wxss'), 'less-loader' ]
	},
	{
		test: /.wxs$/,
		use: [ fileLoader('[path][name].[ext]'), 'babel-loader', 'mini-program-webpack-loader' ]
	},
	{
		test: /\.json$/,
		type: 'javascript/auto',
		use: [ fileLoader('[path][name].[ext]') ]
	}
]
