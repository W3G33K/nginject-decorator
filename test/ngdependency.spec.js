import { expect } from "chai";
import { describe } from "mocha";

import NgDependency from "../src/ngdependency";

describe("@NgDependency", function() {
	it("should exist", function() {
		expect(NgDependency).to.not.be.undefined;
		expect(NgDependency).to.be.a("function");
	});

	it("should decorate class with static name and type properties", function() {
		@NgDependency("GreetingController", "controller")
		class AppController {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppController).to.haveOwnProperty("name");
		expect(AppController).to.haveOwnProperty("type");
		expect(AppController.name).to.be.a("string");
		expect(AppController.type).to.be.a("string");
		expect(AppController.name).to.be.eq("GreetingController");
		expect(AppController.type).to.be.eq("controller");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgDependency("GreetingController", "controller")
		class AppController {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppController).to.haveOwnProperty("name");
		expect(AppController).to.haveOwnProperty("type");
		expect(function() {
			AppController.name = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'name'");
		expect(function() {
			AppController.type = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'type'");
	});
});
