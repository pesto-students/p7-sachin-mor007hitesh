const mathOperations = require('./mathOperations');

describe("mathOperations", () => {
    test("sum of 2 numbers", () => {
        expect(mathOperations.sum(2, 3)).toBe(5);
    });

    test("difference of 2 numbers", () => {
        expect(mathOperations.diff(5, 3)).toBe(2);
    });

    test("product of 2 numbers", () => {
        expect(mathOperations.product(2, 3)).toBe(6);
    });
});
