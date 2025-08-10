// Challenge 2 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,
};

// Deep clone the complexObject three times using the spread operator for shallow cloning

const clone1 = { ...userObject, age: 25 };
const clone2 = { ...userObject, age: 35 };
const clone3 = { ...userObject, age: 28 };

// Store the cloned objects in an array

const cloneObj = [clone1, clone2, clone3];


// Sort the array of cloned objects based on the 'age' property in ascending order

cloneObj.sort((a, b) => a.age - b.age);
// Log the sorted array to the console
console.log(cloneObj);


