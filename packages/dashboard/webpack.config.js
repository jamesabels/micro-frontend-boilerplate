const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: ["./src/index"],
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
        hot: true
    },
    output: {
        publicPath: "auto",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                  "css-loader",
                ],
            },
            {
                test: /bootstrap\.tsx$/,
                loader: "bundle-loader",
                options: {
                  lazy: true,
                },
            },
            {   test: /\.tsx?$/, 
                loader: "ts-loader", 
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|woff(2)?|ttf|svg|eot)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './Dashboard': './src/Dashboard',
            },
            shared: {
                'react': { eager: true, singleton: true },
                'react-dom': { eager: true, singleton: true },
                'react-router-dom': { eager: true, singleton: true },
                'valtio': { eager: true, singleton: true },
                '@blueprintjs/core': { eager: true, singleton: true }
            },
        }),
        new webpack.DefinePlugin({
            "process.env": "{}",
            global: {}
        })
    ],
};
