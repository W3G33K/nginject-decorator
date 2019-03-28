const merge = require("webpack-merge");
const common = require("./webpack.config");

/**
 * Webpack Plugins
 */
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: "production",

	externals: {
		angular: "angular"
	},

	plugins: [
		new CleanWebpackPlugin()
	]
});
