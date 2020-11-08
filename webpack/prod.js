const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const baseResolve = require('./resolve')
const baseLoaders = require('./loaders')

module.exports = {
	mode: 'production',
	target: 'node',
	devtool: false,
	resolve: baseResolve,
	module: { rules: baseLoaders },
	optimization: {
		minimize: true,
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
		})
	]
}
