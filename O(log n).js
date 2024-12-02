//Recursive Function

function logFunc(n) {
    if (n === 0) return "Done";
    n = Math.floor(n / 2);
    console.log(n);
    return logFunc(n);
    
}

//logFunc(8);

//Non-Recursive/Iterative

function logn(n) {
  let loops = 0;
    while (n > 1) {
        n = Math.floor(n / 2);
        console.log("Iteration: " + ++loops )
    }
}

logn(8);