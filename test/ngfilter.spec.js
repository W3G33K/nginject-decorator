import { expect } from "chai";
import { describe } from "mocha";

import {Filter, NgFilter} from "../src";

describe("@NgFilter", function() {
	let btoa = btoa;
	before(function() {
		if (typeof btoa !== "function") {
			btoa = (function(input) {
				const buffer = Buffer.from(input);
				return buffer.toString("base64");
			});
		}
	});

	it("should exist", function() {
		expect(NgFilter).to.not.be.undefined;
		expect(NgFilter).to.be.a("function");
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

		expect(EncodeBase64Filter).to.haveOwnProperty("name");
		expect(EncodeBase64Filter).to.haveOwnProperty("type");
		expect(EncodeBase64Filter.name).to.be.a("string");
		expect(EncodeBase64Filter.type).to.be.a("string");
		expect(EncodeBase64Filter.name).to.be.eq("base64");
		expect(EncodeBase64Filter.type).to.be.eq("filter");
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

		expect(EncodeBase64Filter).to.haveOwnProperty("name");
		expect(EncodeBase64Filter).to.haveOwnProperty("type");
		expect(function() {
			EncodeBase64Filter.name = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'name'");
		expect(function() {
			EncodeBase64Filter.type = "should throw error";
		}).to.throw(TypeError, "Cannot assign to read only property 'type'");
	});
});
