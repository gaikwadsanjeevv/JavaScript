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
#### Array Methods  
![image](https://github.com/user-attachments/assets/58abf194-e1fb-4c07-9140-0a0a957bca97)  
![image](https://github.com/user-attachments/assets/575392bf-0e8e-4303-b89f-b833d13d92f3)  
![image](https://github.com/user-attachments/assets/00333db3-0c10-4f82-8f80-7800910a4e7e)  
![image](https://github.com/user-attachments/assets/6ad59fc6-ce69-4f8f-958b-df294f944d71)  
![image](https://github.com/user-attachments/assets/dad8f52a-153b-477f-865d-36b0aafc82db)  
![image](https://github.com/user-attachments/assets/522fbd03-e3ad-428b-8c26-4f5b5d005338)  
![image](https://github.com/user-attachments/assets/81091ed1-e675-4e9e-a023-0aa4184c9604)  
![image](https://github.com/user-attachments/assets/fefa066c-1d7c-45c3-b3db-ed8d3199f423)  
![image](https://github.com/user-attachments/assets/965d5d82-2af3-4bf5-93b3-a198ba123f03)  
![image](https://github.com/user-attachments/assets/85573b4e-7638-4b66-bc24-22b43afef1e2)  
![image](https://github.com/user-attachments/assets/30046b15-9ff0-45b3-a6f3-68c7117e0334)  
![image](https://github.com/user-attachments/assets/3abfb10c-5122-4bea-a544-bc1f0854fcf0)  




![image](https://github.com/user-attachments/assets/36eb2662-012c-4071-af4a-61227017adc7)  
![image](https://github.com/user-attachments/assets/2c2947bf-71d5-4519-ba9b-6af8e82ca6d5)  
![image](https://github.com/user-attachments/assets/d6e323b9-31fd-44fc-8077-7424e7b9ad34)  
![image](https://github.com/user-attachments/assets/2a1c4765-7a2e-45d9-a9be-30fa7a77f0f7)  
![image](https://github.com/user-attachments/assets/ff7b1aa9-b4de-4fef-9461-83174cc1da3e)  
![image](https://github.com/user-attachments/assets/9a08f7d9-f854-4081-bda7-aa26a5fc2106)  
![image](https://github.com/user-attachments/assets/d841145b-02ca-4142-8f36-db5df795ee6d)  
![image](https://github.com/user-attachments/assets/321cca63-e84f-48f1-be30-a2d06d43567b)  
![image](https://github.com/user-attachments/assets/f7cc8bb1-0671-4691-8d6f-ae67118539d5)  
New Way:  
![image](https://github.com/user-attachments/assets/dd88e73d-e4df-40d0-a696-904daf3caa1f)  
More Clear if there is only one variable. Arrow function  
![image](https://github.com/user-attachments/assets/97abe9cc-f0a0-4aa0-adcc-917577ac56bc)
![image](https://github.com/user-attachments/assets/d9b891f3-ba0b-4620-abd6-1e4b5bd6c4fc)  

#### Object  
- Is the collection of key value pair.
var person = {  
name = 'John',  
age: 30,  
city: 'New York' };

we can put function inside value of object  
![image](https://github.com/user-attachments/assets/e4f1884b-890f-44cc-acb5-415a1c8bb7f8)  
![image](https://github.com/user-attachments/assets/bc24d5e5-2343-48f4-8180-b163ccc1f1a7)  
![image](https://github.com/user-attachments/assets/15452ecf-4c62-40a4-b436-e666b315fe3a)  
Reference is checked in object so both didnot equal, value is checked in primitive variable comparision.  

#### Hoisting  
- Hoisting in JavaScript moves variable and function declarations to top of their scopes, allowing them to be used before they are actually declared in the code.
- Variables declared using the var keyword are hoisted only the declaration is hoisted not the initialization.
```JavaScript
console.log(myVariable);  //Output: undefined
var myVariable = 10;


var myVariable;
console.log(myVariable);  // output: undefined
myVariable = 10;
```
- Unlike function declarations, fucntions expression are not hoisted.

![image](https://github.com/user-attachments/assets/7d87dc26-2d82-464b-a13a-8f2f941030c5)  
- It is recommended to used let and const instead of var to declare variables.

#### Call Back Function  
- A call back function or a piece of code that is passed as an argument to another function.
  ```JavaScript
  function processData(data) {
  console.log("processing..."+data);
  }
  function deleteData(data) {
   console.log("deleting..."+data);
  }
  function func(methodName) {
  MethodName("John");
  }

  func(deleteData);   //passing function as argument is called call back
  ```
#### Filter
```JavaScript
const numbers = [1,2,3,4,5,6];  
//Filter even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); //Output: [2,4,6]

//Filter number greater than 3
const freaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); //Output: [4,5,6]

```
![image](https://github.com/user-attachments/assets/883da956-5a32-4a4b-bb55-3de1b9d4392e)  
![image](https://github.com/user-attachments/assets/a0623090-baf8-45e9-b292-fb6e07e741cd)  
![image](https://github.com/user-attachments/assets/62414986-0049-42e7-b123-b5de5dbb2f4a)  
##### This Keyword  
![image](https://github.com/user-attachments/assets/2a4c2b96-a66b-4ca9-ae55-50636542d2ce)  
#### DOM  
The DOM represents the structure of a web page as a tree-like structure, where each element in the web page is a node in the tree.  
![image](https://github.com/user-attachments/assets/e810c8ae-e56d-43fd-b9d3-a43cd2a47a14)  
![image](https://github.com/user-attachments/assets/9dbbe783-ae77-4d6c-9860-1f9e6399a289)  
![image](https://github.com/user-attachments/assets/f04e3ea8-13db-4490-b322-00ef37821630)  
##### Commonly used DOM methods grouped by their functionality:  
```JavaScript
1. Element Selection Methods
document.getElementById(id)
Selects an element by its ID.
document.getElementsByClassName(className)
Selects all elements with a specific class name.
document.getElementsByTagName(tagName)
Selects all elements with a specific tag name.
document.querySelector(selector)
Selects the first element that matches a CSS selector.
document.querySelectorAll(selector)
Selects all elements that match a CSS selector.
2. Element Creation Methods
document.createElement(tagName)
Creates a new element of the specified tag.
document.createTextNode(text)
Creates a new text node.
3. Element Insertion and Modification
element.appendChild(node)
Appends a child node to the specified element.
element.insertBefore(newNode, referenceNode)
Inserts a new node before a reference node.
element.replaceChild(newNode, oldNode)
Replaces a child node with a new node.
element.removeChild(child)
Removes a child node.
element.innerHTML
Gets or sets the HTML content of an element.
element.innerText / element.textContent
Gets or sets the text content of an element.
4. Attribute Manipulation
element.getAttribute(attributeName)
Retrieves the value of an attribute.
element.setAttribute(attributeName, value)
Sets an attribute's value.
element.removeAttribute(attributeName)
Removes an attribute from an element.
element.hasAttribute(attributeName)
Checks if an element has a specific attribute.
5. Style and Class Manipulation
element.classList.add(className)
Adds a class to the element.
element.classList.remove(className)
Removes a class from the element.
element.classList.toggle(className)
Toggles a class on the element.
element.classList.contains(className)
Checks if an element has a specific class.
element.style.propertyName
Sets or retrieves a CSS property value.
6. Event Handling
element.addEventListener(event, callback)
Attaches an event listener to an element.
element.removeEventListener(event, callback)
Removes an event listener from an element.
element.dispatchEvent(event)
Dispatches an event to an element.
7. Traversing the DOM
element.parentNode
Gets the parent node of an element.
element.childNodes
Returns a NodeList of child nodes (including text nodes).
element.children
Returns a live collection of child elements (excluding text nodes).
element.firstChild
Gets the first child node.
element.lastChild
Gets the last child node.
element.nextSibling
Gets the next sibling node.
element.previousSibling
Gets the previous sibling node.
element.firstElementChild
Gets the first child element.
element.lastElementChild
Gets the last child element.
element.nextElementSibling
Gets the next sibling element.
element.previousElementSibling
Gets the previous sibling element.
8. Form and Input Methods
element.focus()
Sets focus to an element.
element.blur()
Removes focus from an element.
form.submit()
Submits a form.
form.reset()
Resets all form fields.
input.select()
Selects the text in a text input field.
9. Node Information
node.nodeType
Gets the type of a node (e.g., element, text, comment).
node.nodeName
Gets the name of the node.
node.nodeValue
Gets or sets the value of a node.
10. Dimensions and Position
element.offsetWidth / element.offsetHeight
Gets the width/height of an element including padding and borders.
element.clientWidth / element.clientHeight
Gets the width/height of an element excluding borders but including padding.
element.scrollWidth / element.scrollHeight
Gets the total scrollable width/height of an element.
element.getBoundingClientRect()
Returns the size and position of an element relative to the viewport.
11. Other Useful Methods
document.createDocumentFragment()
Creates a lightweight, invisible container for DOM manipulation.
document.getSelection()
Retrieves the selected text or elements.
document.write(html)
Writes HTML directly to the document (not recommended).
window.getComputedStyle(element)
Retrieves the computed style of an element.
```

















 















