// What is the difference between the '===' and '==' operators?
//------------------------------------------------------------------
// '===' - It will compare both the value and type conversion.
// '==' - It will compare only the value.

console.log(1 == 1) // True
console.log(1 === 1 ) // True - Here both the value and Data type are same
console.log(1 == '1') // True  - The '==' operator just compares the value here the 1 and '1' will holds same value
console.log(1 === '1') // False - Data type does not match here
console.log(0 == false) // True
console.log(0 === false) // False - Data type does not going to match

// #########################################################################################################################
// Key Differences:

// Type Sensitivity:
// -------------------
// === does not perform type conversion, so operands must be of the same type to be considered equal.
// == performs type conversion if necessary, which can sometimes lead to unexpected results.


// Use Cases:
// ---------
// === (Strict Equality) is generally preferred for most cases because it avoids unintended type conversions and ensures a more predictable comparison.
// == (Loose Equality) can be useful in specific situations where type conversion is intentional, but its behavior can sometimes be confusing or lead to bugs.
// #########################################################################################################################
let a = []
console.log('5' == 5)           // true (string '5' is converted to number 5)
console.log(a == false)        // true (empty array is converted to false)
console.log(a == 0)            // true (empty array is converted to 0)
console.log([1] == true)        // false (array with 1 is not converted to true)


