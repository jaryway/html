var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require("webpack-hot-middleware")

var webpackConfig = require('./webpack.dev.conf')

// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(function(name) {
	webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name])
})

var server = new express()
var compiler = webpack(webpackConfig)

var devMiddleware = webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
	quiet: false
})

var hotMiddleware = webpackHotMiddleware(compiler, {
	log: () => {}
})

compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({
			action: 'reload'
		})
		cb()
	})
})

server.use(devMiddleware)
server.use(hotMiddleware)

server.use('/', express.static('./static'))

var ipAddress = require('./local-ip')

var port = 8070
var uri = 'http://' + ipAddress + ':' + port



// var _resolve
// var readyPromise = new Promise(resolve => {
// 	_resolve = resolve
// })

devMiddleware.waitUntilValid(() => {
	console.log('> Listening at ' + uri + '\n')
	console.log('process', process.env.NODE_ENV)
		// when env is testing, don't need open it
		// if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
		// 	opn(uri)
		// }
	opn(uri)
		// _resolve()
})

server.listen(port)