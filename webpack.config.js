const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: './test/test.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: "./build"
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: 'test/test.html'
            }),
        new CleanWebpackPlugin(),
    ]
};