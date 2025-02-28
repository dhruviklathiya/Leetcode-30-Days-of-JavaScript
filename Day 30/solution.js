var joinArraysById = function(arr1, arr2) {
    const map = new Map();

    // Process arr1
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }

    // Process arr2, merging or adding objects
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }

    // Convert map back to an array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
