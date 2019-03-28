import NgInject from "../src";

describe("@NgInject", function() {
	it("should exist", function() {
		expect(NgInject).toBeDefined();
		expect(NgInject).toEqual(jasmine.any(Function));
	});

	it("should decorate class with a static $inject property of type array with zero items", function() {
		@NgInject()
		class AppController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(AppController.$inject).toBeDefined();
		expect(AppController.$inject).toEqual(jasmine.any(Array));
		expect(AppController.$inject.length).toEqual(0);
	});

	it("should decorate class with a static $inject property of type array with one item", function() {
		@NgInject("$scope")
		class AppController {
			constructor($scope, $http) {
				this.$scope = $scope;
				this.$http = $http;
			}
		}

		expect(AppController.$inject).toBeDefined();
		expect(AppController.$inject).toEqual(jasmine.any(Array));
		expect(AppController.$inject.length).toEqual(1);
		expect(AppController.$inject).toContain("$scope");
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

		expect(AppController.$inject).toBeDefined();
		expect(AppController.$inject).toEqual(jasmine.any(Array));
		expect(AppController.$inject.length).toEqual(3);
		expect(AppController.$inject).toContain("$http");
		expect(AppController.$inject).toContain("$location");
		expect(AppController.$inject).toContain("$scope");
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

		expect(AppController.$inject).toBeDefined();
		expect(AppController.$inject).toEqual(jasmine.any(Array));
		expect(function() {
			AppController.$inject = ["appService"];
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(AppController.$inject.length).toEqual(3);
		expect(AppController.$inject).toContain("$http");
		expect(AppController.$inject).toContain("$location");
		expect(AppController.$inject).toContain("$scope");
	});
});
