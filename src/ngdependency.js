export default function NgDependency(name, type) {
	return (function(target) {
		Object.defineProperties(target, {
			name: {
				value: name
			},

			type: {
				value: type
			}
		});
	});
}
