// Define primitive variables
let num = 42;                   // Number
let str = "Hello, World!";       // String
let bool = true;                 // Boolean
let undef;                       // Undefined
let nul = null;                  // Null (type will show as 'object' due to legacy reasons)
let bigIntNum = 12345678901234567890n; // BigInt
let sym = Symbol("unique");      // Symbol

// Create an array of variables to print values and types
const variables = [
    { name: "Number", value: num },
    { name: "String", value: str },
    { name: "Boolean", value: bool },
    { name: "Undefined", value: undef },
    { name: "Null", value: nul },
    { name: "BigInt", value: bigIntNum },
    { name: "Symbol", value: sym }
];

// Loop through each variable and print its value and type
variables.forEach(variable => {
    let valueStr = (typeof variable.value === 'symbol') ? String(variable.value) : variable.value;
    console.log(`${variable.name}: Value = ${valueStr}, Type = ${typeof variable.value}`);
});
