var compose = function(functions) {
    return x => functions.reduceRight((acc, curr) => curr(acc), x);
}