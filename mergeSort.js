/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// // L33t code wierdness
// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1; // last element of nums1 which is now 3
//     let j = n - 1; // last element of nums2 which is now 6
//     let k = m + n - 1 // last element of nums1 which is now 0
    
//      while(j >= 0){

//       if(i >= 0 && nums1[i] > nums2[j]){

//         nums1[k--] = nums1[i--]

//       }else {
//         nums1[k--] = nums2[j--]

//       }
//     }

//     return {nums1, nums2};
//   };

//   console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here

  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr
  } 
  // get the middle array value;
  let mid = Math.floor(arr.length / 2);

  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([3, 5, 8, 5, 99, 1, 2 ,4 ,5, 7, 12, 87, 99, 34,44]));
