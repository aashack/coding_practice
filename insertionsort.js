
// function insertionSort(arr) {

//     for (let i = 0; i< arr.length; i++) {
        
//         for(let j = i - 1; j > -1; j--) {
//             if(arr[j+1] < arr[j]) {
                    // swap the two array values around
//                 [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
//             }
//         }
//     }
//     return arr;
// }
// O(n^2).
// console.log(insertionSort([23, 1, 10, 5, 2]));


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
//O(n*n).
  console.log(insertionSort([23, 1, 10, 5, 2]));


//   const insertionSort = (array) => {
//     for (let i = 1; i < array.length; i++) {
//       let currentElement = array[i];
//       let lastIndex = i - 1;
  
//       while (lastIndex >= 0 && array[lastIndex] > currentElement) {
//         array[lastIndex + 1] = array[lastIndex];
//         lastIndex--;
//       }
//       array[lastIndex + 1] = currentElement;
//     }
  
//     return array;
//   };