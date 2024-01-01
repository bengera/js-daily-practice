/********************************
 ********************************
Array methods
************
 forEach(), map(), Sets, forEach with Sets
 ********************************
 ********************************/

 console.log('------------forEach-------------------')
 const numbers = [1, 2, 3, 4, 5];
/*
//  numbers.forEach((num) => {
//     console.log(num);
//  })

// numbers.forEach((num) => {
//    console.log(num * 2);
// })
let total = 1;

// numbers.forEach((num) => {
//    total += num;
    
//  })

//  console.log(total);
 
numbers.forEach((num) => {
    total *= num;
})

console.log(total);
*/

console.log('------------map-------------------')
const words = ['apple', 'banana', 'cherry'];

// const capitilizeWords = words.map(word => word.toUpperCase());
// console.log(words);
// console.log(capitilizeWords);

// const reversedWords = words.map(word => word.split('').reverse().join(''));
// console.log(reversedWords);

// const checkLength = words.map(word => word.length);
// console.log(words);
// console.log(checkLength);

// const onlyFirstLetter = words.map(word => word.charAt([0]));
// console.log(onlyFirstLetter);


console.log('------------Sets-------------------')
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// const merged = new Set([...setA,...setB]);
// console.log(merged);

// const isSubset = [...setA].every(elem => setB.has(elem));
// console.log(isSubset);
// const uniqueSet = new Set([...setA,...setB])
// console.log(uniqueSet);

console.log('------------forEach with Sets-------------------')
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);

