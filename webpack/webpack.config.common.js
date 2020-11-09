const MiniProgramPlugin = require('mini-program-webpack-loader').plugin;
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const {is_dev, resolve, paths} = require('./utils');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

global.context = paths.miniprogram;

module.exports = merge(is_dev ? devConfig : prodConfig, {
      context: paths.miniprogram,
      entry: paths.app_json,
      output: {path: paths.dist},
      plugins: [
            new MiniProgramPlugin({
                  extfile: false
            }),
            new IgnoreEmitPlugin('.DS_Store'),
            new CopyWebpackPlugin({
                  patterns: [
                        {
                              from: resolve('miniprogram/image'),
                              to: resolve('dist/image')
                        },
                        {
                              from: resolve('miniprogram/sitemap.json'),
                              to: resolve('dist/sitemap.json')
                        }
                  ]
            })
      ]
});
