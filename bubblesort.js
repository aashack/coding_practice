function bubbleSort(arr) {

    for( let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length - i -1; j++) {
            if (arr[j+1] < arr[j]) {
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
            }
        }
    }
    return arr;

}

console.log(bubbleSort([5,3,8,4,6]));


// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j+1] < arr[j]) {
//             [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
//         }
//     }
//     return arr;
// }