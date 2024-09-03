// Arrays -- [] created of squre brackets
// Objects is of dict type like, key-value pair ..where as Arrays are of list of objects alone

const hobbies = ["Vinay", "Vijay","vinod"]
// Used to store the list of values

// Arrays contains any kind of data
console.log(hobbies)
hobbies.push("NewElm")
console.log(hobbies)

// findIndex function
const res = hobbies.findIndex((item)=>{
    return item ==='vinod';
})

console.log(res)

// Map is useful object on Array

const newArray = hobbies.map((item)=> ({text:item}))
console.log(newArray)

// Destructuring the Array
const userNameData = ['Vinod', 'Reddem']
const finalName = userNameData[0]
const lastName = userNameData[1]

// Second Way of destrucitng the array
const [finalName1, lastName1] = ['Vinod', 'Reddem']

// Same thing we can implment through the curly braces for classes
const {name, age} = {name: "vinod", age:35}
// Here we need to define same variable name insie the object like name and age ..so we can do destructing


//----------------------------------------------------
// Array - Functions
//----------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Length of the array ---", fruits.length)

