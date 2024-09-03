const userData = ["Max", "Roy"];
// Here first data is first name and second element is last Name 
// in order to get those data we need to use the indexing of the array generally
const firstName = userData[0];
const lastName = userData[1];

// Instead of writing like this we can use the destructing of the array like below
const [firstName1, lastName1] = userData;

console.log(firstName1)
console.log(lastName1)

const userObject = {
    'name' : "Vijay",
    'age' : 36
}

console.log(userObject.name);
console.log(userObject.age);

// const {name, age} = userObject;
// console.log(name);
// console.log(age);

const {name:userName, age} = userObject;
// console.log(name); --- This will throw the ReferenceError: name is not defined error 
console.log(userName);
console.log(age);

