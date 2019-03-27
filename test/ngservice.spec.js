import { expect } from "chai";
import { describe } from "mocha";

import { NgService } from "../src";

describe("@NgService", function() {
	it("should exist", function() {
		expect(NgService).to.not.be.undefined;
		expect(NgService).to.be.a("function");
	});

	it("should decorate class with static name and type properties", function() {
		@NgService("GreetingService")
		class AppService {
			constructor($http) {
				this.$scope = $http;
			}
		}

		expect(AppService).to.haveOwnProperty("name");
		expect(AppService).to.haveOwnProperty("type");
		expect(AppService.name).to.be.a("string");
		expect(AppService.type).to.be.a("string");
		expect(AppService.name).to.be.eq("GreetingService");
		expect(AppService.type).to.be.eq("service");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgService("GreetingService")
		class AppService {
			constructor($http) {
				this.$scope = $http;
			}
		}

		expect(AppService).to.haveOwnProperty("name");
		expect(AppService).to.haveOwnProperty("type");
		expect(function() {
			AppService.name = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'name'");
		expect(function() {
			AppService.type = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'type'");
	});
});
