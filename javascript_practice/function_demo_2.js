// Arrow Functions

// Ananonymous functions , do not have any name 
export default (userName, message) => {
    console.log("I am Arrow Function");
    return userName + message
}

// If Arrow function takes exactly one parameter, You may omit the wrapping parentheses.
(userName) => {console.log(userName)}
// Instead of above I can write below code
userName => {console.log(userName)}
// If we do not have any parameters then parentheses must not be omitted.
() => { console.log("I am empty Arrow function")}
// Same If we have more than one parameter also we should not omit the Parenthesis.


// Case 2: Omitting function body curly braces
// If you arrow function contains no other logic  but a return statement, you may omit the curly braces and return Keyword

number => {return number**2}
// Replace Above one with the below
number => number ** 2
let age = 'Age';
// Case 3: Special Case: Just Returning an object
number => {age: number};
// This code would be invalid because JavaScript treats the curly braces as function body wrappers .

// To tell Java script that an object should be created instead , the code need to be adjusted like this
number => ({age:number})


const double = x => x * 2;
console.log(double(5)); // Output: 10

const sum = (a, b) => a + b;
console.log(sum(3, 4)); // Output: 7