import {NgController} from "../src";

describe("@NgController", function() {
	it("should exist", function() {
		expect(NgController).toBeDefined();
		expect(NgController).toEqual(jasmine.any(Function));
	});

	it("should decorate class with static name and type properties", function() {
		@NgController("GreetingController")
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
		@NgController("GreetingController")
		class AppController {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppController.simpleName).toBeDefined();
		expect(AppController.simpleType).toBeDefined();
		expect(function() {
			AppController.simpleName = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(function() {
			AppController.simpleType = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(AppController.simpleName).toEqual("GreetingController");
		expect(AppController.simpleType).toEqual("controller");
	});
});
