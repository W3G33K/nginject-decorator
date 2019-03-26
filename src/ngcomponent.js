import NgDependency from "./ngdependency";

export default function NgComponent(name) {
	return NgDependency(name, "component");
}
