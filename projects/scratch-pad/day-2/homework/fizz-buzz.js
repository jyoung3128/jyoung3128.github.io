// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//use a for loop to loop thru the numbers 1-100 as stated in section a
for (let i = 1; i <= 100; i++){
    //if we hit a number that divides by 3 to a remainder of zero and the same for five 
    if (i % 3 === 0 && i % 5 === 0){
        //Once the index satisfies the condition it will execute the code 
        //and not look at the other statements
        //this is why 'FizzBuzz' goes first
        //print FizzBuzz
        //FIFTEEN WILL PRINT FIZZBUZZ BECAUSE IT DIVIDES EVENLY WITH BOTH 3 & 5
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        //otherwise just print the given number as indicated by i
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}