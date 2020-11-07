const path = require('path');
const fs = require('fs-extra');
const glob = require("glob");
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

const getComponents = (path) => {
      fs.emptyDirSync('dist');

      const files = glob.sync(path);

      let entry = {};

      files.map((item) => {
            const array_package_path = item.split('/');
            const package_name = array_package_path[array_package_path.length - 2];

            entry[package_name] = item;
      });

      return entry;
};

console.log('--------');
console.log(getComponents(path.resolve(__dirname, 'miniprogram/**/*.ts')));
console.log('--------');

module.exports = {
      mode: process.env.NODE_ENV,
      entry: getComponents(path.resolve(__dirname, '*.ts')),
      output: {
            filename: '[name].js',
            path: path.resolve(process.cwd(), 'dist')
      },
      resolve: {
            extensions: ['.ts', '.js']
      },
      module: {
            rules: [{
                  test: /\.ts$/,
                  exclude: /node_modules/,
                  loader: 'ts-loader'
            }],
            rules: [{
                  test: /\.less$/,
                  use: [
                        {
                              loader: MiniCssExtractPlugin.loader
                        },
                        {
                              loader: 'css-loader'
                        },
                        {
                              loader: 'less-loader'
                        }
                  ]
            }]
      },
      plugins: [
            new MiniCssExtractPlugin({filename: '[name].wxss'}),
            new webpack.BannerPlugin({
                  banner:
                        'const commons = require("./commons");\nconst runtime = require("./runtime");',
                  raw: true,
                  include: 'app.js'
            }),
            new CopyPlugin({
                  patterns: [
                        {
                              from: '**/*.wxml',
                              toType: 'dir',
                        },
                        {
                              from: '**/*.wxs',
                              toType: 'dir',
                        },
                        {
                              from: '**/*.json',
                              toType: 'dir',
                              globOptions: {
                                    ignore: [
                                          '**/node_modules/**/*.json',
                                          '**/lerna.json',
                                          '**/package.json',
                                          '**/tsconfig.json',
                                          '**/project.config.json',
                                    ]
                              }
                        }
                  ]
            })

      ],
      optimization: {
            splitChunks: {
                  cacheGroups: {
                        commons: {
                              chunks: 'initial',
                              name: 'commons',
                              minSize: 0,
                              maxSize: 0,
                              minChunks: 2
                        }
                  }
            },
            runtimeChunk: {
                  name: 'manifest'
            }
      }
};
