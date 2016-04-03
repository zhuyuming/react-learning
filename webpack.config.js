var webpack = require('webpack')
var htmlTpl = require('html-webpack-plugin')


var packages = require('./package.json').dependencies
var vendor = Object.keys(packages)


module.exports = {
    entry:{
        main: './src/main.js',
        common: vendor
    },
    output:{
        path:'./dist/',
        filename:'[name].min.js'
    },
    module:{
        loaders:[
            { test:/\.js$/, loader:'babel-loader'},
            { test:/\.ejs$/, loader:'ejs-loader'},
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new htmlTpl({
            title: 'react-learing',
            template:'./src/index.ejs',
            inject: 'body'
        })
    ],
    resolve:{
         extensions:['', '.js', 'ejs']
    },
    watch: true
}
