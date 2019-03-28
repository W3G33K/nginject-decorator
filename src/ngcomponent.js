import NgDependency from "./ngdependency";

export default function NgComponent(simpleName) {
	return NgDependency(simpleName, "component");
}
