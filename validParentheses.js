/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s === null || s.length <= 0){
         return true;
    }
    let cArray = s.split('');
    
    var stack = [];
    
    for (var x of cArray) {
        if (x === '[') {
            stack.push(']');
        }
        else if(x === '{') {
             stack.push('}');
        }
        else if(x === '(') {
            stack.push(')');
        } 
        else if (stack.length === 0 || x !== stack.pop()){
            return false; 
        }
    }
    
    return stack.length === 0
};