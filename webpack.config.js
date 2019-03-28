const path = require("path");

module.exports = {
	mode: "development",
	target: "web",
	entry: {
		index: path.resolve(__dirname, "./src/index.js")
	},

	output: {
		filename: "[name].js",
		chunkFilename: "[name]-[hash].js",
		path: path.resolve(__dirname, "./lib")
	},

	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/i,
				loader: "babel-loader"
			}
		]
	},
};
