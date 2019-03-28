export default function NgModule(name) {
	return (function(target) {
		console.log(name, target);
	});
}
