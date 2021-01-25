// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jyoung3128.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleNumbers = _.filter(array, function(customerObj){
       return customerObj.gender === 'male';
            
        
    });
   
     return maleNumbers.length; 
    
};

var femaleCount = function(array) {
    //use the reduce to take in the array you want to reduce and the callback hold the seed or accumulator totalFemales 
    //and femaleEl as the parameter to take each element in the array in this case the elements are objects
    let femaleNumbers = _.reduce(array, function(totalFemales, femaleEl){
        if (femaleEl.gender === 'female'){
        totalFemales++;
        }
        return totalFemales;
    }, 0);
    return femaleNumbers;
};
//output: string
var oldestCustomer = function(array){
    let oldie = _.reduce(array, function(oldFolk, customerObj){
        if (oldFolk.age > customerObj.age){
            //return the whole object to compare so u can then reaccess the age
            //I was trying to do oldFolk.name but Darnell was like don't worry till the end and that makes so much since
            return oldFolk;
        }
        return customerObj;
    });
    //return the object that contains the oldie and notate into the name key
   return oldie.name;
};

var youngestCustomer = function(array){
    //set up a youngOne varaiable to return the youngest customer(remember to return their name)
    let youngOne = _.reduce(array, function(youngFolk, customerObj){
        //so we want to find youngest; how we do that? compare ages; use reduce to take in the array 
        //the seed will the first element(don't need to make it inherit anything) and the customerObj will take in the second element and so on
        //if the first element's age is less than the 2nd element's age
        if (youngFolk.age < customerObj.age){
            //return the whole object to compare so u can then reaccess the age
            //I was trying to do oldFolk.name but Darnell was like don't worry till the end to return the name and that makes so much sense
            return youngFolk;
        }
        return customerObj;
    });
    //return the object that contains the oldie and notate into the name key
   return youngOne.name;
};
//BALANCES ARE STRINGS NOT NUMBERS
var averageBalance = function(array){
    //so set a variable for averageMoney; what we want to do is use an accumulator variable for the totalSum; they want a number so we use 0; customerObj will take in each element and we gotta
    //access the balance key to get the balances 
    let averageMoney = _.reduce(array, function(totalSum, customerObj){
        //NOW THEY HAD TO MAKE THE BALANCE A FREAKIN' STRING DATATYPE WITH A DOLLAR SIGN AND , like c'mon
        //but no fear this replaces all nonsense with a '' creating no additional space 
      let customerBalance = customerObj.balance.replace(/[^\d\.]*/g, '');
      //Then you gotta destringify that balance so you can add it to the accumulator
      customerBalance = Number(customerBalance);
      //this will add and each loop update the totalSum balance total and then customerBalance will shift to the next element 
         totalSum += customerBalance;
         ///return that so it updates 
         return totalSum;
    }, 0);
    //now that's just total balance so you gotta divide by the array length which is the amount of balances you took in
    //give you the AVERAGE BALANCE LET'S GOOOOO
    return averageMoney / array.length;
    
};
//return the sum of the balance divided by the array.length

//Find how many customer’s names begin with a given letter
//output number
var firstLetterCount = function(array, letter){
    //set up your first letter variable to return at the end 
    //you want to reduce to a single value: a number so your seed will start at zero
    //and keep track of total letters
    //
 let letterCount = _.filter(array, function(e){
     if (e.name[0].toLowerCase() === letter.toLowerCase()){
         return true;
     }
 });
 return letterCount.length;
};
/*
function(array, letter){
    //set up your first letter variable to return at the end 
    //you want to reduce to a single value: a number so your seed will start at zero
    //and keep track of total letters
    //
  let firstLetter =  _.reduce(array, function(totalLetters, customerObj){
        if (customerObj.name[0].toLowerCase() === letter.toLowerCase()){
            totalLetters++;
        }
        return totalLetters;
    }, 0);
    return firstLetter;
};

*/

// Find how many friends of a given customer have names that start with a given letter
//output: Number
//when you access friends its full of objects
var friendFirstLetterCount = function(array, customer, letter){
    //so far im using reduce to keep track of total friend letters with the seed starting at zero and then loop thru friends since it's an array 
    //then if customer(object in array).friends(array within object)[i](every element in the array).name[0](access name key value and zeroeth index is first letter) if that equals the letter increase the total Friend Letter count
    
    
    
    //so far im using reduce to keep track of total friend letters with the seed starting at zero and then loop thru friends since it's an array 
    //then if customer(object in array).friends(array within object)[i](every element in the array).name[0](access name key value and zeroeth index is first letter) if that equals the letter increase the total Friend Letter count

var friendCount = 0;
for (var i = 0; i < array.length; i++){
  if (array[i].name === customer){
    for (var j = 0; j < array[i].friends.length; j++){
      if (array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
        friendCount++;
      }
    }
  }
}
  return friendCount;

};
    
    /*
 var friendLetterCount =  _.reduce(array, function(totalFLetters, customer){
    for (let i = 0; i < customer.friends.length; i++){
        if (customer.friends[i].name[0].toLowerCase() === letter.toLowerCase()){
           totalFLetters++;
        }
        
    }
    return totalFLetters;
    }, 0);
    return friendLetterCount;
    */
    /*
 let filteredFriends = _.filter(array, function(e){
     //if the element we are on is the same as the customer we are passing in
     if (e.name === customer.name){
        _.each(e.friends, function(f){
            if (f.name[0].toLowerCase() === letter.toLowerCase()){
                return true;
            }
        })
     }
 })
 return filteredFriends.length;
 */


var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
