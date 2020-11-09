const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')

module.exports = {
	mode: 'production',
	target: 'node',
	devtool: false,
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
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
		})
	]
}
