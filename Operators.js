let a= 5;
let b = 2;

console.log("5 == 2", a == b);
console.log("5 != 2", 5 != 2);

// == check only value 
// === strict check value and type

let c = 5;
let d = "5";   //string type

console.log( "c == d", c == d);
console.log( "c === d", c === d);

console.log((a > b) && (c > d ));
console.log((a > b) != (c > d ));
console.log((a > b) || (c > d ));

