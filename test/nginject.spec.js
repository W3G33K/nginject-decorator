import { expect } from "chai";
import { describe } from "mocha";

import NgInject from "../src";

describe("@NgInject", function() {
	it("should exist", function() {
		expect(NgInject).to.not.be.undefined;
		expect(NgInject).to.be.a("function");
	});

	it("should decorate class with a static $inject property of type array with zero items", function() {
		@NgInject()
		class AppController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(AppController).to.haveOwnProperty("$inject");
		expect(AppController.$inject).to.be.a("array");
		expect(AppController.$inject).to.be.length(0);
	});

	it("should decorate class with a static $inject property of type array with one item", function() {
		@NgInject("$scope")
		class AppController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(AppController).to.haveOwnProperty("$inject");
		expect(AppController.$inject).to.be.a("array");
		expect(AppController.$inject).to.be.length(1);
		expect(AppController.$inject).to.contain("$scope");
	});

	it("should decorate class with a static $inject property of type array with three items", function() {
		@NgInject("$scope", "$http", "$location")
		class AppController {
			constructor($scope, $http, $location) {
				this.$scope = $scope;
				this.$http = $http;
				this.$location = $location;
			}
		}

		expect(AppController).to.haveOwnProperty("$inject");
		expect(AppController.$inject).to.be.a("array");
		expect(AppController.$inject).to.be.length(3);
		expect(AppController.$inject).to.contain("$http");
		expect(AppController.$inject).to.contain("$location");
		expect(AppController.$inject).to.contain("$scope");
	});

	it("should decorate class with a static $inject property that is read only", function() {
		@NgInject("$scope", "$http", "$location")
		class AppController {
			constructor($scope, $http, $location) {
				this.$scope = $scope;
				this.$http = $http;
				this.$location = $location;
			}
		}

		expect(AppController).to.haveOwnProperty("$inject");
		expect(function() {
			AppController.$inject = ["myService"];
		}).to.throw(TypeError, "Cannot assign to read only property '$inject'");
	});
});
