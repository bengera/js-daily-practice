/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('------------slice-------------------')
console.log(animals.slice(2));
console.log(animals.slice(1,3));
console.log(animals.slice(0,-1));
let shallowCopy = animals.slice();
console.log(shallowCopy);


console.log('------------reverse-------------------')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.splice(1,4).reverse());
// console.log(numbers.splice(2).reverse()); // dont use second argument to get to the end
console.log(numbers.splice(0,3).reverse());


console.log('------------concat-------------------')
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = ['g', 'h', 'i'];
const arr4 = ['j', 'k', 'l'];

console.log([...arr1,...arr2]); // spread operator - use brackets to make array
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));
console.log(arr1.concat(arr2,arr3,arr4));
console.log(arr2.concat(arr3,arr4));

console.log('------------join-------------------')
const elements = ['Fire', 'Air', 'Water', 'Earth'];

console.log([elements.join('-')]) // to array
console.log(elements.join(' '))
console.log(elements.join(','))
console.log(elements.join(':'))

console.log('------------at-------------------')
const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

console.log(array1.at(0));
console.log(array1.at(-1)); // get last element
console.log(array1.at(5)); 
console.log(array1.at(6)); 


console.log('------------FINAL CHALLENGE-------------------')
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

function arrayChallenge(arr1, arr2) {
    return arr1.concat(arr2).reverse().slice(1, -1).join(',');
}

console.log(arrayChallenge(arr1, arr2));  // Should print: "e,d,c,b"

*/
function checkDogs(arr1,arr2) {
    const data = arr1.slice(1,-1).concat(arr2);
    data.forEach(function(age, idx){
        if (age >= 5){
            console.log(`Dog ${idx} is ${age} and is an adult`)
        } else {
            console.log(`Dog ${idx} is ${age} and is still a puppy`)
        }
    })

    }


checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('----------------------------------------')
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
console.log("%c Test Data","font-size:'32px'; background:cyan; color:black;")