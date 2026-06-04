const assert = require("assert");
const keys = require("../keys");

const testObject = {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
};

const result = keys(testObject);

assert.deepStrictEqual(result, ["name", "age", "location"]);

console.log("Keys passed");