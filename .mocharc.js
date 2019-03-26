module.exports = {
	diff: true,
	exit: true,
	extension: ["js"],
	package: "./package.json",
	recursive: true,
	reporter: "spec",
	require: "@babel/register",
	spec: "./test/**/*.spec.js"
};
