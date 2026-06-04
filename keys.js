function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    const result = [];

    for(let key in obj){
        if(obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}


const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

keys(testObject);

module.exports = keys;