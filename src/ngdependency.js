export default function NgDependency(simpleName, simpleType) {
	return (function(target) {
		Object.defineProperties(target, {
			simpleName: {
				value: simpleName,
				configurable: false,
				enumerable: false,
				writable: false
			},

			simpleType: {
				value: simpleType,
				configurable: false,
				enumerable: false,
				writable: false
			}
		});
	});
}
