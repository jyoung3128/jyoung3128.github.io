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
   //since filter returns an array and we need a count use the length method to get the number value
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
            //I was trying to do oldFolk.name but Darnell was like don't worry till the end and that makes so much sense
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
    // start with reduce that takes in an accumulator and the elements which are objects
    let friendCount = _.reduce(array, function(acc, customerObj) {
        //if customerObj's name is equal to the customer your passing in
        if (customerObj.name.toLowerCase() === customer.toLowerCase() ) {
            //set the acc equal to filter which then takes in the customerObjs.friends (an array to filter thru) and the element
            acc = _.filter(customerObj.friends, function(e) {
                //already has an if statement so just return the element name at zero index the first letter and compare it to letter 
                //both lowercase
             return  e.name[0].toLowerCase() === letter.toLowerCase();
          });
        }
        //return the accumulator
        return acc;
    }, 0);
    //then we want the first letter count so return the length of the filtered array
    return friendCount.length;
};
    
    //so far im using reduce to keep track of total friend letters with the seed starting at zero and then loop thru friends since it's an array 
    //then if customer(object in array).friends(array within object)[i](every element in the array).name[0](access name key value and zeroeth index is first letter) if that equals the letter increase the total Friend Letter count
/*
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
   */ 
    

// Find the customers’ names that have a given customer’s name in their friends list
//input: array, customer name who we want to find is friends with
//everyone else


//output: is an array of everyone else
var friendsCount = function(array, customer){
    //create result that will hold an array with the customer objects of each valid customer
    let resultArr = _.filter(array, function(customerObj){                 //it's interesting cause the data suggests their friendship goes one way
                                                                           //Like Olga doesn't have Doyle in her friend's list
        // lets define the friends array                                  //Doyle Erickson has Olga in his friends list so we return him and pluck his name
        let customerObjsFriendsArr = customerObj.friends;
        //look through each friends array and see if the customer is inside of it
        for (let i = 0; i < customerObjsFriendsArr.length ; i++){
            //check if current friend is equal to customer
            if (customerObjsFriendsArr[i].name === customer){
                return customerObj;
            }
        }
    });
    return _.pluck(resultArr, "name");
};
//find three most common tags among all customers' associated tags
//input: array
//output: array
var topThreeTags = function (array){
    //in underscore.js pluck shows them grabbing a key from an array of objects which is exactly
    //what we are dealing with so I'll use their logic
    //now we have the tags for each object in an array; an array with an array of tags at each index
    let tags = _.pluck(array, "tags");
    
    let tagsJoined = tags.join(',');
    //console.log(tagsJoined);
    //joins all the words together seperated by commas
    let splitTags = tagsJoined.split(','); //back into array 
    //console.log(splitTags); //now we have all the tags in a single array separated by commas
    //pass this into reduce to get the count for each in key value pairs
    //by doing this we can have an object that will show us by number which is the top tag
    
    let tagCount = _.reduce(splitTags, function(tagCountObj, currentTag){
        if (tagCountObj[currentTag]){
            tagCountObj[currentTag]++
        } else {
            tagCountObj[currentTag] = 1;
        }
        return tagCountObj;
    }, {})
    //console.log(tagCount); //has all the tags with their count in an object
    //set an array to push the object key and values in
    let finalArr = [];
    //look through the tags so we can pass each tag and each number
    for (var key in tagCount){
        //why do you need the box to go around both?
        finalArr.push([key, tagCount[key]]);
    }
    //console.log(finalArr) got all key value pairs in their own array in the array BUT we want to bring the top 3 to the top
    //here comes tutoring to the rescue
    let sortedTags = finalArr.sort(function(a, b){
        return b[1] - a[1];
    });
    
    let top3Tags = sortedTags.slice(0, 3);
    //now it's sorted but we don't need the numbers anymore so map and just get the tags
    let justTags = top3Tags.map(function(taggies){
        return taggies[0];
    });
    console.log(justTags);
    return justTags;
    //WOW WHAT THE HECK MAN THIS IS A LOGICAL PUZZLE
};

//HOLY CRAP I DID IT 8:38 AM
var genderCount = function(array){
    //so we want to return an object with genders so name it appropriately
    //finalObj will be an empty object seed and currentObj will be each object element in the data
    let genderObj = _.reduce(array, function(finalObj, currentObj){
        //if finalObj contains the current Object's gender
        if (finalObj[currentObj.gender]){
            //then increase the count by 1
            finalObj[currentObj.gender]++;
            //else it has not seen this gender yet so add it and set the count to 1
        } else {
            finalObj[currentObj.gender] = 1;
        } //finally return that object then return the variable and boom! You got an object full of gender's and their proper count
        return finalObj;
    }, {});
    return genderObj;
};

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
