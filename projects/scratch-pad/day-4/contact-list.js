// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//first param is a num, second string, third string
function makeContact(id, nameFirst, nameLast) {

    return {
        //the keys on the right are generic names 
        //the values are the actual parameters we put in the makeContact function
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //the length hint is indicating we need to hold it in an array since they are indexed and can hold complex data
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        
        //so this one was done for us to get us on track 
        //take a look at the instructions notice the length() function doesn't hold a parameter 
        //that is why this function() parameter is empty
        length: function() {
            return contacts.length;
        },
        //in the instructions addContact takes a contact object PARAMETER as indicated twice in the instructions
        //we want to take this parameter and add it to the list
        //what's the list ? the contacts array! how do you add to an array? .push()
        addContact: function(contact){
            
            return contacts.push(contact);
        },
        
        //findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
        // returns the contact object if found in the contacts-list, or, 
         // undefined if the fullName does not match any contacts in the list
        
        findContact: function(fullName){
            //if found in the contacts-list(array) means we have to search thru this list(array) so use a for loop
            //**EACH INDEX OF THIS ARRAY IS A CONTACT(WHICH IS IN THE FORM OF AN OBJECT)
        for (let i = 0; i < contacts.length; i++){
            //contacts at i accesses the given contact object at it's given index 
            //so then we want to access the firstName and lastName of that given contact object and concatenate them to compare them to fullName
            if (fullName === contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']){
                //we want to return the GIVEN CONTACT OBJECT AT THE INDEX
                return contacts[i];
            } else {
                return undefined;
            }//end else
        }//end for loop
        },
        //4. removeContact(contact): takes a contact object to be removed from 
        // the contact-list.
        
        removeContact: function(contact){
            return contacts.pop(contact);
        },
        
        
        
        
//        5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 //*         return a String formated with all the full-names of the separated 
 //*         with a line-break, like so:
// *          
// *         myContacts.printAllContactNames(); // => Max Gaudin
// *                                                  John Fraboni
// *                                                  Kaelyn Chresfield
        
        
        
        
        
        printAllContactNames: function(){
            let contactStr = '';
            //loop through the contacts array in order to get every object in the list so we can get acess to the inner values specifically first and last name
            for (let i = 0; i < contacts.length; i++){
                //this allows us to store the fullName in a whole variable
             var contactFullName = contacts[i]['nameFirst'] + " " + contacts[i]['nameLast'] + '\n';
             //if the fullName of the contact like for example 'Max Gaudin' exists w
             if (contactFullName){
                 //then add it to the contact string 
                 contactStr += contactFullName;
                 
             }//end if statement
           
            }//end for loop
            //return those and use slice for the last \n
            //slices off the \n at the end of John Fabroni
            return contactStr.slice(0, -1);
    }
};

}


// YOUR CODE GOES ABOVE HERE //

//when looking into a cave you can't see in due to the darkness 
//however if your in a cave looking out you can see due to the light bleeding in
//this is how scoping works; you can look down the hole but you can look up the whole 


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
