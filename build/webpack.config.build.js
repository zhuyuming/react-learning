var webpack = require('webpack')
var config = require('webpack.config.base.js')


var env = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"build"'
})
config.plugins.push(env)


module.exports =  config
