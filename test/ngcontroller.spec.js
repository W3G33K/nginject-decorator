import { expect } from "chai";
import { describe } from "mocha";

import { NgController } from "../src";

describe("@NgController", function() {
	it("should exist", function() {
		expect(NgController).to.not.be.undefined;
		expect(NgController).to.be.a("function");
	});

	it("should decorate class with static name and type properties", function() {
		@NgController("GreetingController")
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
		@NgController("GreetingController")
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