var webpack = require('webpack')
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
            { test:/\.js$/, loader:'babel-loader'}
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ],
    resolve:{
         extensions:['', '.js']
    },
    watch: true

}
