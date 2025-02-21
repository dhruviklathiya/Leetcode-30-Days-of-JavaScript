function isEmpty(obj) {
    return (Array.isArray(obj) ? obj.length : Object.keys(obj).length) === 0;
}
