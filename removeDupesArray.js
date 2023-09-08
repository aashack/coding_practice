let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


// Remove duplicates using filter

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });




// To find the duplicate values, you need to reverse the condition:

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let dupChars = chars.filter((c, index) => {
//     return chars.indexOf(c) !== index;
// });

// console.log(dupChars);




// remove from a array of objects

// const members = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'Johnny' },
//     { id: 4, name: 'Alice' },
//   ];
  
//   const newArray = members.map((m) => [m.id, m]);
//   const newMap = new Map(newArray);
//   const iterator = newMap.values();
//   const unique = [...iterator];
  
//   console.log(unique);