/*
 * CONTROL FLOW:
 *
 * 0. CONTROL is crucial for helping us develop our logical roadmap
 * in javascript. Loops are key to forming sentence logic. IF is always
 * the starting word of your control flow statement or expression
 * and you typically have the IF ELSE option middle statements in scenarios when your dealing
 * with a lot of potential lanes to flow to. Finally you always end control flow using an 
 * else statement which is what the logical will default to when all if and if else statements
 * do not yield true logic.
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

//SWITCH EXAMPLE

switch(num) {
    case bigNum: //since bigNum is 10 and num is 8 it will not execute bigNum's console.log statement 
        console.log("wrong");
        break; //the break statement is required in switch statements
    case num: //since num matches the switch expression it will log Right
    console.log('Right');
    
}
