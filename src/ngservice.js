import NgDependency from "./ngdependency";

export default function NgService(simpleName) {
	return NgDependency(simpleName, "service");
}
