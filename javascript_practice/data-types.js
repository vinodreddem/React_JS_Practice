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


function example3() {
    const x = 10;
    x = 20; // Error: Assignment to constant variable.
    
    const obj = { name: 'John' };
    obj.name = 'Alice'; // Allowed
    console.log(obj); // { name: 'Alice' }
}

example()