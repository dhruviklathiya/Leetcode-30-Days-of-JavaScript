const reduce = (nums, fn, init) => {
    let currCummi = init;
    for (let i = 0; i < nums.length; i++) {
        currCummi = fn(currCummi, nums[i]);
    }
    return currCummi;
};
