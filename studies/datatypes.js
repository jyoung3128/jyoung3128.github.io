/*
 * DATATYPES:
 *
 * 0. If variables are container in which we store things then datatypes are the 'things' we
 * store. There are several different datatypes we can use and manipulate to create logic. 
 * Some of the main datatypes are numbers(numerical values), booleans(true or false), and strings(textual data wrapped in quotes)
 * which are the simple datatypes. You also have the complex datatypes: arrays(bracketed list),
 * objects(curly braces containing properties), and functions(executable code in javascript).
 * The beauty of all these datatypes is that they do not stand alone but rather can be used in conjuction with each other.
 *
 * 1. Primitive datatypes are immutable or unchanging. Like if I have the number five there's not much else I can do with it.
 * but with an array I can create lists that actually represent useful things like a grocery list or I could create
 * a family object that gives people insight into my brothers and parents and what they are like. Simple datatypes are the building
 * blocks and complex datatypes are the structures we work with.
 *
 * 
 * 
 */

//NUMBER EXAMPLE
var number = 5; //for this example declare number and assigned it the value 5
//numbers can be decimals also negative
console.log(number) //prints 5 to the console 

//STRING EXAMPLE
var stringName = 'Jacob'; //notice my name is wrapped in quotes this is the key feature of strings
console.log(stringName) //prints to the console Jacob

//BOOLEAN EXAMPLE true or false
var isBoy = true; //notice true or false don't need and quotes cause they are a different datatype: the boolean
//I am a boy so I set the variable to true
console.log(isBoy); //prints true to the console

//ARRAY EXAMPLE
var myArr = [1, 'Jake', true]; //this is an array containing all the previous datatypes
myArr[1]; //this access the first index of the array which is the second element so 'Jake'
console.log(myArr); //prints the entire array to the console

//OBJECT EXAMPLE
var myObj = { //notice you must use curly braces to encapsulate objects
    arr: myArr, //I can add the entire array I previously made to the value part of the property
    name: "Jacob", //use colons to separate key-value pairs //use commas to seperate properties
    isTall: true
}; //you can also add to objects 
myObj.lastName = 'Young'; //adds this property to myObj

//FUNCTION EXAMPLE
//this is a function declaration: declaration starts with the word 'function' then you give it an appropriate name
function add(x, y){ //here I built an add function so that's why I named it add
//this function takes in two parameters(which will represent the two numbers we want to pass in when we call the function)
    return x + y;
} 
/* //You can also use function expressions which take the whole function and assign it to a variable 
var add = function(x, y){ //NOTE: FUNCTION DECLARATIONS ARE HOISTED BUT NOT FUNCTION EXPRESSIONS
  return x + y;
}
*/
add(5, 3); //will  call the function passing in the ARGUMENTS five and three and return them concatenated giving us 8

//UNDEFINED EXAMPLE
var x; //here we have an example of undefined where we declared a variable but then never assigned it a value ourselves HOWEVER javascript gives it the value of undefined 

//NULL EXAMPLE - While undefined recognizes a variable exist null is the absence of data
null == undefined; //true
null === undefined; //false

//NaN EXAMPLE - NaN stands for Not a Number and is a value in javascript that identifies non number datatypes from numbers
var num = 6;
var nonNum = 'hey';
isNaN(num); //yields true since 6 is a number
isNaN(nonNum); //yields false since 'hey' is a string

//Infinity and -Infinity EXAMPLE values that represent the enumarable concept of infinity on either spectrum(+, -)
var forever = Infinity; 
console.log(forever); //prints Infinity to the console
var never = -Infinity;
console.log(never);

//COPY BY VALUE EXAMPLE
var j = 5;
var y = j; //here we set y to j
y = 3; //so when we change y to 3 we may expect j to update but this is not the case j remains 5
console.log(j) //prints 5

//COPY BY REFERENCE EXAMPLE
var e = [1, 2, 3];
var q = e; //here we have a complex datatype: an array and assign q to the value e
q.push(4); //now when we update q we infact update e as well so they both are updated
console.log(e);