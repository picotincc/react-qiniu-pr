"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: path.resolve("./src"),

    entry: {
        app: [ "./index.js", "./app/style.less" ]
    },

    output: {
        path: path.resolve("./public/assets"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js"
    },

    resolve: {
        extensions: [ "", ".js", ".less" ]
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ "babel" ],
                include: path.join(__dirname, 'src/')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin("./[name]/resource/bundle.css")
    ],

    devServer: {

    }
};
