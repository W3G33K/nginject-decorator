import "../../src/util/string.util";
import StringUtil from "../../src/util/string.util";

describe("StringUtil", function() {
	const BLANK_STRING = "        ";
	const EMPTY_STRING = "";
	const WHITESPACE_CHARACTER = " ";

	describe("isAlphaNumeric", function() {
		it("should exist", function() {
			expect(StringUtil.isAlphaNumeric).toBeDefined();
			expect(StringUtil.isAlphaNumeric).toEqual(jasmine.any(Function));
		});

		it("should be falsy when string is undefined", function() {
			expect(StringUtil.isAlphaNumeric(undefined)).toBeFalsy(); // same as StringUtil.isAlphaNumeric();
		});

		it("should be falsy when string is null", function() {
			expect(StringUtil.isAlphaNumeric(null)).toBeFalsy();
		});

		it("should be falsy when string is empty", function() {
			expect(StringUtil.isAlphaNumeric(EMPTY_STRING)).toBeFalsy();
		});

		it("should be falsy when string contains a single whitespace character", function() {
			expect(StringUtil.isAlphaNumeric(WHITESPACE_CHARACTER)).toBeFalsy();
		});

		it("should be falsy when string is blank", function() {
			expect(StringUtil.isAlphaNumeric(BLANK_STRING)).toBeFalsy();
		});

		it("should be falsy when string contains all lowercase characters", function() {
			expect(StringUtil.isAlphaNumeric("hello, world")).toBeFalsy();
		});

		it("should be falsy when string starts with a uppercase character", function() {
			expect(StringUtil.isAlphaNumeric("Hello, world")).toBeFalsy();
		});

		it("should be falsy when string ends with a uppercase character", function() {
			expect(StringUtil.isAlphaNumeric("hello, worlD")).toBeFalsy();
		});

		it("should be falsy when string starts with and ends with uppercase characters", function() {
			expect(StringUtil.isAlphaNumeric("Hello, worlD")).toBeFalsy();
		});

		it("should be falsy when string contains uppercase characters", function() {
			expect(StringUtil.isAlphaNumeric("hElLo, WoRlD")).toBeFalsy();
		});

		it("should be falsy when string starts with whitespace and contains characters", function() {
			expect(StringUtil.isAlphaNumeric(" Hello, world")).toBeFalsy();
		});

		it("should be falsy when string ends with whitespace and contains characters", function() {
			expect(StringUtil.isAlphaNumeric("Hello, world ")).toBeFalsy();
		});
	});

	describe("isEmpty", function() {
		it("should exist", function() {
			expect(StringUtil.isEmpty).toBeDefined();
			expect(StringUtil.isEmpty).toEqual(jasmine.any(Function));
		});

		it("should be truthy when string is undefined", function() {
			expect(StringUtil.isEmpty(undefined)).toBeTruthy(); // same as StringUtil.isEmpty();
		});

		it("should be truthy when string is null", function() {
			expect(StringUtil.isEmpty(null)).toBeTruthy();
		});

		it("should be truthy when string is empty", function() {
			expect(StringUtil.isEmpty(EMPTY_STRING)).toBeTruthy();
		});

		it("should be falsy when string contains a single whitespace character", function() {
			expect(StringUtil.isEmpty(WHITESPACE_CHARACTER)).toBeTruthy();
		});

		it("should be truthy when string contains multiple whitespace characters", function() {
			expect(StringUtil.isEmpty(BLANK_STRING)).toBeTruthy();
		});

		it("should be falsy when string contains a single character", function() {
			expect(StringUtil.isEmpty("a")).toBeFalsy();
		});

		it("should be falsy when string contains characters", function() {
			expect(StringUtil.isEmpty("Hello, world!")).toBeFalsy();
		});

		it("should be falsy when string starts with a whitespace character and contains characters", function() {
			expect(StringUtil.isEmpty(" Hello, world!")).toBeFalsy();
		});

		it("should be falsy when string ends with a whitespace character and contains characters", function() {
			expect(StringUtil.isEmpty("Hello, world ")).toBeFalsy();
		});
	});

	describe("isNotEmpty", function() {
		it("should exist", function() {
			expect(StringUtil.isNotEmpty).toBeDefined();
			expect(StringUtil.isNotEmpty).toEqual(jasmine.any(Function));
		});

		it("should be falsy when string is undefined", function() {
			expect(StringUtil.isNotEmpty(undefined)).toBeFalsy(); // same as StringUtil.isNotEmpty();
		});

		it("should be falsy when string is null", function() {
			expect(StringUtil.isNotEmpty(null)).toBeFalsy();
		});

		it("should be falsy when string is empty", function() {
			expect(StringUtil.isNotEmpty(EMPTY_STRING)).toBeFalsy();
		});

		it("should be falsy when string contains a single whitespace character", function() {
			expect(StringUtil.isNotEmpty(WHITESPACE_CHARACTER)).toBeFalsy();
		});

		it("should be falsy when string contains multiple whitespace characters", function() {
			expect(StringUtil.isNotEmpty(BLANK_STRING)).toBeFalsy();
		});

		it("should be truthy when string contains a single character", function() {
			expect(StringUtil.isNotEmpty("a")).toBeTruthy();
		});

		it("should be truthy when string contains characters", function() {
			expect(StringUtil.isNotEmpty("Hello, world")).toBeTruthy();
		});

		it("should be truthy when string starts with whitespace and contains characters", function() {
			expect(StringUtil.isNotEmpty(" Hello, world")).toBeTruthy();
		});

		it("should be truthy when string ends with whitespace and contains characters", function() {
			expect(StringUtil.isNotEmpty("Hello, world ")).toBeTruthy();
		});
	});

	describe("isUpperCase", function() {
		it("should exist", function() {
			expect(StringUtil.isUpperCase).toBeDefined();
			expect(StringUtil.isUpperCase).toEqual(jasmine.any(Function));
		});

		it("should be falsy when string is undefined", function() {
			expect(StringUtil.isUpperCase(undefined)).toBeFalsy(); // same as StringUtil.isUpperCase();
		});

		it("should be falsy when string is null", function() {
			expect(StringUtil.isUpperCase(null)).toBeFalsy();
		});

		it("should be falsy when string is empty", function() {
			expect(StringUtil.isUpperCase(EMPTY_STRING)).toBeFalsy();
		});

		it("should be falsy when string contains a single whitespace character", function() {
			expect(StringUtil.isUpperCase(WHITESPACE_CHARACTER)).toBeFalsy();
		});

		it("should be falsy when string is blank", function() {
			expect(StringUtil.isUpperCase(BLANK_STRING)).toBeFalsy();
		});

		it("should be falsy when string contains all lowercase characters", function() {
			expect(StringUtil.isUpperCase("hello, world")).toBeFalsy();
		});

		it("should be truthy when string starts with a uppercase character", function() {
			expect(StringUtil.isUpperCase("Hello, world")).toBeTruthy();
		});

		it("should be truthy when string ends with a uppercase character", function() {
			expect(StringUtil.isUpperCase("hello, worlD")).toBeTruthy();
		});

		it("should be truthy when string starts with and ends with uppercase characters", function() {
			expect(StringUtil.isUpperCase("Hello, worlD")).toBeTruthy();
		});

		it("should be truthy when string contains uppercase characters", function() {
			expect(StringUtil.isUpperCase("hElLo, WoRlD")).toBeTruthy();
		});

		it("should be truthy when string starts with whitespace and contains characters", function() {
			expect(StringUtil.isUpperCase(" Hello, world")).toBeTruthy();
		});

		it("should be truthy when string ends with whitespace and contains characters", function() {
			expect(StringUtil.isUpperCase("Hello, world ")).toBeTruthy();
		});
	});

	describe("toHyphenLowerCase", function() {
		it("should exist", function() {
			expect(StringUtil.toHyphenLowerCase).toBeDefined();
			expect(StringUtil.toHyphenLowerCase).toEqual(jasmine.any(Function));
		});

		it("should be falsy when undefined is passed", function() {
			expect(StringUtil.toHyphenLowerCase(undefined)).toBeFalsy();
		});

		it("should be falsy when null is passed", function() {
			expect(StringUtil.toHyphenLowerCase(null)).toBeFalsy();
		});

		it("should be equal to it when empty string is passed", function() {
			expect(StringUtil.toHyphenLowerCase(EMPTY_STRING)).toEqual(EMPTY_STRING);
		});

		it("should be equal when lowercase character is passed", function() {
			expect(StringUtil.toHyphenLowerCase("a")).toEqual("a");
		});

		it("should lowercase character when uppercase character is passed", function() {
			expect(StringUtil.toHyphenLowerCase("A")).toEqual("a");
		});

		it("should be equal when lowercase string is passed", function() {
			expect(StringUtil.toHyphenLowerCase("angular-es6-starter")).toEqual("angular-es6-starter");
		});

		it("should lowercase string when uppercase string is passed", function() {
			expect(StringUtil.toHyphenLowerCase("AngularES6Starter")).toEqual("angular-es6-starter");
		});
	});
});
