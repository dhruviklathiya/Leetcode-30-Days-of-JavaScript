// This solution is easy to understand but it's not optimal solution
var createCounter = function(n) {
    storage = n
    return function() {
        storage+=1
        return (
            storage-1
        )
    };
};