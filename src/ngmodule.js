import StringUtil from "./util/string.util";

export default function NgModule(name) {
	return (function(target) {
		let moduleName;
		if (typeof name === "string" && StringUtil.isNotEmpty(name)) {
			moduleName = StringUtil.toHyphenLowerCase(name);
		} else {
			moduleName = StringUtil.toHyphenLowerCase(target.name);
		}

		angular.module(moduleName, []);
	});
}
