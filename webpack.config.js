"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve("./src"),

    entry: {
        app: [ "./index.js" ]
    },

    output: {
        path: path.resolve("./public/assets"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js"
    },

    resolve: {
        extensions: [ "", ".js" ]
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ "babel" ],
                include: path.join(__dirname, 'src/')
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {

    }
};
