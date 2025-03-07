// Variable Declarations
var oldVar = "I am var";   // Function-scoped (Avoid using)
let name = "Alice";        // Block-scoped
const age = 25;            // Cannot be reassigned

// Primitive Data Types
let num = 42;              // Number
let str = "Hello World";   // String
let isActive = true;       // Boolean
let notAssigned;           // Undefined
let emptyValue = null;     // Null
let uniqueId = Symbol('id'); // Unique Symbol
let bigNumber = 9007199254740991n; // BigInt

// Non-Primitive Data Type - Object
let person = {
  name: "Alice",
  age: 25,
  isStudent: false
};

// Output
console.log(typeof name);   // Output: string
console.log(typeof age);    // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof notAssigned); // Output: undefined
console.log(typeof emptyValue); // Output: object (Historical JavaScript bug)
console.log(typeof uniqueId); // Output: symbol
console.log(typeof bigNumber); // Output: bigint
console.log(typeof person); // Output: object
