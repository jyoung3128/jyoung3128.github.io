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

//ASSIGNMENT OPERATOR one of the most fundamental
var value = 3;
//using the equal sign we assign 3 the value of value

//COMPARSION OPERATOR EXAMPLE
if (num < value){
    console.log('facts'); //will log facts because 2 is less than 3
}

//ARITHMETIC OPERATORS
num += 5; //adding 5 to num
console.log(num); //logs to the console 7

value *= 3;
console.log(value); //logs 9 to the console

//Ternary EXAMPLE
let age = 21;
//the ternary operator is a different way to do control flow and basically the canDrink variable
//compares our previously made age variable with 21 which is the legal drinking age so we want to pour up
//if this person can drink but send them home if they are not within the legal drinking age and this logic helps us
var canDrink = age >= 21 ? 'drink up' : 'get out the bar';
console.log(canDrink); //logs to the console 'drink up' since age is equal to 21; had it been 20, the console would have logged 'get out the bar'

//UNARY EXAMPLE
//typeOf allows us to determine what datatype we are working with useful when dealing with collections
console.log(typeof(age)); //logs to the console number because age is assigned the value 21