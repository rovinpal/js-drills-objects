const assert = require("assert");
const defaults = require("../defaults");

const obj = {
    name: "Bruce Wayne",
    age: undefined
};

const defaultsObj = {
    age: 36,
    location: "Gotham"
};

const result = defaults(obj, defaultsObj);

assert.deepStrictEqual(result, {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
});

console.log("testDefaults passed");