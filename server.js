var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config  = require('./build/webpack.config.server.js')

var server = new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
})

server.listen(8080, '127.0.0.1', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at default config');
});

// 模拟数据调试
var app = server.app
var fs  = require('fs')
app.post('*',function  (req,res) {
    console.log('psot -> json')
	var url = req.url;
	if( /.json$/.test(url)){
		try{
			path = './data/' + url.substr(1)
			var data = fs.readFileSync(path, 'utf-8')
		}catch(err){
			var data = JSON.stringify( { code: 0, msg:'路径错误或者json文件不存在'} )
		}
	   res.end(data)
    }else{
        // xuanranzhuye
    }
})
