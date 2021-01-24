// declare sendSignal Function
function sendSignal(){
  // print HELP! to the console
    console.log('HELP!');
}

// initialize loop condition variable
let i = 0;

/* check if we have run loop 1000 times */
while(i < 1000){
  // call sendSignal() Function
    sendSignal();
  // increment loop condition variable on each iteration
    //i = i + 1; (add 1 to i variable)
    //i += 1; (equivalent to above)
    i++; // (equivalent to above)
}

// initialize result to calculate (if applicable)
let result = 0;
// initialize loop condition variable
let j = 1;

/* loop while this condition is true;
condition is checked before each iteration of loop */
while(j <= 10) {
  // calculate result value
    result = result + j;
  // or run iteration logic
    console.log('Iteration Sub-Total:', result);
  // loop condition variable incremented each iteration
    j++;
}

console.log('Result Total:', result);
