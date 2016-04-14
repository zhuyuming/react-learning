var webpack = require('webpack')
var htmlTpl = require('html-webpack-plugin')
var path = require('path')

var packages = require('../package.json').dependencies
var common = Object.keys(packages)

var basePath = path.resolve(__dirname, '../')
var publicPath = '/'
module.exports = {
    entry:{
        main: [
            path.resolve(basePath, 'src/main.js')
        ],
        common: common
    },
    output:{
        path:path.resolve(basePath, 'dist/'),
        publicPath: publicPath,
        filename:'js/[name].min.js'
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
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.min.js'),
        new htmlTpl({
            title: 'react-learing',
            template:path.resolve(basePath, 'src/index.ejs'),
            inject: 'body'
        }),
    ],
    resolve:{
         extensions:['', '.js', 'ejs']
    }

}
