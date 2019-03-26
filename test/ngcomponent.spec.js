import { expect } from "chai";
import { describe } from "mocha";

import { NgComponent } from "../src";

describe("@NgComponent", function() {
	it("should exist", function() {
		expect(NgComponent).to.not.be.undefined;
		expect(NgComponent).to.be.a("function");
	});

	it("should decorate class with static name and type properties", function() {
		@NgComponent("GreetingComponent")
		class AppComponent {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppComponent).to.haveOwnProperty("name");
		expect(AppComponent).to.haveOwnProperty("type");
		expect(AppComponent.name).to.be.a("string");
		expect(AppComponent.type).to.be.a("string");
		expect(AppComponent.name).to.be.eq("GreetingComponent");
		expect(AppComponent.type).to.be.eq("component");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgComponent("GreetingComponent")
		class AppComponent {
			constructor($scope) {
				this.$scope = $scope;
			}
		}

		expect(AppComponent).to.haveOwnProperty("name");
		expect(AppComponent).to.haveOwnProperty("type");
		expect(function() {
			AppComponent.name = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'name'");
		expect(function() {
			AppComponent.type = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'type'");
	});
});
