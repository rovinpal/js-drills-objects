const assert = require("assert");
const mapObject = require("../mapObject");

const testObject = {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
};

const result = mapObject(testObject, (value) => {
    if (typeof value === "number") return value;
    return value;
});

assert.deepStrictEqual(result, {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
});

console.log("mapObject passed");