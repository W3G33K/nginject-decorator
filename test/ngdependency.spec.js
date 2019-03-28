import NgDependency from "../src/ngdependency";

describe("@NgDependency", function() {
	it("should exist", function() {
		expect(NgDependency).toBeDefined();
		expect(NgDependency).toEqual(jasmine.any(Function));
	});

	it("should decorate class with static name and type properties", function() {
		@NgDependency("GreetingController", "controller")
		class AppController {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppController.simpleName).toBeDefined();
		expect(AppController.simpleType).toBeDefined();
		expect(AppController.simpleName).toEqual("GreetingController");
		expect(AppController.simpleType).toEqual("controller");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgDependency("GreetingService", "service")
		class AppService {
			constructor($http) {
				this.$scope = $http;
			}
		}

		expect(AppService.simpleName).toBeDefined();
		expect(AppService.simpleType).toBeDefined();
		expect(function() {
			AppService.simpleName = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(function() {
			AppService.simpleType = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(AppService.simpleName).toEqual("GreetingService");
		expect(AppService.simpleType).toEqual("service");
	});
});
