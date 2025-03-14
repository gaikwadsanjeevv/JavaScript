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

//*************************** Operations *************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "sanjeev"
let str2 = " Gaikwad"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1"+2+2);  //122
console.log(1+2+"3");  //33

//In JavaScript, the + operator is used for both addition and string concatenation, and it evaluates expressions from left to right.

//Since one operand is a string, JavaScript converts the number 2 into a string, resulting in "12".Since one operand is a string, JavaScript converts the number 2 into a string, resulting in "12".









