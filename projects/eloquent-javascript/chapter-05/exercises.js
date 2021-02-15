// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //the seed is the combined array and second param is each element
return array.reduce(function(flatArr, currentEl){
  //use concat to combine arrays together 
  return flatArr.concat(currentEl);
}, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {

while (test(val)){
  body(val);
  val = update(val);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {

for (let i = 0; i < arr.length; i++){
  if (!test(arr[i])){
    return false;
  }
}
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  const arr = countBy(str, function(char){
    //get the unicode value for the current character
    const unicode = char.charCodeAt();
    //find the script object from the unicode character
    const script = characterScript(unicode);
    //returning the name of the script direction or null
    if (script !== null){
      return script.direction;
    } else {
      return script;
    }
  });
  
  arr.sort(function(a, b){
    return b.count - a.count;
  });
  return arr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
