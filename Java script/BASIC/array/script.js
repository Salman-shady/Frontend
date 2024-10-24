// let numbers = [1, 2, 3, 4, 5]; // Array of numbers
// let fruits = ['Apple', 'Banana', 'Orange']; // Array of strings
// let mixed = [1, 'hello', true]; // Array with mixed data types

// console.log(typeof numbers, typeof fruits, typeof mixed); //horizontal line

// console.log(typeof numbers + '' + typeof fruits + '' + typeof mixed); //remove white space

// console.log(`Type of numbers: ${typeof numbers}\nType of fruits: ${typeof fruits}\nType of mixed: ${typeof mixed}`); //using Escape sequence

let numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number);
});


for (let number of numbers) {
  console.log(number);
}


for (let length in numbers) {
  console.log(numbers[length]);
}
