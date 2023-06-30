// Only Odds
// Create loop that runs through an array of numbers
const numbers1 = [2, 4, 6, 8, 11, 20, 15, 22];
// create an separate open array to receive odd numbers from original
const oddNumbers1 = [];
// Using the sequence of index numbers
// identify odd numbers by going one by one using i++
for (let i = 0; i < numbers1.length; i++) {
  // modulus operator will help identify odd numbers
  if (numbers1[i] % 2) {
    // Push will place odd numbers within their own new array
    oddNumbers1.push(numbers1[i]);
  }
}
console.log(oddNumbers1);

// Create loop that runs through an array of numbers
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// create an separate open array to receive odd numbers from original
const oddNumbers2 = [];
// Using the sequence of index numbers
// identify odd numbers by going one by one using i++
for (let i = 0; i < numbers2.length; i++) {
  // % will help identify odd numbers
  if (numbers2[i] % 2) {
    // Push will place odd numbers within their own new array
    oddNumbers2.push(numbers2[i]);
  }
}
console.log(oddNumbers2);

// Create loop that runs through all numbers within array
const numbers3 = [70, 42, 55, 81, 21, 91, 34];
// create an open array to receive add numbers
const oddNumbers3 = [];
// Using the sequence of index numbers
// identify odd numbers by going one by one using i++
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] % 2) {
    // Push will place odd numbers within their own new array
    oddNumbers3.push(numbers3[i]);
  }
}
console.log(oddNumbers3);

// Create loop that runs through all numbers within array
const numbers4 = [2, 4, 6, 8, 10, 11, 12];
// create an open array to receive add numbers
const oddNumbers4 = [];
// Using the sequence of index numbers
// identify odd numbers by going one by one using i++
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] % 2) {
    // Push will place odd numbers within their own new array
    oddNumbers4.push(numbers4[i]);
  }
}
console.log(oddNumbers4);



// Vowel Vs Consonant
// Start with word to test
const word = `hello`;
// set up vowel count
let vowelCount = 0;
// set up consonant count
let consonantCount = 0;
// use for loop to sift through word to count vowels and consonants
for (let i = 0; i <= word.length - 1; i++) {
  const letter = word[i];
  if (
    letter === `a` ||
    letter === `e` ||
    letter === `i` ||
    letter === `o` ||
    letter === `u`
  ) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}
// run console log using placeholders to contain variables inside the string
console.log(
  `${word} has ${consonantCount} consonants and ${vowelCount} vowels`
);

// Start with word to test
const word2 = `ukelele`;
// set up vowel count
let vowelCount2 = 0;
// set up consonant count
let consonantCount2 = 0;
// using for sift through word to count vowels and consonants
for (let i = 0; i <= word2.length - 1; i++) {
  const letter = word2[i];
  if (
    letter === `a` ||
    letter === `e` ||
    letter === `i` ||
    letter === `o` ||
    letter === `u`
  ) {
    vowelCount2++;
  } else {
    consonantCount2++;
  }
}
// run console log using placeholders to contain variables inside the string
console.log(
  `${word2} has ${consonantCount2} consonants and ${vowelCount2} vowels`
);

// Start with word to test
const word3 = `awesome`;
// set up vowel count
let vowelCount3 = 0;
// set up consonant count
let consonantCount3 = 0;
// using for sift through word to count vowels and consonants
for (let i = 0; i <= word3.length - 1; i++) {
  const letter = word3[i];
  if (
    letter === `a` ||
    letter === `e` ||
    letter === `i` ||
    letter === `o` ||
    letter === `u`
  ) {
    vowelCount3++;
  } else {
    consonantCount3++;
  }
}
// run console log using placeholders to contain variables inside the string
console.log(
  `${word3} has ${consonantCount3} consonants and ${vowelCount3} vowels`
);

// Start with word to test
const word4 = `onomonopia`;
// set up vowel count
let vowelCount4 = 0;
// set up consonant count
let consonantCount4 = 0;
// using for sift through word to count vowels and consonants
for (let i = 0; i <= word4.length - 1; i++) {
  const letter = word4[i];
  if (
    letter === `a` ||
    letter === `e` ||
    letter === `i` ||
    letter === `o` ||
    letter === `u`
  ) {
    vowelCount4++;
  } else {
    consonantCount4++;
  }
}
// run console log using placeholders to contain variables inside the string
console.log(
  `${word4} has ${consonantCount4} consonants and ${vowelCount4} vowels`
);

// Start with word to test
const word5 = `textbook`;
// set up vowel count
let vowelCount5 = 0;
// set up consonant count
let consonantCount5 = 0;
// using for sift through word to count vowels and consonants
for (let i = 0; i <= word5.length - 1; i++) {
  const letter = word5[i];
  if (
    letter === `a` ||
    letter === `e` ||
    letter === `i` ||
    letter === `o` ||
    letter === `u`
  ) {
    vowelCount5++;
  } else {
    consonantCount5++;
  }
}
// run console log using placeholders to contain variables inside the string
console.log(
  `${word5} has ${consonantCount5} consonants and ${vowelCount5} vowels`
);



// Reverse Array
// Build out array with 1,2,3
const array1 = [1, 2, 3];
// Apply .reverse to mutate the array in order to flip the numbers
const reversed1 = array1.reverse();
console.log(array1);

// Build out array with 1,3,5,7,9,11
const array2 = [1, 3, 5, 7, 9, 11];
// Apply .reverse to const array to flip the numbers
const reversed2 = array2.reverse();
console.log(array2);

// Build out array with 20,50,30,60,200
const array3 = [20, 50, 30, 60, 200];
// Apply .reverse to const array to flip the numbers
const reversed3 = array3.reverse();
console.log(array3);

// Build out array with 1,-1,2,-3,5,-8,13
const array4 = [1, -1, 2, -3, 5, -8, 13];
// Apply .reverse to const array to flip the numbers
const reversed4 = array4.reverse();
console.log(array4);



// FizzBuzz
// write a for loop that prints each number from 1 to 100 and advances one by one
for (let i = 1; i < 101; i++) {
    // for numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number
    // use if/else statments to separate the multiples
    // modulus operator will help check if the numbers are divisible by 15 as well as 3 and 5
    if (i % 15 === 0) console.log(`FizzBuzz`);
    // for each multiple of 3, print "Fizz" instead of the number
    // use else if statement here
    else if (i % 3 === 0) console.log(`Fizz`);
    // for each multiple of 5, print "Buzz" instead of the number
    // use another else if statement
    else if (i % 5 === 0) console.log(`Buzz`);
    else console.log(i);
  }