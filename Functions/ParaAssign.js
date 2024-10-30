

let getNetPrice = function(price, taxRate=18) 
{
    let netPrice = price + (price * taxRate / 100);
    return netPrice;
}

let netPriceOfProduct1 = getNetPrice(1000, 10);
console.log(netPriceOfProduct1);
let netPriceOfProduct2 = getNetPrice(5600);
console.log(netPriceOfProduct2);
