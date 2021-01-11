// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //so this was interesting
    //my logic was that in first class function we want to return a function so I returned one that I could test against the base
    return function(x){
        //if x(a given string or number value is greater than the base value) then the statement is true
        if (x > base){
            //I was not sure if I was supposed to right true or false but I see now that's how we wanted to determine which is greater
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        return function(x){
            //flip the sign to express a x being less than 
        if (x < base){
            //I was not sure if I was supposed to right true or false but I see now that's how we wanted to determine which is greater
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //instructions: return a FUNCTION that tests whether a given STRING
    return function(str){ //use string as parameter then 
        //if str at index zero AKA the first character is equal to the startsWith value which the instructions indicate WILL BE A SINGLE CHARACTER
        if (str.charAt(0).toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
                                                                             //also for both of these wanted to lowercase to account for edge cases
                                                                             //especially since with the first one your working with the first character which is sometimes capitalized 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
        return function(str){
            //note: this is how you get the end length of a string since strings have a length property
        if (str[str.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 //strings is an array so we can loop thru it with a for loop; possibly create new array
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //we need to collect the results into some collection
    var modifiedArr = [];
    //looping thru array of strings          //for this one I could've used strings[i] = modify(strings[i])
    for (let i = 0; i < strings.length; i++){
        //we then in the looping coding block push the modify strings at each index into the new array 
        //want to ask Ryan what exactly modify is doing here
        modifiedArr.push(modify(strings[i]));
    }
    //return it at the end
    return modifiedArr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    for (let i = 0; i < strings.length; i++){
        //OK WOW! Solved at 8:30 AM 
        //I was stuck on this awhile and was putting if (test(strings[i])) return true sort of how I used modify in the previous problem
        //I figured it had to with the keyword 'ALL' in the instructions since it was all caps 
        //and googled how to return a boolean if all strings pass and EVERY came up with the chrome extension so I tried it
        //Initially I tried strings[i].every(test) but the code indicated this wasn't valid
        //also when I used every it indicated it needed a context in the second slot so I put the context of every element in the strings array: THE INDEX
        if (strings.every(test, i)){
            return true;
        } else {
            return false;
        }

        }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
