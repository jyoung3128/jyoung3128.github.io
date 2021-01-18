/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. There are three different variables
 * we can choose from to make our declarations thanks to ES6: var, let and CONST. Var was the original
 * variable used for declaration. Var allows it's values to be redeclared and reassigned
 * which differs from let(cannot be used to redeclare the same variable) and CONST(can be neither redeclared nor reassigned)
 * If you think of the variables as placeholders or boxes CONST would be a specific box and nothing else
 * For example, say one declares a shoe variable with Const. In this example, the 'box' would be a shoe box
 * and therefore could not be a container for anything else. You can't expect a shoe box to fit 
 * a television. That's kind of how Const works in coding.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3. Hoisting is a concept that is done in the background before the total execution phase
 * and states that in javascript var is hoisted to the top and let and const are not
 * meaning that if we console.logged the values of let and const prior to them being declared 
 * we get an error whereas with var the variable is hoisted so it would be represented by undefined.
 *
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//LET EXAMPLE
let teacher = 'Ryan'; //perfectly fine but below we attempt to redeclare which isn't allow with let
//let teacher = 'Taylor' //and gives you a syntax error indicating that teacher was already declared



//CONST EXAMPLE
const firstNames = 'Jacob'; //const is useful in this scenario because my first Name will never change
//firstName = 'Kyle' //This will throw an error stating that const variables cannot be redeclared(TypeError)

//HOISTING
console.log(hoisty); //prints undefined because var is hoisted
var hoisty;
//console.log(notHoisty); //reference error let is not hoisted
//let notHoisty;
//console.log(noHoist) //prints error to the console const is not hoisteds
//const noHoist;