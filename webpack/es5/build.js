const glob = require('glob')
const child_process = require('child_process')
const { paths } = require('../utils')

const files = glob.sync(paths.components + '/**/*.ts')

console.log(files);

// files.map(item => {
// 	const array_package_path = item.split('/')
// 	const package_name = array_package_path[array_package_path.length - 2]

// 	entry[package_name] = item
// })

// child_process.execSync('tsc ')
