/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     const map = new Map();
//     for (let i = 0; i<nums.length; i++) {
//         if( map.has(target - nums[i])) {
//             return [i, map.get(target - nums[i])];
//         }
//         map.set(nums[i], i);

//     }
//     return [-1,-1];
// };


var twoSum = function(nums, target) {
    const indices = new Map();

    for( let i = 0; i < nums.length; i++) {
        const secondNumber = target - nums[i];

        if (indices.has(secondNumber)) {
            return [indices.get(secondNumber), i];
        }

        indices.set(nums[i], i)
    }
};