let factorial = function(n) {
    if(n==1)
    {
        return 1;
    }
    else
    {
        return factorial(n-1) * n;
    }
}

console.log(factorial(5));
