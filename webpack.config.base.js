var webpack = require('webpack')
var htmlTpl = require('html-webpack-plugin')
var path = require('path')

var packages = require('./package.json').dependencies
var vendor = Object.keys(packages)

var publicPath = '/'
module.exports = {
    entry:{
        main: [
        './src/main.js'
        ],
        common: vendor
    },
    output:{
        path:path.resolve(__dirname, 'dist/'),
        publicPath: publicPath,
        filename:'[name].min.js'
    },
    module:{
        loaders:[
            { test:/\.js$/, 
                loaders:['babel-loader'],
                exclude:/node_modules/
            },
            { test:/\.ejs$/, loader:'ejs-loader'},
        ]
    },

    plugins:[
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
    
    watch: true
}
