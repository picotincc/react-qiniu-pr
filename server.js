const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("./webpack.config.js");
const complier = webpack(config);

new WebpackDevServer(complier, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    contentBase: "./public"
}).listen(3000, "localhost", err => {
    if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
