var chunk = function(arr, size) {
    const numberOfSubArray = Math.ceil(parseFloat(arr.length/size))
    console.log(numberOfSubArray)
    const chunkedArray = []
            ind=0
        for(let i =0; i<numberOfSubArray;i++){
            let subChunk = []
            for(let j=0; j <size; j++){
                if(arr[ind]!=undefined){
                    subChunk.push(arr[ind])
                }
                ind++
            }
            chunkedArray.push(subChunk)
        }
    return chunkedArray
};