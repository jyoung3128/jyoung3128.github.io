/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*

Implement a function declaration called search that: CHECK

Takes a paramater representing an Array of animals. CHECK

Takes a paramater representing a String, the name of an animal on which to perform a search. CHECK

Looks through the animals Array and returns the animal’s Object if an animal with that name exists.

Returns null if no animal with that name exists

Use the search bar at the top of the page to make sure your function works.

*/
//animals = array of animals(the indivdual animal values are objects)
//animalNameStr = string
function search(animals, animalNameStr){
    //Looks through the animals Array
    for (let i = 0; i < animals.length; i++){
        
        if (animals[i].name === animalNameStr){
            //returns an animals object if that animal's object if an animal with that name exists
            
            return animals[i];
        }   //for awhile I was stuck because I was putting  null in an else statement I assume that was wrong
        //because I was putting it thru the for loop
    }//end loop
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*

Write a function declaration called replace with a signature of replace(animals, name, replacement) { //... } that: CHECK

Takes 3 parameters, an Array of animals, a String representing the name of an animal on which to perform a search, and an Object that represents the replacement animal. CHECK

If an animal with that name exists within the animals Array, replace it’s entire Object with the replacement Object.

Otherwise do nothing.

Preview the index.html page to test it on the website.

*/

//animals= array of animals
//name = string name of animal
//replacement = animal object   
function replace(animals, name, replacement){
    //probably have to search through the animals--def did--the directions subtly tell us when it says 'if an animal with that name exists WITHIN THE ARRAY'
    for (var i = 0; i < animals.length; i++){        //This one took a minute I was struggling with how to replace I tried several methods but splice was successful
    //the if statement is essentially identical to search so that wasn't difficult
        if (animals[i].name === name){
          animals.splice(animals[i], 1, replacement);  //also I was trying to return stuff but never in the directions does it indicate to do that READ AND DON'T GO ON AUTOPILOT
        } // end if
    } //end for
    
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*

Write a function declaration called remove with a signature of remove(animals, name) that: CHECK

Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search. CHECK

If an animal with that name exists within the animals Array, remove it.

Test that it works on the website.

Step 4 - Add

*/
//animals = array of animals
//name = string name of animal
function remove(animals, name){
    //again look thru the array
    for (var i = 0; i < animals.length; i++){                                        //was stuck a little bit but ultimately came around to using splice again
    //again same formula for if
        if (animals[i].name === name){                                               //thought it wasn't plausible at first since I assumed it needed three inputs--not the case
        //element to remove then 1 to remove it 
            animals.splice(animals[i], 1);
        }
    }//end for loop
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*

Write a function declaration called add with a signature of add(animals, animal) { //... } that:

Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.

Checks that the animal Object has a name property with a length > 0.

Checks that the animal Object has a species property with a length > 0.

Has a unique name, meaning no other animals have that name.

Adds this new Object to the animals Array, only if all the other conditions pass.

Make sure it works.

*/
//animals = array of aniamls
// animal = object to be added to the array
function add(animals, animal){
    if (animal.name.length > 0){
        if (animal.species.length > 0){
            for (var i = 0; i < animals.length; i++){
                //if you search thru animals and it doesnt contain animal.name(name of the animal)
                if (!search(animals, animal.name)){ //then
                //add the object to the animals array
                    animals.push(animal);
                } //end closest if
            } //end for loop
        }
    }
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
