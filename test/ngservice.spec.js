import {NgService} from "../src";

describe("@NgService", function() {
	it("should exist", function() {
		expect(NgService).toBeDefined();
		expect(NgService).toEqual(jasmine.any(Function));
	});

	it("should decorate class with static name and type properties", function() {
		@NgService("GreetingService")
		class AppService {
			constructor($http) {
				this.$scope = $http;
			}
		}

		expect(AppService.simpleName).toBeDefined();
		expect(AppService.simpleType).toBeDefined();
		expect(AppService.simpleName).toEqual("GreetingService");
		expect(AppService.simpleType).toEqual("service");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgService("GreetingService")
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
