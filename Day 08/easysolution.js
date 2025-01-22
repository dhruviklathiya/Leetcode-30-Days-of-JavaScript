var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc, curr) => curr(acc), x);
    }
}