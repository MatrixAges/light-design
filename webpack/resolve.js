const { paths } = require('./utils')

module.exports = {
	extensions: [ '.ts', '.js', '.json' ],
	alias: {
		'@': paths.miniprogram,
		components: paths.components,
		page_components: paths.page_components
	}
}
