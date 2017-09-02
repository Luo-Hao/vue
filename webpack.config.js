/**
 * Created by lh on 2016/5/20.
 */
'use strict';
const path               = require('path');
const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    entry:{
        index: "./client/index.js"
    },
    output:{
        path: path.resolve(__dirname, './web'),
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                query:{
                    presets:["latest","react"]
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['web'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['index'],
            template: './client/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};
module.exports = config;