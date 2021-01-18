/*
 * LOOPS:
 *
 * 0. Loops are the ways in which we can access individual pieces of complex datatypes 
 * and manipulate them from within. Objects and arrays have different ways in which we 
 * are able to loop through them due to their unique makeup. Arrays are ordered lists and therefore
 * can be looped through via their index using a for loop. Objects do not have the convenience of an 
 * index so we use for in loops to access each individual key which will give us access to the values.
 *
 * 
 */

//FOR LOOP EXAMPLE - mainly used with arrays
//make a basic array to loop through
var arr = [1, 2, 3, 4, 5];
//Create a variable i which represents the index
//it will start at 0 which will grab the first element since it's at the zeroeth index
//and the I will go and grab every index till it reaches array.length
//Now how will we now how we are loop? With the increment in the third part of the for paranthesis which indicates we will increase the index by one each time
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]); //through each loop it attains the array value at whatever index is presented and logs to the console 1 2 3 4 5 at different lines
}
//reversing through this array
//you can also set up your for loop to reverse through an array
//set your start condition to the end of the array and your end condition at 0 and decrement this time!
for (let j = arr.length - 1; j >= 0; j--){
  console.log(arr[j]); //logs 5 4 3 2 1 on different lines
}

//WHILE LOOP EXAMPLE - the unwanted loop
var num = 5; //this while loop counts down from 5 WHILE five is greater than 0 so it will stop at one
while (num > 0){
    console.log(num); //still has the place to execute certain code while it's true
    num--; //still has the incrementer/decrementer variable 
}


//FOR IN LOOP EXAMPLE
var obj = {
    firstName: "Jacob",
    lastName: 'Young',
    age: 23
};
//for every key  in object we execute some kind of code and that's how we access the values through the keys
for (var key in obj){
    console.log(key); //logs to the console the keys of the object
    console.log(obj[key]); //logs to the console the values of the object 
}