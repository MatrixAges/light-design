const threadLoader = require('thread-loader')
const { paths, fileLoader } = require('./utils')

threadLoader.warmup({}, [
	'ts-loader',
      'babel-loader',
      'file-loader',
      'cache-loader',
	'less-loader',
	'mini-program-webpack-loader'
])

module.exports = [
	{
		test: /\.ts$/,
		exclude: paths.node_modules,
		use: [ 'thread-loader', 'cache-loader', 'ts-loader' ]
	},
	{
		test: /.wxml/,
		use: [
			fileLoader('[path][name].[ext]'),
			'mini-program-webpack-loader',
			'thread-loader'
		]
	},
	{
		test: /\.wxss$/,
		use: [
			fileLoader('[path][name].[ext]'),
			'mini-program-webpack-loader',
			'thread-loader'
		]
	},
	{
		test: /\.less$/,
		use: [
			fileLoader('[path][name].wxss'),
			{
				loader: 'postcss-loader',
				options: { postcssOptions: { plugins: [ [ 'cssnano' ] ] } }
			},
			'less-loader',
			'thread-loader'
		]
	},
	{
		test: /.wxs$/,
		use: [
			fileLoader('[path][name].[ext]'),
			'babel-loader',
			'mini-program-webpack-loader',
			'thread-loader'
		]
	},
	{
		test: /\.json/,
		type: 'javascript/auto',
		use: [ fileLoader('[path][name].[ext]'), 'thread-loader' ]
	},
	{
		test: /\.(svg|png|jpg|jpeg|gif)$/,
		include: paths.miniprogram,
		use: [ fileLoader('[path][name].[ext]'), 'thread-loader' ]
	}
]
