const webpackConfig = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /(\.jsx|\.js)$/, loaders: ['babel-loader'], exclude: /(node_modules)/}
		]
	}
}

module.exports = webpackConfig;