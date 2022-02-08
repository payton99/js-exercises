// Intro to JavaScript
//
// Built-in Functions

// This lesson will focus on several built-in objects and their associated
// functions. This lesson will focus on 4 of the most used objects:
//
//      -> Array
//      -> String
//      -> Math
//      -> Date


// <------------------------------ PART 1: ARRAY ------------------------------>


// push() and pop()
// ---------------------------------

// +----------------------------------------------------------------+

// The push() method lets you add one or more elements to the end
// of an array.

// let arr = [10, 3, 4, 8, 9, 2];
// console.log(arr);

// arr.push(25);
// console.log(arr);

// pop() lets you delete an element from the end of an array.

// let stuff = ["plant", "tv", "desk"];
// console.log(stuff);

// stuff.pop();
// console.log(stuff);

// +----------------------------------------------------------------+


// shift() and unshift()
// ---------------------------------

// +----------------------------------------------------------------+

// shift() removes an element from the beginning of an array.

// arr.shift();
// console.log(arr);

// unshift() adds an element to the beginning of an array.

// stuff.unshift("candle");
// console.log(stuff);

// +----------------------------------------------------------------+


// indexOf()
// ---------

// +----------------------------------------------------------------+


// indexOf() returns the index position of a specified value.
// console.log(stuff.indexOf("tv")); // <- returns: 1

// +----------------------------------------------------------------+


// splice() and slice()
// --------------------

// +----------------------------------------------------------------+

// splice() lets you add new items to an array
//
// (1) The first parameter defines the positions where new elements
// should be added.
//
// (2) The second parameter defines how many elements should be removed.
//
// (3) Other additional parameters define the new elements to be added.

// stuff.splice(1, 0, "computer"); // returns: ['plant', 'computer', 'tv', 'desk']
// console.log(stuff);


// slice() slices out a piece of an array into a new array

// let nonPlants = stuff.slice(1);
// console.log(nonPlants);

// slice() does not remove any elements from the source array.

// It can also take an additional argument to signify the stopping
// element to remove. NOTE: the second argument does NOT follow
// normal indexing conventions- it follows normal counting.
//
// For instance:
//
//      -> let strings = ["apple", "orange", "banana", "plum"]
//
// If I wanted to remove "orange" and "banana" using slice(),
// I would use:
//
//      -> slice(1, 3)
//
// 1 being the index of the first element I want to remove, 3 being
// the third element I want removed ("banana")
//
// This is incredibly stupid and I don't know why this can't be
// consistent. Idk who's dumbass idea this was, but it's
// horrible.


// let nums = [9, 4, 2, 7, 6, 10];
// let middleNums = nums.slice(2, 5);
// console.log(`nums array: ${nums}`)
// console.log(`middleNums array: ${middleNums}`);


// +----------------------------------------------------------------+


// Iterating over an array with forEach()
// --------------------------------------

// let furniture = ["bedframe", "desk", "nightstand", "dresser"];

// furniture.forEach(
//     function(item, index, array)
//     {
//         console.log(`${index}: ${item}`)
//     }
// )


// <------------------------------ PART 2: MATH ------------------------------>


// Math.abs()
// ----------

// +----------------------------------------------------------------+

// abs() returns the absolute value of a given number.

// console.log(Math.abs(20)); // returns 20
// console.log(Math.abs(-20)); // returns 20

// // It even works on strings of numbers
// console.log(Math.abs("10")); // returns 10

// // However, it does not work on strings of words.
// console.log(Math.abs("ten")); // returns NaN

// +----------------------------------------------------------------+


// Math.ceil() & Math.floor()
// --------------------------

// +----------------------------------------------------------------+

// ceil() rounds up a floating point decimel to the next integer

// console.log(Math.ceil(1.2)); // returns 2

// // floor(), on the other hand, rounds down to the next integer

// console.log(Math.floor(1.99)); // returns 1

// +----------------------------------------------------------------+


// Math.random()
// -------------

// +----------------------------------------------------------------+

// random() returns any random number between 0 and 1

// console.log(Math.random());


// To get a random number bewteen a given range, we multiply the
// random() method by the top end of the range minus the bottom end
// of the range and add in the bottom end of the range after.

// This will give us a random number between 5 and 10
// let random = ((Math.random() * 5) + 5);
// console.log(random);

// To get a better, cleaner answer we can combine Math.floor() and
// Math.random()
//
// To make it inclusive (i.e., have the random number equal 5, 6, 7, 8, 9, or 10)
// we need to add 1 since floor() rounds down

// let random = (max, min) => {
//     num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
// }

// console.log(random(11, 5));

// +----------------------------------------------------------------+


// Math.sign()
// -------------

// +----------------------------------------------------------------+

// sign() returns 1 if the number passed is positive, -1 if it is negative
// and 0 if it is 0.

// let sign_func = (x) => {
//     if (Math.sign(x) === 1)
//     {
//         return "x is positive";
//     }
//     else if (Math.sign(x) === -1)
//     {
//         return "x is negative";
//     }
//     else
//     {
//         return "x is 0";
//     }
// }

// console.log(sign_func(-14));
// console.log(sign_func(0));

// +----------------------------------------------------------------+



// <------------------------------ PART 3: DATE ------------------------------>


// Date.getDate()
// -------------

// +----------------------------------------------------------------+

// Date is a bit different. To create a Date object, we must use the
// 'new' operator to create an instance of the Date object

// let date = new Date();

// This lets us use the methods in the Date() object.

// getDate() returns the day of the month of a given date. If no date
// is given in the new Date() instantiation, today's date will be
// the default.
// console.log(date.getDate());

// let oldDate = new Date("January 16, 2022");
// console.log(oldDate.getDate());

// +----------------------------------------------------------------+


// getDay() & getMonth()
// ---------------------

// +----------------------------------------------------------------+

// getDay() returns the day of the week of a given Date() object.
//
// Values returned are integers between 0-6, representing days of the
// week starting with Sunday.

// let day = new Date();
// console.log(day.getDay());

function dayString(date)
{
    let day;
    switch (date) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

    }
    return day;
}

// let newDay = new Date();
// console.log(dayString(newDay.getDay()));


// getMonth() returns the month. Values are between 0-12 where
// 0 = January, 1 = February, and so on.

// let month = new Date();
// console.log(month.getMonth());