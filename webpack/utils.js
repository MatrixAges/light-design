const path = require('path')

const resolve = (file) => path.resolve(__dirname, '../', file)
const fileLoader = (name) => ({
      loader: 'file-loader',
      options: {
            publicPath: '',
            context: paths.miniprogram || paths.root,
            name
      }
})

const is_dev = process.env.NODE_ENV === 'development'
const paths = {
      dist: resolve('dist'),
      node_modules: resolve('node_modules'),
      miniprogram: resolve('miniprogram'),
      app_json: resolve('miniprogram/app.json'),
      dist_app_json: resolve('dist/app.json'),
      components: resolve('miniprogram/components'),
      page_components: resolve('miniprogram/page_components'),
      components_es5: resolve('miniprogram/components_es5')
}

module.exports = {
      resolve,
      fileLoader,
      is_dev,
      paths
}