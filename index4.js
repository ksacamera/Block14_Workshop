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
