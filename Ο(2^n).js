function fib(n){
    if (n === 0){
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    return console.log(fib(n - 1) + fib(n - 2));
    
}

fib(4);