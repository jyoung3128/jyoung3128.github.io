// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 //these two parameters are WHOLE NUMBERS
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //we need an array to return all the whole numbers between the start and end
    let rangeArr = [];
    //using 8, 14 as hypothetical nums: if 8 is less than 14
    if (start < end){
        //start at 8; end at 14; increase by 1
        for (let i = start; i <= end; i++){
            rangeArr.push(i);
        }//end for loop
    } else if (start > end){
        //start at 14; end at 8; decrease by 1
        for (let j = start; j >= end; j--){
            rangeArr.push(j);
        }
    }
    
    return rangeArr;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
