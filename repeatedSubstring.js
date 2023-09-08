/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const substring = s.slice(0, i);
            let repeated = "";
            for (let j = 0; j < n / i; j++) {
                repeated += substring;
            }
            if (repeated === s) return true;
        }
    }
    return false;
};

var repeatedSubstringPattern = function(s) {
    if (s.length===1){
        return false
    }
    let temp = ""
    for (let i = 0; i < s.length / 2; i++){
         while (temp.length < s.length){
             temp = temp + s.substring(0, i+1)
             
         }
        if (temp === s) {
            return true
        } else {
            temp = ""
        }
    }
    return temp === s;
};