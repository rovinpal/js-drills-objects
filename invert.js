function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    const result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }

    return result;
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

invert(testObject);

module.exports = invert;