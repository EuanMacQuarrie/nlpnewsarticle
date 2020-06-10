const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin')
const babelTransformClassProperties = require("babel-core").transform("code", {
    plugins: ["transform-class-properties"]
  });

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
        output: {
            libraryTarget: 'var',
            library: 'Client'
        },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
        ]
    },
    plugins: [
        new babelTransformClassProperties({
            "spec": true
        }),
        new BundleAnalyzerPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }), 
    ]
}
