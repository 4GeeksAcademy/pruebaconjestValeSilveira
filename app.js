const sum = (a,b) => {
    return a + b
}
// Conversion rates
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Functions
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Export ALL functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };