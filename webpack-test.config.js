const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/,
					/\.spec\.js$/
				],
				use: {
					loader: "istanbul-instrumenter-loader",
					options: {
						esModules: true
					}
				},
				enforce: "post"
			}
		]
	}
});
