// String
console.log("Hello World")
const var_ex = "Hello World"

// Variable --- Holds the value and assign to a name
// 1. Camel Case
// 2. under scores allowed but not preferred , Use CamelCase for Multiple Word Variable.
// 3. May contains the numbers but not in the begining

   
//  Difference between const, let and var 
//  const                      |             let                                |        var
//-----------------------------------------------------------------------------------------------------------
// 1. Consts like variables    |                                                |
// 2. Must not be re-assigned  |   We can ressign                               |
// 3. Read only                |                                                |
// 5. block scoped             |   block scoped                                 |   function scoped or global scoped
// 6.Must not be re-declared   |   Not redeclared but we can reassign the value |   redeclared and reassined the value
// or reassinged               |                                                |

//          Scope	    Redeclare	    Reassign	    Hoisted	    Binds this
// var	    No	        Yes	            Yes	            Yes	           Yes
// let	    Yes	        No	            Yes	            No	            No
// const	Yes	        No	            No	            No	            No

//##################################################################################################################
// When to use which one?
// 
//##################################################################################################################

function example() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(x); // 10
    console.log(y); // 20
}

function example2(){
    var x =10;
    if(true){
        let y =20        
    }
    console.log(x)
    console.log(y) // Getting Error as referenceError
}
/*

What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.

*/

/*-------------------------------------------------------------------------------------------------------
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp*/

// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

    // Reassign a constant value
    // Reassign a constant array
    // Reassign a constant object
// But you CAN:

    // Change the elements of constant array
    // Change the properties of constant object
//----------------------------------------------------------------------------------------------------------
function example3() {
    const x = 10;
    x = 20; // Error: Assignment to constant variable.
    
    const obj = { name: 'John' };
    obj.name = 'Alice'; // Allowed
    console.log(obj); // { name: 'Alice' }
}

example()