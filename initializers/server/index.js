const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => {
  return;
};

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3000;

// new webpackDevServer(webpack(config), {
//   hot: true,
//   historyApiFallback: true,
//   publicPath: config.output.publicPath,
//   stats: {
//     colors: true
//   }
// }).listen(port, host, (err) => {
//   if (err)
//     console.log(err);
//
//   console.log(`Listening at host: ${host} port: ${port}`);
// });

const express = require('express');
const application = express();

application.use(express.static('srs/static'));
application.set('views', __dirname);
application.set('view engine', 'ejs');

application.get('*', require('./render').default);

application.listen(port, function() {
  console.log('Server listening on ' + port);
});
