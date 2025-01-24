var sortBy = function(arr, fn) {
    let sortedArr = []
    for(let i=0; i < arr.length; i++){
        fn(arr[i])
        sortedArr.push(fn(arr[i]))
    }
    return sortedArr.sort()
};

const fn = (element) => {
    console.log(element)
    if(typeof(element)=="object"){
        if(Array.isArray(element)){
            console.log("Array")
            return element[0]
        }
        for(key in element){
            console.log(key,":",element[key])
            return {key:element[key]}
            break
        }
    }
}