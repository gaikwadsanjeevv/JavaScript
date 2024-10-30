
//argument keyword function - when u are not sure how many values we are receiving we use argument.

let getCartBill = function () 
{
    let sum = 0;
    for(let i = 0; i < arguments.length; i++)
    {
        sum =  sum + arguments[i];
    }
    return sum;

}
console.log(getCartBill(13));
console.log(getCartBill(13,90,120,4));
console.log(getCartBill(13,90,120,4,54,65,78,98,34,21,34,54,65,76,8));
