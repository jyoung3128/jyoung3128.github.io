/*
 * CONTROL FLOW:
 *
 * 0. CONTROL FLOW is crucial for helping us develop our logical roadmap
 * in javascript. This concept is highlighted by chain statements linked together by if, else if, and can end with ELSE. IF is always
 * the starting word of your control flow statement or expression
 * and you typically have the IF ELSE option middle statements in scenarios when your dealing
 * with a lot of potential lanes to flow to. Finally you usually end control flow using an 
 * else statement which is what the logic will default to when all if and if else statements
 * do not yield true logic. That being said you do not need an else statement, as you can put your default logic at the
 * end of your coding block and it will default to it if the if and else if statements are not satisfied
 * 
 *
 *
 */
 
 //CONTROL FLOW EXAMPLE
var num = 8;
var bigNum = 10;
//if 10 is less than 8 which we know is not true
if (bigNum < num){
    
    console.log('IF'); //log 'IF'
    
    //it will move on from the if since the logic was wrong
    //the else if logic states if 10 is equal to 8 
} else if (bigNum === num){
    
    console.log('ELSE IF'); //log 'ELSE IF'
    //this logic was also incorrect so it will default to the else
} else { //notice else doesn't need any of its own logic cause it's basically all the above were wrong so do this

    console.log("ELSE FOR THE WIN"); //will log else for the win 
}

//CONTROL FLOW EXAMPLE WITH MULTIPLE CORRECT LOGIC
let x = 3;
if (x > 3){
    console.log('big')
} else if (x === 3){ 
    console.log('three') //only logs 'three' to the console
} else if (x <= 3) {
    console.log('small')
}
//In this example the first and second ELSE IF are correct logic however in control flow once one statement is 
//satisfied it will execute that code block and exit out the conditional
//In other words, it won't even consider 'else if x < 3' because it already saw x === 3


//EXAMPLE WITH MULTIPLE IF STATEMENTS
let y = 4;
if (y === 4){ //Now say I used a bang operator to make this conditional false; The logic would still advance
              //to the second if statement and log 'boo' to the console
    console.log('big')
} if (y < 5){           //Will log both if statements since they satisfy their conditional
  console.log('boo')
}
   

//SWITCH EXAMPLE

switch(num) {
    case bigNum: //since bigNum is 10 and num is 8 it will not execute bigNum's console.log statement 
        console.log("wrong");
        break; //the break statement is required in switch statements
    case num: //since num matches the switch expression it will log Right
    console.log('Right');
    
}
