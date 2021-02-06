// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  if (n === 0){
    return 1;
    
  } else if (n < 0){
    return null;
  }
  //recursive case
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case 
  //if the array length is equal to zero return zero
  if (array.length === 0){
    return 0;
  } 
  //recursive case - needs to be in an else statement
  //else add the first index to the sum of the second and so on
  return array[0] + sum(array.slice(1));

};
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case 
if (n === 1){
  return false;
} else if (n === 0){
  return true;
  //gotta account for negative numbers
} else if (n < 0){
  return isEven(n + 2);
}
  return isEven(n - 2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case
  if (n === 0){
    return 0;
  } else if (n < 0){
    //if negative 10 we want -9 + the recursive call
    return (n + 1) + sumBelow(n + 1);
  }
  //we want to add nine plus the recursive call
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
// range(9,2) [8]

var range = function(x, y) {
  
  //base case
  //we have to determine which is greater x or y 
  //if x is less than y count up
  if (x <= y){
    //going up case if x plus one equals y or x equals y
    //we can stop tracking the range
    if (x + 1 === y || x === y){
      return [];
    }  
    //for when y is great than x
    return [x + 1].concat(range(x + 1, y));
    //otherwise  x is greater than y so we must count down to get the range
  } else if (x - 1 === y || x === y){
    return [];
  } //set it in array so we can merge with the next value
  //for when x is great than y
  return [x - 1].concat(range(x - 1, y));
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  //in math if an exponent is equal to 0 you return 1
  if (exp === 0){
    return 1;
    //also if the exponent is 1 you return the value of the base
  } else if (exp === 1){
    return base;
    //we have to account for negative values in this function
    //negative exponents put their value in a fraction like 1/baseNum * baseNum
  } else if (exp < 0) {
    //so return 1 / plus the recursion call call  which takes in the base and negative exp
    return 1 / exponent(base, -exp);
  }
  //otherwise the exponent is positive
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//power of two means it is a number that when two is 'exponented' that is destination of on the way
//in human terms 2 to the power of 1 = 2, to the power of 2 = 4, Po3 = 8, Po4 = 16, Po5 = 32 and so on
var powerOfTwo = function(n) {
  if (n <= 0){
    return false;
  } else if (n === 1 || n === 2){
    return true;
  } else return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (!string.length){
    return '';
  } 
  //for our recursive case we need to do it first then add the first string character
  //because it will reverse in the call stack
  //say the string is "hey"
  //we are doing ey + h
   //y + eh
   //yeh
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //clean up the string before you do anything
  //they want us to ignore capital letters and spaces
  //so use uperscase and replace the spaces with no space
 string = string.toUpperCase().replace(" ", '');
 //if string is less than or equal to one then it's true
  if (string.length <= 1){                                                      //racecar; r === r, a to a, c to c, finally e to e so boom!
    return true;
  } 
  //basically you want to compare the first letter and the last
  //since they should be the same in a palindrome
  //then work your way in 
  //I set variables to make it easier
  //It's funny cause Darnell brought this up in class
  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];
  //so if the letters are the same we want to slice off
  //both of those letters in order to compare the next two innner letters
  //use recursion to call the function and input your innerString
  if (firstLetter === lastLetter){
    let innerString = string.slice(1, string.length - 1);
    return palindrome(innerString); 
    //if at one point the letters don't match return false
  } 
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  } else if (y > 0){
    return x + multiply(x, y - 1);
  } else  {
    return -x + (multiply(x, 1 + y));
  } 
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (!str1.length && !str2.length){
    return true;
  } else if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1)); 
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if (str.length === 0){
    //we ultimately want to end up with an array so that's what we return
    return [];
  } 
  //if the string has length then return the first letter of the string and concat it with the recursive call which well send the second
  //letters up the chain and concat it and so on
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (!array.length){
    return [];
  }
  //return the recursion call with the second value concatted with the first
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //if 7's length was 1 we would return just one 7 in an array
  if (length === 1){
    return [value];
  }
  //encapsulate value in an array and make it a variable
  var valArr = [value];
  //concat valArr with the recursion call but subtract 1 to the length
  return valArr.concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (!array.length){
    return 0;
  } else if (array[0] === value){
    //the element at the first index is equal to value so increase count by 1
  return 1 + countOccurrence(array.slice(1), value);
  }// otherwise array[0] is not related to value so we can recurse thru this one without counting up
  return countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (!array.length){
    return [];
  }
  //map takes in an array and a callback which we concat with the callback 
  return rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1], 0, array));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0){
    return null;
    //because zero is both the value and the index(same logic for 1) we can just return the value
  } else if (n === 0 || n === 1){
    return n;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //input is an array of words so if we've tested all return the array literal
  if (!input.length){
    return [];
  }
  //return the first letter uppercased and concatted with the recursion call slicing the rest of the word
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (!array.length){
    return [];
  } //the first zero access the element's index; the second zero access the first letter
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (!str.length){
    return obj;
  } //if object contains this letter then increase the count
  if (obj[str[0]]){
     obj[str[0]] += 1;
  } else {
    //if it doesn't yet contain the letter; add it and assign the value of one
     obj[str[0]] = 1;
  } //this reminds of the reduce object question in tutoring
 return Object.assign(letterTally(str.slice(1), obj));
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // no length return the array literal 
  if (!list.length){
    return [];
  } 
  let compressor = compress(list.slice(1));
  //if they arent equal aka not a duplicate add it to the beginning
  if (list[0] !== compressor[0]){
    compressor.unshift(list[0]);
  }
  //return the recursive call
  return compressor;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //if there's no length return the array literal we know this!
  if (!array.length){
    return [];
  } 
  //create a recursive variable you can return
  var list = minimizeZeroes(array.slice(1));
  //the bitwise operator says 0 ^ 0 = 0 or if array at index 0 zero isn't equal to zero add it
  if (list[0] !== 0 || array[0] !== 0) {
    list.unshift(array[0]);
  }
  return list;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //no array length; return array literal
  if (!array.length){
    return [];
  }
  //first element var and second El 
  let firstEl = array[0];
  let secondEl = array[1];
  //return the positive absolute value of the first number and the second of the secondEl then slice the rest of the indexes and they'll become the first and second element on the second go round
  return [Math.abs(firstEl), -Math.abs(secondEl)].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (!str.length){
    return '';
  } 
  //create a var for the recursion call 
  var tempStr = numToText(str.slice(0, str.length-1));
  //declare a variable for replacement
  //set it undefined
  //in the switch statement we are going to switch
  //all numbers through nine and replace them with the
  //string equivalent 
  var replace;
  switch (str[str.length - 1]) {
    //if the string contains any letter
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  //return the recursive call plus the replace string 
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
