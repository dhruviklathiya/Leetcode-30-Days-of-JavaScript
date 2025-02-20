function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length); // Store results in order
        let completed = 0; // Track resolved promises

        functions.forEach((fn, index) => {
            fn()
            .then(value => {
                results[index] = value; // Store result in correct index
                completed++;
                if (completed === functions.length) {
                    resolve(results); // Resolve when all are done
                }
            })
            .catch(reject); // Reject immediately on first error
        });
    });
}
