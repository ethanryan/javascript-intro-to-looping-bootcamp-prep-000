// Build a function forLoop. It takes an array as an argument.
// Start counting from 0, and, using a for loop, add a string to the array.
// But not just any string. If your i value is 1, add the string "I am 1 strange loop.";
// but if your i value is anything else,
// add the string "I am ${i} strange loops." to the array 25 times.
// (Remember flow control with if and else?
//   And how do we interpolate i?) Then return the array.
//
// HINT: Your for loop could look something like this:
// for (let i = 0; i < 25; i++) {
//   // ...
// }

// for loop -- problem 1

//var array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(`I am 1 strange loop.`)
  } else {
    array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

//
// Create a function called whileLoop in loops.js.
// The function should take a number as an argument.
// Using a while loop, count down (using console.log)
// from the passed in number to 0.
// Then return the string 'done'.

// while loop -- problem 2
//
// while ([condition]) {
//   [loopBody]
// }

// let countdown = 100;
//
// while (countdown > 0) {
//   console.log(--countdown)
// }

function whileLoop(number) {
  while (number > 0)
  console.log(--number)
  return(`done`)
}

// do-while -- problem 3

// //maybeTrue function
// function maybeTrue() {
//   return Math.random() >= 0.5
// }
//
// do {
//   console.log('doo-bee-doo-bee-doo')
// } while (maybeTrue());


//syntax:
// do {
//   [loopBody];
// } while ([condition]);

// Define a function called doWhile in loops.js.
// The function should take an array as an argument.
// Use the maybeTrue() function (you can copy it from this README)
// as the condition, and remove elements from the array
// until the array is empty or until maybeTrue() returns false.
// (Your condition might look something like
//    array.length > 0 && maybeTrue().)
// Finally, return the array.


//maybeTrue function
function maybeTrue() {
  return Math.random() >= 0.5
}


//doWhile function


//from chat ----
// function doWhile(array) {
//   do array.slice(1)
// } while (array.length > 0 && maybeTrue)


function doWhileLoop(array) {
  do {
    //array.pop(elements);
    array.pop(1)
    //array.length--;
    //elements--;
    //array--;
    //i--;
  } while (array.length > 0 && maybeTrue());
  return array;
}



// do {
//     statement
// }
// while (expression) ;

//////////

// var i = 0;
// do {
//     document.write(i + " ");
//     i++;
// } while (i < 10);

//
//var elements = array.length;

// function doWhile(array) {
//   for (array.length > 0) {
//   //var doWhileLoop = [];
//   do {
//     array.pop(elements);
//     elements++;
//   } while (array.length > 0 && maybeTrue());
//   } return array;
// }

// function doWhile(array) {
//   return array;
//   do {
//   maybeTrue();
//   } while ([array.length > 0 && maybeTrue()]);
// }
