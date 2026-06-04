const assert = require("assert");
const values = require("../values");

const testObject = {
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham"
};

const result = values(testObject);

assert.deepStrictEqual(result, ["Bruce Wayne", 36, "Gotham"]);

console.log("Values passed");