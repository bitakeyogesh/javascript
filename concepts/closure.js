for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// Question- what will be the output of above snippet?
// output: 3 3 3

// Question- what needs to be done to print output 0 1 2

//Approach 1 - use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//Approach 2 - use function with var
function printNumberUsingTimeout(i) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
for (var i = 0; i < 3; i++) {
  printNumberUsingTimeout(i);
}

//---------------------------------------------------------------------------------
let x = 500;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
//Output- ReferenceError: Cannot access 'x' before initialization
// Reason - Temporal Dead Zone, let const varibale can not be accessed until initialized
