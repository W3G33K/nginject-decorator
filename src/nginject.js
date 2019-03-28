export default function NgInject(...inject) {
	return (function(target) {
		Object.defineProperty(target, "$inject", {
			value: inject,
			configurable: false,
			enumerable: false,
			writable: false
		});
	});
}
