import NgDependency from "./ngdependency";

export default function NgService(name) {
	return NgDependency(name, "service");
}
