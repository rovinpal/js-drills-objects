const assert = require("assert");
const pairs = require("../pairs");

const testObject = {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
};

const result = pairs(testObject);

assert.deepStrictEqual(result, [
    ["name", "Bruce Wayne"],
    ["age", 36],
    ["location", "Gotham"]
]);

console.log("testPairs passed");