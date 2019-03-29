class Constants {
	static get NUMERIC_PATTERN() {
		return /([0-9])/g;
	}

	static get UPPERCASE_PATTERN() {
		return /([A-Z])/g;
	}

	static get WHITESPACE_PATTERN() {
		return /^\s*$/;
	}
}

export default class StringUtil {
	/**
	 *
	 * @param string
	 * @returns {boolean}
	 */
	static isAlphaNumeric(string) {
		return (typeof string === "string") && Constants.NUMERIC_PATTERN.test(string) === true;
	}

	/**
	 *
	 * @param string
	 * @returns {boolean}
	 */
	static isEmpty(string) {
		return (typeof string !== "string") || Constants.WHITESPACE_PATTERN.test(string) === true;
	}

	/**
	 *
	 * @param string
	 * @returns {boolean}
	 */
	static isNotEmpty(string) {
		return (typeof string === "string") && Constants.WHITESPACE_PATTERN.test(string) === false;
	}

	/**
	 *
	 * @param string
	 * @returns {boolean}
	 */
	static isUpperCase(string) {
		return (typeof string === "string") && Constants.UPPERCASE_PATTERN.test(string) === true;
	}

	/**
	 *
	 * @param string
	 * @returns {string}
	 */
	static toHyphenLowerCase(string) {
		let result = string;
		if (StringUtil.isUpperCase(string)) {
			result = result.replace(Constants.UPPERCASE_PATTERN, function(match, string, offset) {
				let char = match.toLowerCase();
				if (offset > 0) {
					let prevChar = result.charAt(offset - 1);
					char = (StringUtil.isUpperCase(prevChar) === false ? "-" : "") + char;
				}

				return char;
			});
		}

		return result;
	}
}
