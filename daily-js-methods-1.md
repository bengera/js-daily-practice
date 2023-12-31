# Array methods

This is a daily warmup routine to keep JavaScript array methods fresh in your memory. Follow each instruction:

1. Recall verbally what the method does. 
2. Write the syntax for the method.
3. Do the 3-4 challenges below.
4. Explain verbally what is happening in the code and how it works to identify gaps in knowledge.
```
🟢 Completed
🟠 Completed but with assistance or looking up how it is done
🔴 Failed
```

## slice() ##
```const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];```

Challenges:
1. Remove the first 2 elements of the array 🟢
2. Remove the elements in the array from the 2nd to the 4th 🟠
3. Remove only the last element of the array 🟢
4. Create a shallow copy of the array. 🟢

## reverse() ##
```const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];```

**Challenges:**
1. Reverse the order of the array. 🟢
2. Reverse the order of a slice of the array from the 2nd to the 5th element.🟢
3. Reverse the order of a slice of the array from the 3rd to the last element. 🟢
4. Reverse the order of a slice of the array from the 1st to the 3rd element. 🟢


## concat() ##

``const arr1 = ['a', 'b', 'c'];``

``const arr2 = ['d', 'e', 'f'];``

``const arr3 = ['g', 'h', 'i'];``

``const arr4 = ['j', 'k', 'l'];``

**Challenges:**
1. Concatenate arr1 and arr2. 🟢
2. Concatenate arr1, arr2, and arr3. 🟢
3. Concatenate arr1, arr2, arr3, and arr4. 🟢
4. Concatenate arr2, arr3, and arr4. 🟢



## join() ##
```const elements = ['Fire', 'Air', 'Water', 'Earth'];```

**Challenges:**
1. Join the elements of the array into a string, separated by a hyphen. 🟢
2. Join the elements of the array into a string, separated by a space. 🟢
3. Join the elements of the array into a string, separated by a comma. 🟢
4. Join the elements of the array into a string, separated by a colon. 🟢


## at() ##
```const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];```

**Challenges:**
1. Get the first element of the array using at(). 🟢
2. Get the last element of the array using at(). 🟢
3. Get the 5th element of the array using at(). 🟢
4. Get the 7th element of the array using at(). 🟢

## Final Challenge ##

You have two arrays, arr1 and arr2. Your task is to write a function that does the following:

1. Concatenates arr1 and arr2. 🟢
2. Reverses the new array. 🟢
3. Removes the first and last elements of the array. 🟢
4. Joins the elements of the array into a string, separated by a comma. 🟢
5. Returns the resulting string. 🟢

Use the following arrays to test your function:

```js const arr1 = ['a', 'b', 'c'];
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

*/

function arrayChallenge(arr1, arr2) {
    // Your code here
}

console.log(arrayChallenge(arr1, arr2));  // Should print: "e,d,c,b"
```

Coding Challenge #1
```
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 

is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

4. Run the function for both test datasets.```
```
Test data:

```
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
```

```JS
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
```
