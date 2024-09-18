const hobbies = ["Sports", "Singing"];
const newHobbies = ["Dance"];

const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies); //[ [ 'Sports', 'Singing' ], [ 'Dance' ] ]
//  -- it will contains as two arrays, If we want to have three elements in it then we will get it through the spread operator.
console.log(mergedHobbies.length); // 2


const mergedHobbies2 = [...hobbies, ...newHobbies];
console.log(mergedHobbies2) //[ 'Sports', 'Singing', 'Dance' ]
console.log(mergedHobbies2.length);// 3

//------------------------------------------------------------------------------------------------------------
// in case of object , we can add the properties of one object to another object through the Spread operator
// ----------------------------------------------------------------------------------------------------------

const userObject = {
    name : "Vijay",
    age : 36
};

const extendedUser = {
    isAdmin :true,
    ...userObject
};

console.log(extendedUser); //{ isAdmin: true, name: 'Vijay', age: 36 }