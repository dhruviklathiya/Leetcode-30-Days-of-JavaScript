var expect = function(val) {
    return {
        toBe: function(something) {
                if(val===something){
                    return true
                }
                else{
                    throw new Error("Not Equal")
                }
        },
        notToBe: function(something) {
            if(val!==something){
                    return true
                }
                else{
                    throw new Error("Equal")
                }
        }
    };
}