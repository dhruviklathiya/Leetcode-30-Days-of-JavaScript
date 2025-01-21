var createCounter = function(init) {
    let tempVar = init
    return {
        increment: function(){
            return tempVar+=1
        },
        decrement: function(){
            return tempVar-=1
        },
        reset: function(){
            tempVar = init
            return init
        }
    }
}