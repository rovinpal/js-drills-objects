const assert = require("assert");
const invert = require("../invert");

const testObject = {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
};

const result = invert(testObject);

assert.deepStrictEqual(result, { 
    '36': 'age', 
    'Bruce Wayne': 'name', 
    Gotham: 'location' 
});

console.log("testInvert passed");