// Objects can be used to group multiple values in the function.
const user = "Max";
const age = 34;

// Group above vars into an object 

const UserObject = {
    name: "Max", 
    age: 56, 
    // we can define a function insde the Class Object itself, so we can able to access the class variables using the 
    // 'this' keyword

    greet() {
        console.log(this.name),
        console.log(this.age)
    }
}

console.log(UserObject)
console.log(UserObject.name)

UserObject.greet()


// We can create objects using class 
class UserObj2 {
    // Constructor - used to accept the parameters and intialize those for a class
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    greet() {
        console.log("Hii, How are you?")
    }
}
// Similar to OOPS concept -- We can create a class with template and Intialization
const user1 = new UserObj2("Vinod", 30)
console.log(user1)



