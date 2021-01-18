//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  var  str = '';
for (var key in object){
 str += ' ' + key;
}
return str.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
     var  valuesArr = [];
for (var key in object){
    if (typeof object[key] === 'string')
 valuesArr.push(object[key]);
}
return valuesArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    }
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
        var strArr = string.toLowerCase().split(' ');
    for (var i = 0; i < strArr.length; i++){
      if (strArr[i]){
          //THIS IS AN EXTREMELY IMPORTANT PART TO REMEMBER
          //for awhile I was attempting to do this without reassign to the strArr[i]
          //we must do this so that it RETAINS the information from the previous loops
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
      } //end if
      
    string = strArr.join(' ');
    } //end for 
    //then return string at the end
    return string;
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//parameter is an object with a name property
//should return 'welcome Name'
function welcomeMessage(object) {
return 'Welcome' + ' ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//this object parameter has a name and species property//should return 'Name(property) is a Species(property)'
function profileInfo(object) { //Notice how Name and Species are captitalized so we gotta take our previous knowledge of Uppercasing the first letter and slicing backing the rest of the word in this problem
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take an object, if this object has a noises array return them as 
a string separated by a space, if there are no noises 
return 'there are no noises' 
*/
function maybeNoises(object) {
    //if object doesn't contain noises or object's noises key's length is less than or equal to zero
if (!object['noises'] || object['noises'].length <= 0){
    //return there are no noises 
    return 'there are no noises';
} //otherwise there are so return them as a string separated by a space!!!
    return object.noises.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//string parameter is multiple words//word is a single word//
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {
if (string.includes(word)){
    return true;
}
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object
//name is a string needs to be added to object.friends which is an array
function addFriend (name, object) {
object['friends'].push(name);
//I was trying to return the the object on the same line as the one I was adding in the name
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//name is a string 
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
//we have to establish whether or not friends is an array and whether or not object contains friends
if (Array.isArray(object['friends']) && object.hasOwnProperty('friends')) {
    //if we know it's an array and a property we can loop thru them values
    for (var i = 0; i < object['friends'].length; i++){
        //and then check if name is at any of those looped indexes
    if (name === object['friends'][i]){
        return true;
    }    
    }
}
//if not return false
return false;
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//name is a single word string representing a name//array is a list of people
//Should take a name and a list of people, and return a list(array of objects) of all the names that <name> is not friends with
function nonFriends(name, array) {
    //we need to return a new list of all non-friends so they might as well be haters
let haters = [];
for (let i = 0; i < array.length; i++){
    if (array[i]['name'] === name || array[i]['friends'].includes(name)){
        //don't end the loop run the else cause we dont wan't these pals we want the haters
        continue;
    }//end if 
    else{
        haters.push(array[i]['name']);
    }
}//end for
//we eventually want to return a list of all the names of people in the array who aren't friends 
return haters;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    //should update the property key with value
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array> 
//object//list of strings
function removeProperties(object, array) {
/*
   QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});
*/
//for awhile I assumed you need to loop thru the object AND array but using .includes you can access all data in the array and compare to the loop object key because we don't have key as a parameter
for (var key in object){
    if (array.includes(key)){
        delete object[key];
    } //end if
} //end for
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed
//the array containing duplicates
function dedup(array) {

return array.reduce(function(noDupArr, arrEl){
    if (!noDupArr[arrEl]){
        noDupArr.push(arrEl)
    } else {
    
    }
}, [])
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}