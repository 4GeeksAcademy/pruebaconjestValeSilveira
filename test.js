const { 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require("./app.js");

test("1 euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("1 dollar should be 146.262 yen (aprox)", () => {
    let expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(expected);
});

test("1 yen should be 0.00556 pounds (aprox)", () => {
    let expected = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBe(expected);
});