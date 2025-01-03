## JavaScript  
- Adds functionality to web page.
- ECMAScript defines the core rules and features of the JavaScript language, including syntax, keywords, types, objects, functions, and more.
- you can see caniuse.com to see different browsers compactible to : It shows which HTML5, CSS3, JavaScript (ECMAScript), and other web platform features are supported in different browsers.
- DataTypes:  
- Number 3 , 3.14  
- String 'Hello', "Hello", `Hello`  
- Boolean true, false    
- Object key value pair  
- Array ordered list of values  
- Null Intentional absence of any object value  
- Undefined uninitialized or unassigned variable  
- Symbol Represents a unique identifier  
- BigInt Large integers in JavaScript
![image](https://github.com/user-attachments/assets/a09e2684-b566-4f7a-8ef2-45a533805d6c)
![image](https://github.com/user-attachments/assets/c9d2648d-bb98-4b1c-91e3-68a36b4134bb)

![image](https://github.com/user-attachments/assets/b3902e34-4b5e-438c-a570-b5355bca0ec4)  
- toFixed and toString are methods so can be called using dot notation  
- parseInt(): and parseFloat() are functions and can be called directly

##### String  
![image](https://github.com/user-attachments/assets/7eb4a8a4-2ab4-4d44-a12e-e4e216301857)  
- "2" + 1
- '21'
- "2"-1
- 1
- customer = "Sanjeev"
- var greeting = `Hello ${customer}`
- we can write any expression inside {}
![image](https://github.com/user-attachments/assets/8c2fbc11-f5e8-4361-9b90-3bb05ebd7c4b)

String are immutable we may not be able to modify it, but we can take some methods and convert it in uppercase and lowercase and store in another variable then we can see the changed String.  
![image](https://github.com/user-attachments/assets/d6a01c91-aa0f-4bf7-88db-44a7a31aae33)  

### Math Object:  
![image](https://github.com/user-attachments/assets/55cb774d-669e-4935-a1d1-9afe7dac4cba)  

### Boolean, Comparison, and logical Operators in JavaScript  
![image](https://github.com/user-attachments/assets/ce761007-c4d4-4cf1-a6ad-92b54afc67b5)  
![image](https://github.com/user-attachments/assets/662851fd-2383-430e-99f6-f67c5897f78e)  
![image](https://github.com/user-attachments/assets/d9d5bac9-bbc3-4f8a-b548-68e15a629e34)  
![image](https://github.com/user-attachments/assets/0cd453b4-d2c6-410f-bef5-b85cb74bccc9)  
![image](https://github.com/user-attachments/assets/6f71163b-947b-495a-ba17-33b0858c1fc2)  
#### if Statement  
- The if statement executes a block of code if a specified condition evaluates to true.
```javaScript
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote."); // Executes if age is 18 or greater
}
```
#### if-else Statement  
- The if-else statement provides an alternative block of code if the condition is false.
```javaScript
let num = 10;
if (num % 2 === 0) {
  console.log("Even number."); // Executes if num is divisible by 2
} else {
  console.log("Odd number.");
}

```
#### for Loop  
The for loop is used when the number of iterations is known.  
```javaScript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`); // Prints iteration count from 0 to 4
}

```
#### while Loop  
The while loop executes a block of code as long as the condition is true.  
```javaScript
let count = 0;
while (count < 5) {
  console.log(`Count is ${count}`); // Prints count from 0 to 4
  count++; // Increment count
}

```
#### do-while Loop  
The do-while loop ensures that the code block is executed at least once, even if the condition is false.  
```javaScript
let count = 0;
do {
  console.log(`Count is ${count}`); // Executes at least once
  count++;
} while (count < 5);

```
#### switch Statement  
The switch statement is used to perform different actions based on different conditions.  
```javaScript
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```
#### continue Statement  
The continue statement skips the current iteration of a loop and proceeds to the next iteration.  
```JavaScript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the iteration when i equals 2
  }
  console.log(`Value: ${i}`);
}
```
#### break Statement  
The break statement exits a loop or a switch block before its natural completion.  
```JavaScript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exits the loop when i equals 3
  }
  console.log(`Value: ${i}`);
}
```
#### Arrays in JavaScript  
An array is a special variable in JavaScript that can hold multiple values at once. Arrays are a part of JavaScript's standard library and are extensively used to store and manipulate collections of data.  
![image](https://github.com/user-attachments/assets/fb82f307-9275-4d7d-b6fe-354799dd6e80)  
![image](https://github.com/user-attachments/assets/5b0d9b4c-db5d-4c8f-a90d-f9add8efa036)  
![image](https://github.com/user-attachments/assets/cad75d40-d79d-43e4-aaff-4501c05645d4)  
![image](https://github.com/user-attachments/assets/365976f8-ddfd-456a-b839-bcb75fcb18fd)  
![image](https://github.com/user-attachments/assets/43daa5f3-60d6-4267-b39a-c5693d75799b)  
![image](https://github.com/user-attachments/assets/5164d898-bab7-4fdb-ab0d-28c103c55ec3)  
```JavaScript
let items = ["pen", "notebook", "eraser", "marker"];

// Add an element
items.push("pencil");

// Remove the first element
items.shift();

// Find the index of "eraser"
let index = items.indexOf("eraser");

// Replace "eraser" with "sharpener"
if (index !== -1) {
  items[index] = "sharpener";
}

// Loop through and print each item
items.forEach(item => console.log(item));
```

 















