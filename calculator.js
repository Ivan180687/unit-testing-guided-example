function sum(a, b) {
  if (a === '' ) {
   a = 0
  } else if ( b === '') {
    b = 0
  }
  return(a + b);
}

function subtract(a, b) {
  if (a === '' ) {
    a = 0
   } else if ( b === '') {
     b = 0
   }
   return(a - b);
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

sum(3, 5)
// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
