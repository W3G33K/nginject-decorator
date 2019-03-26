import { expect } from "chai";
import { describe } from "mocha";

import NgInject from "../src";

describe("import NgInject", function() {
	it("as default", function() {
		expect(NgInject).to.not.be.undefined;
		expect(NgInject).to.be.a("function");
	});
});
