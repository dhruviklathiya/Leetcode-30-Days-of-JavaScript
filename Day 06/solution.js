const filter = (arr, fn) => {
    let filteredArr = []
    arr.forEach((num, i) => {
            if (fn(num,i)) {
                filteredArr.push(num)
            }
        })
    return filteredArr
}