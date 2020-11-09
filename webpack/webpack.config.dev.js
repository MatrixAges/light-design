const webpack = require('webpack')

module.exports = {
	mode: 'development',
	target: 'node',
	devtool: false,
	watchOptions: {
		ignored: /node_modules|dist/,
		poll: 1000
	},
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
