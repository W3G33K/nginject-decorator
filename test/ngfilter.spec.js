import {Filter, NgFilter} from "../src";

describe("@NgFilter", function() {
	it("should exist", function() {
		expect(NgFilter).toBeDefined();
		expect(NgFilter).toEqual(jasmine.any(Function));
	});

	it("should decorate class with static name and type properties", function() {
		@NgFilter("base64")
		class EncodeBase64Filter extends Filter {
			execute(input, reverse = false) {
				let string = input;
				if (reverse === true) {
					let characters = string.split("");
					characters = characters.reverse();
					string = characters.join("");
				}

				return btoa(string);
			}
		}

		expect(EncodeBase64Filter.simpleName).toBeDefined();
		expect(EncodeBase64Filter.simpleType).toBeDefined();
		expect(EncodeBase64Filter.simpleName).toEqual("base64");
		expect(EncodeBase64Filter.simpleType).toEqual("filter");
	});

	it("should decorate class with static name and type properties that are read only", function() {
		@NgFilter("base64")
		class EncodeBase64Filter extends Filter {
			execute(input, reverse = false) {
				let string = input;
				if (reverse === true) {
					let characters = string.split("");
					characters = characters.reverse();
					string = characters.join("");
				}

				return btoa(string);
			}
		}

		expect(EncodeBase64Filter.simpleName).toBeDefined();
		expect(EncodeBase64Filter.simpleType).toBeDefined();
		expect(function() {
			EncodeBase64Filter.simpleName = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(function() {
			EncodeBase64Filter.simpleType = "should throw error";
		}).toThrow(new TypeError("Attempted to assign to readonly property."));
		expect(EncodeBase64Filter.simpleName).toEqual("base64");
		expect(EncodeBase64Filter.simpleType).toEqual("filter");
	});
});
