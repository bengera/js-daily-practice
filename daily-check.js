// Make a list of random numbers from 1 to 10, list should take number as parameter
function makeRandomNumbers(num){
    for (i = 0; i < num; i++){
        let x = Math.round(Math.random() * 10);
        console.log(x);
    }
        
    
}


console.log(makeRandomNumbers(114));
// // Arrays

// // Create an array of numbers, 1 through 10
// const x = Array.from({length: 10}, (_, i) => i + 1);
// console.log(x);


// // Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
// // function forLoop(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //       console.log(arr[i]);
// //     }
// //     return arr;
// //   }
  

// // console.log(forLoop([1,2,3,4,5]))
// // Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

// function whileLoop(arr) {
//     while()
// }
// console.log(forLoop([1,2,3,4,5]))

// // Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.


