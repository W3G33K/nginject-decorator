export default function NgInject(...inject) {
	return (function(target) {
		target.$inject = inject;
	})
}
