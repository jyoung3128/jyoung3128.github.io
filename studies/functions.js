/*
 * FUNCTIONS:
 *
 * 0. IF you've ever studied javascript then you have heard the classic phrase
 * functions are executable code in javascript but what exactly does that mean. 
 * Well when you think of the word function you typically think of something 
 * doable or in motion or a process. Well we can have these in javascript.
 * Now how do we make a function? Like many things in javascript 
 * we declare them. But after we declare one and create it, it justs sits there
 * till we act upon it. The way we act upon a function is by calling it.
 * This will be easier to visualize with some examples.
 * 
 * When we think of parameters and arguments in Javascript we want to imagine the car factory analogy
 * When building a car making function we want the parameters to satisfy the build of any car we need to manufacture
 * We don't want to specifically make a toyota function with parameters that only take in stuff for toyota
 * because we are a car factory for all cars. Your parameters need to be general so that your arguments 
 * can be for any car. Below we have the adder function which has two parameters: x and y
 * x and y are general enough that we can put in two numbers and add them or even two strings and concatenate them.
 * The strings and numbers would be the actual arguments we are passing in.
 * 
 * Function declarations are hoisted to the top of the scope before code execution so this allows us to invoke the function wherever 
 * we want in our code. Down below we have an adder function declaraton that when invoked adds the to input numbers.
 * Whether I invoke it above or below the function does not matter since it's hoisted.
 *
 * Function expressions on the other hand are not hoisted to the top so we cannot invoke where we please but have to
 * after the function was established
 *
 */

//BUILDING AN ADD FUNCTION
//this is a function declaration: declaration starts with the word 'function' then you give it an appropriate name
function adder(x, y){ //here I built an add function so that's why I named it add
//this function takes in two parameters(which will represent the two numbers we want to pass in when we call the function)
    return x + y;
} 

//You can also use function expressions which take the whole function and assign it to a variable 

var subtract = function(x, y){ //NOTE: FUNCTION DECLARATIONS ARE HOISTED BUT NOT FUNCTION EXPRESSIONS
  return x - y;
};
subtract(5, 3); //logs 2
//the arguments are literal values whereas as the parameters need to be general placeholders so they can be used and reused

adder(5, 3); //will  call the function passing in the ARGUMENTS five and three and return them concatenated giving us 8

//Functions dont have to take parameters
//here our function execute has no parameters; parameters are optional
function execute(){
    console.log("hey");
}
execute(); //when we call it will go into our function and print hey to the console

//First Class Functions and Scope

//here we created an add function factory where we can set up any two numbers to be concatenated
function add(x){
  //console.log(subtraction); //this however doesn't work because the parent function scope doesn't recognize values declared in the child scope
  
  var addition = "yay math";
  
  return function(y){
      
   //var subtraction = 'boo math'; //declared in the child scope and attempting to console log in parent scope to show closure
   
    console.log(addition); //this will log because the child scope remembers parent scope variables
    
    return x + y; //Notice how the x parameter is able to be used in the child function
  };
}


let add3 = add(3); //declares a variable that takes in 3 as the argument for x so whatever y is will get 3 added to it

console.log(add3(6)); //prints to the console yay math and 9

 console.log(add3(7)); //prints to the console yay math and 10
 
let add5 = add(5); //declares a variable that takes in 5 as the argument for x so whatever y is will get 5 added to it

 console.log(add5(6)); //prints yay math and 11 to the console
 
 console.log(add5(7)); //prints yay math and 12 to the console


