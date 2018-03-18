const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	mode: 'development' || 'production',
	devServer: {
	 	contentBase: path.join(__dirname, 'dist'),
	 	compress: true,
	 	port: 8080
	 },
	 plugins:[
		new webpack.HotModuleReplacementPlugin()
	 ]
}