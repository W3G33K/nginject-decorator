import angular from "angular";
import "angular-mocks";

import {NgModule} from "../src";

describe("@NgModule", function() {
	it("should exist", function() {
		expect(NgModule).toBeDefined();
		expect(NgModule).toEqual(jasmine.any(Function));
	});

	it("should create ng-app module named 'angular-es6-starter'", function() {
		@NgModule("angular-es6-starter")
		class AppModule {}
		angular.mock.module("angular-es6-starter");

		let module;
		expect(function() {
			module = angular.module("angular-es6-starter");
		}).not.toThrow();
	});

	it("should create ng-app module named after target class", function() {
		@NgModule()
		class AppModule {}
		angular.mock.module("app-module");

		let module;
		expect(function() {
			module = angular.module("app-module");
		}).not.toThrow();
	});
});
