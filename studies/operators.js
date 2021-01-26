/*
 * OPERATORS:
 *
 * 0. Operators are essentially how we act on our data and make the logic bend in some way
 * Operators are the very foundation of assigning variables to values they are the bridge in this sense 
 * in javascript
 *
 * 1. Logical Operators deal with NOT(!) OR(||)and AND(&&)
 *
 * 2. Comparison Operators deal with greater than(>, >=) and less than(<, <=)
 *
 * 3. Assignment Operators deal with creating variables using the equal sign(=)
 *
 * 4. Arithmetic Operators deal in adding(+), subtracting(-), dividing(/), and multiplying(*)
 *
 * 
 * 
 *
 *
 */

//LOGICAL OPERATORS
if (!true){
    console.log('Hey'); //here we are using the bang operator to say if not true console.log("HEY") so it won't log to the console
}
var num = 2;
//and operator //or would also work in this scenario but only one of the logical statements would have to apply
if (num === 2 && num > 0){
    console.log('here we go'); //will log to the console because num is equal to 2 and 2 is greater than 0
}
//OR operator//
//Even tho num is 2 which is clearly not greater than 100 the console will log Eureka BECAUSE the second condition is true
//The OR operator only needs one condition satisfied
if (num > 100 || num === 2){
    console.log('Eureka');
}

//ASSIGNMENT OPERATOR one of the most fundamental
var value = 3;
//using the equal sign we assign 3 the value of value
var anotherVal = 3;

//Strictly equals//
//if 3 is strictly equal to 3 - true
if (anotherVal === value){ //here these values are both three so they will strictly equal each other
    console.log('These values strictly equal each other'); //will log
}
//STRICTLY NOT EQUALS//
//if 3 is not strictly equal to 3 - false
if (anotherVal !== value){ //here these values do strictly equal each other so the bang will cause the conditional to be false
    console.log('This string is forever list'); //will not log
}



//COMPARSION OPERATOR EXAMPLE - LESS THAN
//the less than operator tests if the first value is less than the second if so execute the code block
if (num < value){
    console.log('facts'); //will log facts because 2 is less than 3
}
//LESSTHAN/EQUAL TO
//this states if 3 is less than OR equal to 3 then EXECUTE the code block
if (value <= anotherVal){
    console.log('Not less than but equal to');
}

//COMPARISON OPERATOR EXAMPLE - GREATER THAN
if (value > num){
    console.log('value is king'); // logs because 3 is greater than 2
}
//GREATER THAN/EQUAL TO
//this states if 3 is greater than OR equal to 3 then EXECUTE the code block
if (value >= anotherVal){
    console.log('Not greater than but equal to');
}



//Remainder Operator - represented by the percent symbol(%) and creates and expressions that results in the remainder of the quotient of two values
//here we assign remainder to the result of the expression 5 % 2
// 2 can divide into 5 evenly 2 times which is 4 leaving the remainder of 1
var remainder = 5 % 2;
console.log(remainder); //logs 1 to the console

//ARITHMETIC OPERATORS w/Assignment
let z = 15;
let sub = 4;
//Addition
num += 5; //adding 5 to num and assigns the result of this expression to num
console.log(num); //logs to the console 7

//Multiplication Assignment
value *= 3;  //Multiplies value which is 3 times 3 and assigns the result of this expression to value
console.log(value); //logs 9 to the console

//DIVISION
z /= 5; //Divides 15 by 5 and assigns the result of this expression to z
console.log(z); //logs 3 to the console

//SUBTRACTION
sub -= 3; //Subtracts 3 from 4 and assigns the result of this expression to sub
console.log(sub); //logs 1 to the console

//Ternary EXAMPLE
let age = 21;
//the ternary operator is a different way to do control flow and basically the canDrink variable
//compares our previously made age variable with 21 which is the legal drinking age so we want to pour up
//if this person can drink but send them home if they are not within the legal drinking age and this logic helps us
var canDrink = age >= 21 ? 'drink up' : 'get out the bar';
console.log(canDrink); //logs to the console 'drink up' since age is equal to 21; had it been 20, the console would have logged 'get out the bar'

//UNARY EXAMPLE - Unary Operators are aptly named because they work with one value at a given time
//UNARY operators effect one datatype at a time
//typeOf allows us to determine what datatype we are working with useful when dealing with collections
console.log(typeof(age)); //logs to the console number because age is assigned the value 21
//This unary operator is working with the one value 7
let unary = 7;
//here we use the operator to increase the number by 1
unary++;
console.log(unary); //logs 8 to the console