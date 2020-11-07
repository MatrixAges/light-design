const path = require('path');
const fs = require('fs-extra');
const CopyPlugin = require('copy-webpack-plugin');

const clearDist = () => {
      fs.emptyDirSync('dist');

      return {};
};

module.exports = {
      entry: clearDist(),
      output: {
            filename: '[name].js',
            path: path.resolve(process.cwd(), 'dist')
      },
      plugins: [
            new CopyPlugin({
                  patterns: [
                        {
                              from: '**/*.ts',
                              toType: 'dir',
                              globOptions: {
                                    ignore: [
                                          '**/node_modules/**/*.ts',
                                          '**/*.d.ts',
                                    ]
                              }
                        },
                        {
                              from: '**/*.less',
                              toType: 'dir',
                              globOptions: {
                                    ignore: [
                                          '**/node_modules/**/*.less',
                                    ]
                              }
                        },
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
