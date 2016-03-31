module.exports = {
    entry:'./src/main.js',
    output:{
        path:'./dist/',
        filename:'[name].min.js'
    },
    module:{
        loaders:[
            { test:/\.js$/, loader:'babel-loader'}
        ]
    },
    resolve:{
         extensions:['', '.js']
    },
    watch: true

}
