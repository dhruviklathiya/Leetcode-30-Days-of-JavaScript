// This solution is not easy to understand but it's optimal solution
const createCounter = (n) => {
    return function(){
        return  n++;
    }
}