import { expect } from "chai";
import { describe } from "mocha";

import NgInject from "../src/nginject";

describe("@NgInject", function() {
	it("should decorate class with a static member of type array with no items", function() {
		@NgInject()
		class NgController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(NgController).to.haveOwnProperty("$inject");
		expect(NgController.$inject).to.be.a("array");
		expect(NgController.$inject).to.be.length(0);
	});

	it("should decorate class with a static member of type array with one item", function() {
		@NgInject("$scope")
		class NgController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(NgController).to.haveOwnProperty("$inject");
		expect(NgController.$inject).to.be.a("array");
		expect(NgController.$inject).to.be.length(1);
		expect(NgController.$inject).to.contain("$scope");
	});

	it("should decorate class with a static member of type array with three items", function() {
		@NgInject("$scope", "$http", "$location")
		class NgController {
			constructor($scope, $http, $location) {
				this.$scope = $scope;
				this.$http = $http;
				this.$location = $location;
			}
		}

		expect(NgController).to.haveOwnProperty("$inject");
		expect(NgController.$inject).to.be.a("array");
		expect(NgController.$inject).to.be.length(3);
		expect(NgController.$inject).to.contain("$http");
		expect(NgController.$inject).to.contain("$location");
		expect(NgController.$inject).to.contain("$scope");
	});
});
