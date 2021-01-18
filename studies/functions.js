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
 *
 * 
 *
 *
 *
 */

//BUILDING AN ADD FUNCTION
//this is a function declaration: declaration starts with the word 'function' then you give it an appropriate name
function add(x, y){ //here I built an add function so that's why I named it add
//this function takes in two parameters(which will represent the two numbers we want to pass in when we call the function)
    return x + y;
} 

//You can also use function expressions which take the whole function and assign it to a variable 

var subtract = function(x, y){ //NOTE: FUNCTION DECLARATIONS ARE HOISTED BUT NOT FUNCTION EXPRESSIONS
  return x - y;
};
subtract(5, 3); //logs 2
//the arguments are literal values whereas as the parameters need to be general placeholders so they can be used and reused

add(5, 3); //will  call the function passing in the ARGUMENTS five and three and return them concatenated giving us 8

//Functions dont have to take parameters
//here our function execute has no parameters; parameters are optional
function execute(){
    console.log("hey");
}
execute(); //when we call it will go into our function and print hey to the console