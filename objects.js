// Intro to JavaScript
//
// Objects

// An object is a collection of properties and methods. The properties are written
// as name-value pairs, separated by a colon. Methods are actions that can be
// performed, and are stored as function declarations.



// Object inialization
// -------------------

// +----------------------------------------------------------------+

// const car = {
//     make: "Chevy",
//     model: "Malibu",
//     year: 2006,
//     color: "green",
//     condition: "totaled"
// };

// console.log(car.make);
// console.log(car.condition);


// +----------------------------------------------------------------+


// this keyword
// ------------

// +----------------------------------------------------------------+

// 'this' refers to the object itself (it is alot like 'self' in Python)

const person = {
    firstName: "Payton",
    lastName: "Fisher",
    age: 22,
    occupation: "Idk",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// console.log(person.fullName());

// We can also use 'this' on functions defined outside of objects.

const job1 = {
    title: "Data Analyst",
    pay: 60000,
    company: "Earth LLC"
};

const job2 = {
    title: "Stripper",
    pay: 100000,
    company: "Lickety Splits"
};

function jobDescription()
{
    console.log(`This is for the ${this.title} position at ${this.company}!`)
}

job1.jobDescription = jobDescription;
job2.jobDescription = jobDescription;

// job1.jobDescription();
// job2.jobDescription();

