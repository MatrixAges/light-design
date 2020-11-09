const { paths } = require('./utils')

module.exports = {
	extensions: [ '.ts', '.js', '.json' ],
	alias: {
		components: paths.components
	}
}
