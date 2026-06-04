function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    const result = [];

    for (let key in obj) {
        if (
            obj.hasOwnProperty(key) &&
            typeof obj[key] !== "function"
        ) {
            result.push(obj[key]);
        }
    }

    return result;
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

values(testObject);

module.exports = values;