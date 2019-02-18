const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	node: {
		__filename: true
	},
	context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		template: './index.html',
    		inject: 'body'
    	})
    ]
};