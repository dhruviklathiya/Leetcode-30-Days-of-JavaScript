var isEmpty = function(obj) {
    let result = true
    for (i in obj){
        if(i.length>=0){
            result = false
            break;
        }
    }
    return result
};