const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './src/')
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}