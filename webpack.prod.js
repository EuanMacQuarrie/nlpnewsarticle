const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new MiniCssExtractPlugin({})],
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW({
            option: 'value',
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
    ]
};
