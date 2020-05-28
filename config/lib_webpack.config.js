const path = require('path')
const glob = require('glob')
const isWsl = require('is-wsl')
const TerserPlugin = require('terser-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { appComponents } = require('./paths')

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const getComponents = (path) => {
	const files = glob.sync(path)

	let entry = {}

	files.map((item) => {
		const array_package_path = item.split('/')
		const package_name = array_package_path[array_package_path.length - 2]

		entry[package_name] = item
	})

	return entry
}

module.exports = [
	{
		mode: 'production',
		entry: getComponents(path.resolve(__dirname, '../src/components/**/index.tsx')),
		target: 'web',
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: [
						{
							loader: 'babel-loader'
						}
					],
					exclude: /node_modules/
				},
				{
					test: /\.(css|less)$/,
					use: [
						{ loader: 'style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						{
							loader: 'less-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},
		externals: {
			react: 'react'
		},
		output: {
			filename: '[name]/index.js',
			path: appComponents,
			libraryTarget: 'commonjs2'
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						parse: {
							ecma: 8
						},
						compress: {
							ecma: 5,
							warnings: false,
							comparisons: false,
							inline: 2
						},
						mangle: {
							safari10: true
						},
						keep_classnames: false,
						keep_fnames: false,
						output: {
							ecma: 5,
							comments: false,
							ascii_only: true
						}
					},
					parallel: !isWsl,
					cache: true,
					sourceMap: false
				}),
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						parser: safePostCssParser,
						map: false
					}
				})
			]
		}
	}
]
