// Passing functions as values to another function

function handleTimeout(){
    console.log("Timed out!!")
}
const function2 = () => {
    console.log("Timed out Anonymous function!!")
};

//  setTImeout function takes function as input
setTimeout(handleTimeout, 2000);
setTimeout(function2, 5000)

// Objects are working as reference values -- like it will store the address of the object , not the value
// So when we change the values say, push on array ---> it will edit the object it will not create new array

// where as in a string If we modify the existing streing then it will create a new string , it will not modify the existing string.


