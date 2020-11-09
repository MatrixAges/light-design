const webpack = require('webpack')
const baseResolve = require('./resolve')
const baseLoaders = require('./loaders')

module.exports = {
	mode: 'development',
	target: 'node',
	devtool: false,
	watchOptions: {
		ignored: /node_modules|dist/,
		poll: 1000
	},
	resolve: baseResolve,
	module: { rules: baseLoaders },
	optimization: {
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
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'development')
		})
	]
}
