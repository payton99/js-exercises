// Intro to JavaScript
//
// Functions Deep Dive


// Function declaration
// --------------------

// +----------------------------------------------------------------+

// A function declaration begins with the word 'function', followed
// by the name of the function.
//
// The contents of the function (also known as the code block) is
// last.

function square(num)
{
    return num ** 2;
}

// let n = square(256);
// console.log(n);

// +----------------------------------------------------------------+


// Function expression (anonymous functions)
// -----------------------------------------

// +----------------------------------------------------------------+

// Function expressions don't require a name after the function 
// keyword- since the function itself has no name, they are
// considered anonymous. The functions are also referenced by a
// variable.

const cube = function (num) {
    return num * num * num;
};

// console.log(cube(4));


// Does 'let' keyword work?

let happySentence = function (thought) {
    return "I am so glad that I " + thought + ".";
};

// console.log(happySentence("am learning JS"));


// Can we do function expressions without saving it to a variable?

// (function () 
// {
//     console.log("I am anonymous");
// })()

// In order to call the function above, we wrap the whole thing in
// parentheses and add an empty set of parentheses at the end to call
// it.

// +----------------------------------------------------------------+


// Arrow functions
// ---------------

// +----------------------------------------------------------------+

// The ES6 version of JavaScript has introduced the arrow function. 
// This gives us a shorter syntax that behaves like a function 
// expression but uses the arrow operator.

const getProduct = (num1, num2) => {return num1 * num2};
// console.log(getProduct(2, 3));


// If there is only one expression happening within the function, such
// as above, we can drop the curly braces and the return statement.

const getSum = (num1, num2) => num1 + num2;
// console.log(getSum(4, 5));


// If we have no parameters, we still include the round brackets, 
// they will just be empty.

const whoAmI = () => "I am an arrow function.";
// console.log(whoAmI());

// +----------------------------------------------------------------+


// Function hoisting
// -----------------

// +----------------------------------------------------------------+

// Function declarations are hoisted to the top of the program, 
// meaning they are called first. So we can call the function
// name before we even define it.

// console.log(calledFirst());

function calledFirst()
{
    return "Here I am.";
}

// It is important to note that this only works for named functions.
// So, anonymous and arrow functions will not work because they are
// referenced through a variable.

// +----------------------------------------------------------------+


// Function properties
// -------------------

// +----------------------------------------------------------------+

// Since JavaScript functions are objects, they have properties just
// like other objects:
//
//      -> length: determines the total arguments in a function
//      -> prototype: references the actual function object

function breakfast(item)
{
    return `This morning I had ${item}.`;
}

// console.log(breakfast.length);
// console.log(breakfast.prototype);

// +----------------------------------------------------------------+


// Function methods
// ----------------

// +----------------------------------------------------------------+

// The 'this' keyword represents the calling object for the function.

// function showName()
// {
//     console.log(this);
//     console.log(this.name);
// }

// const person = {
//     name: "Payton",
//     showName: showName
// }

// person.showName();

// showName();

