var webpack = require('webpack')
var Server = require('webpack-dev-server')
var config  = require('./webpack.config.js')

new Server(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
}).listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});