/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;

    return fib(n - 1) + fib(n - 2)
};



// var fib = function (n) {
//   if (n == 0) return 0;

//   let prev = 0,
//     cur = 1,
//     temp;

//   for (let i = 1; i < n; i++) {
//     temp = cur;
//     cur = cur + prev;
//     prev = temp;
//   }

//   return cur;
// };