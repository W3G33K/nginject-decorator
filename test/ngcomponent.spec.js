import {NgComponent} from "../src";

describe("@NgComponent", function() {
	it("should exist", function() {
		expect(NgComponent).toBeDefined();
		expect(NgComponent).toEqual(jasmine.any(Function));
	});

	it("should decorate class with static name and type properties", function() {
		@NgComponent("GreetingComponent")
		class AppComponent {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppComponent.simpleName).toBeDefined();
		expect(AppComponent.simpleType).toBeDefined();
		expect(AppComponent.simpleName).toEqual("GreetingComponent");
		expect(AppComponent.simpleType).toEqual("component");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgComponent("GreetingComponent")
		class AppComponent {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppComponent.simpleName).toBeDefined();
		expect(AppComponent.simpleType).toBeDefined();
		expect(function() {
			AppComponent.simpleName = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(function() {
			AppComponent.simpleType = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(AppComponent.simpleName).toEqual("GreetingComponent");
		expect(AppComponent.simpleType).toEqual("component");
	});
});
