
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n, i) {
  //set your i variable to the value you want to accumulate 7 times
  //since it's a string we can use it's length against 8 to console.log it 7 times
  //then update each loop with another hastag and console.log that thang
  //so should work for any given starting number and any given ending number 
  //also since we using .length have to say less or equal to 
  for (var i = '#'; i.length <= n; i += '#'){
    console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){
    if (i % 3 === 0 && i % 5 === 0){
      //if it divides cleanly into 3 or 5 do fizzbuzz you want this to be first so it doesn't log fizz or buzz instead 
      console.log("fizzbuzz");
    } else if (i % 3 === 0){
      console.log("fizz");
    } else if (i % 5 === 0){
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let size = num; 
let board = ""; 
//creat a loop in order to access each space of the board
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    //if the sum of x and y cleanly divides by 2 add a space to the board
    if ((x + y) % 2 == 0) {   
      board += " ";
    } else {
      //otherwise a hashtag
      board += "#";
    }
  }
  //outside the x for loop but inside the y loop add a new line via "\n"
  board += "\n";  // 
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
