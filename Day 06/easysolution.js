var filter = function(arr, fn) {
    let newArr = []
    for(let i=0; i < arr.length; i++){
        if(fn(arr[i],i)){
            newArr.push(arr[i])
        }
    }
    return newArr
};

function greaterThan10(n) { return n > 10; }

const result = filter([1,2,3,4,5,6,11,12,13],greaterThan10)
console.log(result)