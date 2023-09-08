// Is palindrome
var isPalindrome = function(x) { // 1221
    // first if number is negative we return false, meaning it's not palindrome;
    if(x < 0) return false;
    // our variables
    let num = x;
    let reverse = 0;

    // we use a while . we keep going untill we get x = 0
    while( x > 0) {
        // multiply reverse by 10 and add the reminder
        reverse = reverse * 10 + ( x % 10 ) // 1
        
        // devide x by 10 and remove decimal point. if x === 0 then it exists the loop
        x = Math.floor(x / 10)

        console.log(`x = ${x}  reverse = ${reverse}`)
    }

    // now we are out of the while loop and we have the reverse number
    // lastly we compare the original number with the reverse. we use return and compare these two numbers
    // this will return True ( if they are equal ) or false( if they are not )
    return reverse === num;
};

console.log(isPalindrome(12233221));



// var isPalindrome = function(x) {
//     if(x < 0)  return false;
//     var newNum = Math.abs(x).toString();
//     var reversedNum = newNum.toString().split('').reverse().join('');
//     console.log(newNum, reversedNum)
//     if( newNum === reversedNum)  return true;
//
//     return false;
// };