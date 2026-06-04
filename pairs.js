function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    const result = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }

    return result;
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

pairs(testObject);

module.exports = pairs;