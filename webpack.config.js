var webpack = require('webpack')
var htmlTpl = require('html-webpack-plugin')
var path = require('path')

var packages = require('./package.json').dependencies
var vendor = Object.keys(packages)

var publicPath = '/js/'

module.exports = {
    entry:{
        main: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main.js'
        ],
        common: vendor
    },
    output:{
        path:path.resolve(__dirname, 'dist/'),
        // publicPath: './',
        filename:'[name].min.js'
    },
    module:{
        loaders:[
            { test:/\.js$/, loaders:['react-hot-loader', 'babel-loader']},
            { test:/\.ejs$/, loader:'ejs-loader'},
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new htmlTpl({
            title: 'react-learing',
            template:'./src/index.ejs',
            inject: 'body'
        }),

    ],
    resolve:{
         extensions:['', '.js', 'ejs']
    },
    devServer:{
        contentBase:'./dist/',
        hot:true
    },
    watch: true
}
