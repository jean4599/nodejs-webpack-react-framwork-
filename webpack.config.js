var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:'./src/app.js',
	output:{path: './public', filename:'bundle.js'},
	watch:true,
	module: {
		loaders:[
			{
				test: /\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015', 'react']
				}
			}
		]
	}
};
