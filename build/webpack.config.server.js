var webpack = require('webpack')
var config = require('./webpack.config.base.js')

config.entry.main.unshift('webpack/hot/only-dev-server')
config.entry.main.unshift('webpack-dev-server/client?http://localhost:8080')

config.module.loaders[0].loaders.unshift('react-hot-loader')

var env = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"dev"'
})
config.plugins.push(env)
config.plugins.push(new webpack.HotModuleReplacementPlugin())


module.exports =  config

