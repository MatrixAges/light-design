const path = require('path')
const glob = require('glob')
const fs = require('fs-extra')
const webpack = require('webpack')
const config = require('../config/lib_webpack.config')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const { appComponents, appComponentsSource } = require('../config/paths')

const build = () => {
	fs.emptyDirSync(appComponents)

	console.log('building components...')

	const compiler = webpack(config)

	return new Promise((resolve, reject) => {
		compiler.run((err, stats) => {
			let messages

			if (err) {
				if (!err.message) {
					return reject(err)
				}

				messages = formatWebpackMessages({
					errors: [ err.message ],
					warnings: []
				})
			}
			else {
				messages = formatWebpackMessages(stats.toJson({ all: false, warnings: true, errors: true }))
			}

			if (messages.errors.length) {
				if (messages.errors.length > 1) {
					messages.errors.length = 1
				}
				return reject(new Error(messages.errors.join('\n\n')))
			}

			return resolve({
				stats,
				warnings: messages.warnings
			})
		})
	})
}

const copy = () => {
	// fs.copyFileSync(appComponentsSource + '/index.js', appComponents + '/index.js')

	const copyFiles = (name, target_name) => {
		const files = glob.sync(path.join(appComponentsSource, `/**/${name}`))

		files.map((item) => {
			const array_package_path = item.split('/')
			const package_name = array_package_path[array_package_path.length - 2]

			fs.copyFileSync(item, `${appComponents}/${package_name}/${target_name}`)
		})
	}

	copyFiles('index.d.ts', 'index.d.ts')
	copyFiles('_package.json', 'package.json')
	copyFiles('readme.md', 'readme.md')
}

build()
	.then((res) => {
		if (res) {
			copy()

			console.log('components building success!')
		}
	})
	.catch((err) => {
		console.log(err)
	})
