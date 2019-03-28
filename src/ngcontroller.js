import NgDependency from "./ngdependency";

export default function NgController(simpleName) {
	return NgDependency(simpleName, "controller");
}
