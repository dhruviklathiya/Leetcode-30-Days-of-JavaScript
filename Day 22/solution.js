function debounce(fn, t) {
    let timer = null; // Store the timeout reference

    return function(...args) {
        clearTimeout(timer); // Cancel any previous scheduled execution
        timer = setTimeout(() => fn(...args), t); // Schedule a new execution
    };
}
