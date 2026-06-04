function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject

    const result = {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = cb(obj[key], key, obj);
        }
    }
    return result;
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

mapObject(testObject, value =>
    typeof value === "number" ? value + 1 : value
);

module.exports = mapObject;