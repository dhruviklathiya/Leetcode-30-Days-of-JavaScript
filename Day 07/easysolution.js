const reduce = (nums, fn, init) => {
    if(nums.length>0){
        currCummi = init
        nums.forEach((a)=>{
            currCummi = fn(currCummi,a)
        })
        return currCummi
    }else{
        return init
    }
}