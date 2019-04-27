import chai from "chai";
import { roundToDecimalPlace } from "../lib";
const expect = chai.expect;
describe("lib.ts roundToDecimalPlace", function() {
    it("Can round a float to nearest given decimal place", function() {
        expect(roundToDecimalPlace(1.35, 1)).to.equal(1.4);
        expect(roundToDecimalPlace(1.2245, 2)).to.equal(1.22);
    });
});
