// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(v){
    return v;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // YOUR CODE BELOW HERE //
    //if typeof value is string return string
    if (typeof value === 'string'){
        return 'string';
        //if the value is an array return stringed array
    } else if (Array.isArray(value)){
        return 'array';
        //if the value is undefined return stringed undefined
    } else if (typeof value === 'undefined'){
        return 'undefined';
        //if the typeof value is a number return stringed number
    } else if (typeof value === 'number'){
        return 'number';
        //if the typeof value is a boolean return stringed boolean
    } else if (typeof value === 'boolean'){
        return 'boolean';
        //if the value is null return stringed null
    } else if (value === null){
        return 'null';
        //if the value is a function return stringed function
    } else if (typeof value === 'function'){
        return 'function';
        //if the value is an instance of Date return stringed date
    } else if (value instanceof Date){
        return 'date';
        //finally if the type of value is an object return stringed object
    } else if (typeof value == 'object'){
        return 'object';
    }
};   



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num){
    //if array isn't array or  if numerical argument is not a positive number.
    if (!Array.isArray(arr) || num <= 0){
       //Should return empty list
        return [];
        //else if it's not a number or not given or equal to 1 which would also grab the first value
    } else if (isNaN(num) || num === undefined || num === 1){
        return arr[0];
    }
    //otherwise return the first number items of array
    return arr.slice(0, num);
};



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
    if (!Array.isArray(arr) || num < 0){
       //Should return empty list
        return [];
        //else if it's not a number or not given 
    } else if (isNaN(num) || num === undefined || num === 100){
        return arr[arr.length - 1];
    }
    //otherwise return the last number items of array
    return arr.slice(Math.max(arr.length - num, 0));
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//ayyyy let's goooooooo
_.indexOf = function(arr, val){
    //working with index so need to loop
    for (let i = 0; i < arr.length; i++){
        //if arr at this index equals val
        if (arr[i] === val){
            //return the index
           return i; 
           //else if the array doesn't include val 
        } else if (!arr.includes(val)){
            //return -1
        return -1;
    }
}
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //return true if the array includes the value otherwise false 
    return (array.includes(value) ? true : false);
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, action) {
    //if array then loop thru it and call the function on each element
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    /*
    _.filter(array, function(element, index){
        return _.indexOf(array, element) === index;
    });
    */
    //NOTE: COULD NOT GET THIS TO WORK WITHOUT ARROW FUNCTIONS
    return array.filter((element, index) => array.indexOf(element) === index);
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, action) {
    //create an array to put filtered elements into
    let filteredArr = [];
    //for each element in array call the function passing in those 3 parameters
    _.each(array, function(ele, index, array){
        //if those parameters return true with the test func push the element into the filtered array
        if (action(ele, index, array)){
            filteredArr.push(ele);
        }
    });
    return filteredArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function(array, testFunc) {
    let filteredArr = [];
    _.each(array, function(ele, index, array){
        if (!testFunc(ele, index, array)){
            filteredArr.push(ele);
        }
    });
    return filteredArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function(array, func){
    //create three arrays in which you will push the elements based on the func
    //final array containing the split array
        var arraysSplit = [];
        //original array items that pass the function test go in this array
        var passedArray = [];
        //original array items that fail the test go in this array
        var failedArray = [];
        //call the function for each element in array passing the 3 arguments
    _.each(array, function(ele, key, array){
        //if the test func passes the parameters
        //initially tried to just take in ele
        if (func(ele, key, array)){
            //if they pass push here
            passedArray.push(ele);
        } else {
            //otherwise push here
            failedArray.push(ele);
        }
    });
    //finall push those into arraysSplit in proper order and return it
    arraysSplit.push(passedArray);
    arraysSplit.push(failedArray);
    return arraysSplit;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action){
    let finalArr = [];
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            finalArr.push(action(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
           finalArr.push(action(collection[key], key, collection));
        }
    }
    return finalArr;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//the array is filled with objects

_.pluck = function(array, property){
    //map returns an array so no need for array literal
    //using map, map thru array and call a function the individual objects within and return there property into the mapped array
    //I was trying to do array.map
   return _.map(array, function(object){
        return object[property];
    });
    //map returns an array don't need to return at the end
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, action){
    //if the function is provided//this edge case is BRUTAL
    if (action) {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                //if even one of them returns false then return false otherwise they all returned true ***EVERY one of them
                if (!action(collection[i], i, collection)) {
                    return false;
                }
            }
            //if the return value of calling action or function on every element is true then return true
            return true;
        } else {
            //checking for if it's an object same logic tho 
            for (var key in collection){
                if (!action(collection[key], key, collection)) {
                    return false;
                }
            }
            return true;
        }
        //else no function was provided
    } else {
       if (Array.isArray(collection)) {
           for (let j = 0; j < collection.length; j++) {
               if (!collection[j]){
                   return false;
               }
           }
           return true;
       }
    }
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
///YES U GET EVERY AND SOME BECAUSE SOME IS THE LOGICAL OPPOSITE OF EVERY
//so in EVERY if every element didn't pass return false
//then in SOME if ANY element passed return true 
//side-note: on js it says it shortcircuits and ends the function if at the first true element it finds which makes sense and is efficient
//also isn't SOME really just ONE since you only need one to be true; some implies more than one thats just me
_.some = function(collection, action){
     if (action) {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                //if even one of them returns true then return true otherwise not even one of them was true
                if (action(collection[i], i, collection)) {
                    return true;
                }
            }
            //if the return value of calling action or function on every element is true then return true
            return false;
        } else {
            //checking for if it's an object same logic tho 
            for (var key in collection){
                if (action(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
        }
        //else no function was provided
        //why don't you have to test for object if there's no function??
    } else {
       if (Array.isArray(collection)) {
           for (let j = 0; j < collection.length; j++) {
               if (collection[j]){
                   return true;
               }
           }
           return false;
       }
    }
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, action, seed){
    //if seed is given
    if (seed !== undefined){
        //then the result will accumulate in the seed as the starting point
        let result = seed;
        
        _.each(array, function(element, index, array){
        
            result = action(result, element, index, array);
        });
        //return the acumulated seed
        return result;
    } else {
        //if no seed is given use the first element in the array as the seed or result
        let result = array[0];
        _.each(array, function(element, index, array){
            //every index except zero since it has taken the place of the starting result
            if (index !== 0){
                //we add array since the first element isn't accumulating inside of anything
        result = action(result, element, index, array);
            }
        });
        return result;
    }
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//accounts for however many objects we need
_.extend = function(...obj){
    //Object.assign copies properties from one to another and the spread operator will apply them to the function
   return Object.assign(...obj);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
