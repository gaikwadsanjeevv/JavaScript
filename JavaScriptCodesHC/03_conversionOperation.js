//somestimes when value comes from frontend we dont know it type.

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //till here when we print it shows score as number in output

console.log(valueInNumber);  //but when we see the actual value its NaN - Not a Number 

//  "33"  => 33
// "33abc" => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// true => 1;  false => 0
// " " => false
// "hitesh" => true

let someNumber = 33
let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);



