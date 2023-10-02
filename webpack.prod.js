const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    optimization: {
        minimize: true,
    },
});