// function partition(items, left, right) {
//   //rem that left and right are pointers.

//   let pivot = items[Math.floor((right + left) / 2)],
//     i = left, //left pointer
//     j = right; //right pointer

//   while (i <= j) {
//     //increment left pointer if the value is less than the pivot
//     while (items[i] < pivot) {
//       i++;
//     }

//     //decrement right pointer if the value is more than the pivot
//     while (items[j] > pivot) {
//       j--;
//     }

//     //else we swap.
//     if (i <= j) {
//       [items[i], items[j]] = [items[j], items[i]];
//       i++;
//       j--;
//     }
//   }

//   //return the left pointer
//   return i;
// }

// function quickSort(items, left, right) {
//   let index;

//   if (items.length > 1) {
//     index = partition(items, left, right); //get the left pointer returned

//     if (left < index - 1) {
//       //more elements on the left side
//       quickSort(items, left, index - 1);
//     }

//     if (index < right) {
//       //more elements on the right side
//       quickSort(items, index, right);
//     }
//   }

//   return items; //return the sorted array
// }

// let items = [5, 3, 7, 6, 2, 9,4,7,2,9,44,0,0,1,3,2];

// console.log(quickSort(items, 0, items.length - 1));


// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// };



//----------------------

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
          left.push(array[i])
        } else {
          right.push(array[i])
        }
    // array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log('Sorted array', sorted);