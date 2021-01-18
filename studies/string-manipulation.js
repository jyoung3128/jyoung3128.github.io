/*
 * STRING MANIPULATION:
 *
 * 0. Strings have the ability to be manipulated in javascript and this allows us to do many useful things
 * We can concatenate strings together making full sentence or names use methods to split strings, alter their appearance
 * join them with other strings. The possibilities are endless.
 *
 *
 *
 */

//WITH OPERATORS EXAMPLE
//the assignment operator is assigning the string 'Jake' to firstName  and the same happens with 'Young' and lastName
var firstName = 'Jake';
var lastName = 'Young';


//here using concatenation we combined Jacob and Young with a space in the middle since those strings aren't space
console.log(firstName + ' ' + lastName); //logs to the console 'Jacob Young


//here we use the comparison operator on strings
if (firstName.length < lastName.length){
    console.log('longer lastName'); //here we are using control flow to say if Jake's length which is 4 is less than Young's length which is 5 then print to the console longer lastName
}

if (!firstName.length < lastName.length){
    console.log('longer lastName'); //here we are using the bang operator which falsifies any logic and makes it say the opposite, therefore it will not log anything to the console
}

//WITH STRING METHODS

//toUpperCase
var greeting = 'hello';
greeting.toUpperCase(); //manipulates the string uppercasing each letter
console.log(greeting); // 'HELLO'

//slice for proper uppercasing
//here we are using the string method charAt to get the zeroth index which is the first character in the string 'hello'
//then uppercasing that letter we then want to concatenate that with the rest of the string using the slice method
console.log(greeting.charAt(0).toUpperCase() + greeting.slice(1)); //prints to the console "Hello"

//toLowerCase
var goodbye = 'BYE';
console.log(goodbye.toLowerCase()); //logs to the console bye


//split method -depending how you split string put the split string into an array
var string = 'string';


//here we use the split method to break our string at each individual character and puts them in an array
console.log(string.split('')); //logs to the console ['h', 'e', 'l', 'l', 'o']

//length - determines how many characters and spaces in a strings
var bigString = 'abcdefghi';
console.log(bigString.length); //logs to the console 9

//index
console.log(bigString[2]); //logs to the console the letter 'c' as it is at the second index of bigString