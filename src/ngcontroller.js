import NgDependency from "./ngdependency";

export default function NgController(name) {
	return NgDependency(name, "controller");
}
