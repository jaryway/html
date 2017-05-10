// base 只定义

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var utils = require('./utils')
var config = require('../config')

// var postcss = require('postcss')
// var autoprefixer = require('autoprefixer')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {

        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: config.build.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            // '@bootstrap': 'bootstrap-sass/assets/stylesheets/',
            // '@': resolve('src')
        }
    },
    module: {
        rules: [{
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            /*{
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },*/
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        // use: ['css-loader', 'postcss-loader', 'sass-loader']
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: function() {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: ['node_modules']
                            }
                        }]
                    }) //'css-loader', 'postcss-loader', 'sass-loader'
                    // include: [path.resolve(__dirname, "node_modules")]
            },
            /*{
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }, 
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // interpolate: 'require'
                }
            }, */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:8].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
                }
            }
        ]
    }
}