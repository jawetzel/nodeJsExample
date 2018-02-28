import Math from '../../apiFiles/Math';

describe("Adding two numbers together", function() {
    it("Add two numbers together", function() {
        expect(Math.Add(3, 5)).toBe(8);
    });
});
describe("Average an array of numbers", function() {
    it("Total numbers then average them from array", function() {
        expect(Math.Average([3, 17, 13, 5, 11, 11])).toBe(10);
    });
});