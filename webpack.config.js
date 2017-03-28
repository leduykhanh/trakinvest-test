var webpack = require('webpack');
var path = require('path');
var fs = require('fs')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');
// var APP_DIR =  './client'
// var BUILD_DIR = "./public/gen"

/* babel */
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"));

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'static/js/bundle.js',
    publicPath: "http://127.0.0.1:8080/public/",

  },
  resolve: {
      extensions: ['.js','.jsx'],
       modules: ['node_modules',
           'sass',
         path.resolve(__dirname,'node_modules'),
         path.resolve(__dirname,'client'),
         path.resolve(__dirname,'sass'),
         path.resolve(__dirname,'client/events'),
         path.resolve(__dirname,'client/containers'),
         path.resolve(__dirname,'client/reducers')]
    },
  module : {

    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loaders : ['babel-loader']

      }

    ]
  },

  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]

};
commonSassPaths = [path.resolve(__dirname, './sass/common') ]

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    config.module.rules.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
        {
            loader: ["css-loader","sass-loader"]
        })
    });
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    );
    config.plugins.push(
        new ExtractTextPlugin({
            filename: 'static/css/bundle.css',
            allChuncks: true
        })
    );
    babelSettings.plugins.push("transform-react-inline-elements");
    babelSettings.plugins.push("transform-react-constant-elements");

} else {
    config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader?sourceMap",
            {
                loader:"sass-loader",
                options:
                {
                    sourceMap: true,
                    includePaths :commonSassPaths
                }
            }]

    });

    config.devtool = "#cheap-module-source-map"
    config.devServer = {
        contentBase: './public',
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 8080
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}
module.exports = config;