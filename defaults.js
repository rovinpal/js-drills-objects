function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for (let key in defaultProps) {
        if (
            defaultProps.hasOwnProperty(key) &&
            obj[key] === undefined
        ) {
            obj[key] = defaultProps[key];
        }
    }

    return obj;
}


defaults(
    { name: "Bruce Wayne" },
    { age: 36, location: "Gotham" }
);

module.exports = defaults;