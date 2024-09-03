function name_of_function(params){
    console.log(params)
}

// name_of_function() -- going to get response as 'undefined' since we are not passing the parameters

name_of_function("vinod") // Printing vinod in the console
name_of_function() // It will not throw the exception here -- It will simply take the params as 'undefined' 

function with_default_values(age=10, name="Hello"){
    console.log(age)
    console.log(name)
}

with_default_values() // print default values

with_default_values("456", "vinod") // we can change the input datatype as well, same as python
with_default_values(name=678)
// // However, when you call with_default_values(name=678), 
// // it's not a valid JavaScript syntax. JavaScript does not support passing arguments
// // using keyword arguments like name=678. Instead, it treats name=678 as a syntax error.


with_default_values(undefined, name="Ajay")


// // *********************************************************************************************
// // Arrow Functions: Ananymous functions --- we do not have any name for this function
// // () => {}
// //**********************************************************************************************

// export default (name, age) => {
//     console.log("Name is ", name)
//     return name + age
// }


// 

