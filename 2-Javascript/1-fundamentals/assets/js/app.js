// console.log(`1 js file working fine`);
// console.log("2 js file working fine");
// console.log("3 js file working fine");

// DATA TYPES

// There are two types of data types
// 1 - Primitive type
// 2 - Reference type / object type

// Primitive type variables

var store = "something"; // string  = text
var store = 1234; // number
var store = true; // boolean (true/false)
var store = false; // boolean (true/false)
var store = null; // (khali hai)
var store = undefined; // undefined

// console.log(storetest, "store");

// Reference type

var store1 = ["one", 123, true, false, null, undefined];
var store = {
  //key:value
  one: "one",
  two: "two",
};

// console.log(store1, "store1");
// console.log(store, "store");

var muzammilMarks = 90;
var musaddiqMarks = muzammilMarks;

musaddiqMarks = 95;

// console.log(muzammilMarks, "muzammilMarks");
// console.log(musaddiqMarks, "musaddiqMarks");

// Reference type example

var arrayOne = ["one", "two"];
// var arraytwo = arrayOne; // it will create a refrance of array One
var arraytwo = [arrayOne]; // we can remove refrence from spread operator [...]

arraytwo.push("three");

// console.log(arrayOne, "arrayOne");
// console.log(arraytwo, "arraytwo");

//we have three types of variables
//1- let
//2- const
//3- var

// function test() {

// }

// {} = scope

{
  let musaddiq_var = "working";
  // console.log(musaddiq_var, "musaddiq_var");
}

// console.log(musaddiq_var, "musaddiq_var");

const name = "Musaddiq";

// name = "hammad";

// console.log(name, "name");

function workingFunction() {
  var amountTest = 100;
  // console.log(amountTest, "amountTest");
}

// console.log(amountTest, "amountTest");
workingFunction();

// javascript is case sensitive
var some = "some 1";
var Some = "some 2 with capital S";

// console.log(some, "some");
// console.log(Some, "Some");

//naming of variables

// letters, a to z or 123 =  let test123
// underscore, = let javascript_awesome_one
// camelcase, = let javacsriptAwesomeOne
// pascal case, = let JavacsriptAwesomeOne

//Type Conversion

let testingVariable = "this is text or string";
testingVariable = 1231232;
testingVariable = new String(12344);
testingVariable = new String(true);
testingVariable = new String(false);
testingVariable = new String(new Date());

let date = new Date();
// console.log(date, "date");
// console.log(testingVariable, "testingVariable");

//Convert to number
testingVariable = new Number("2");
testingVariable = new Number(true);
testingVariable = new Number(false);
testingVariable = new Number(null);
testingVariable = new Number("Hello");
testingVariable = new Number([1, 2, 3, 4, 5]);
testingVariable = new Number({ a: 1, b: 2 });

testingVariable = parseInt("2");
testingVariable = parseFloat("2.5");

testingVariable = new Boolean("ABC"); // true
testingVariable = new Boolean(""); // false
testingVariable = new Boolean(1); // true
testingVariable = new Boolean(0); // false

// console.log(testingVariable, "testingVariable 2323");

// console methods

const arrgVariable = {
  name: "Musaddiq",
  designation: "Software Engineer",
  companyName: "Sipli Fleet",
};

// console.error(arrgVariable, "arrgVariable");
// console.info(arrgVariable, "arrgVariable");
// console.warn(arrgVariable, "arrgVariable");
// console.table(arrgVariable, "arrgVariable");

// Arthmetic Operators

testingVariable = 5 + 5;
testingVariable = 5 - 5;
testingVariable = 5 / 5;
testingVariable = 5 % 5;
testingVariable = 5 * 5;

// Math Object / Calculation Methods

testingVariable = Math.round(2.4);
testingVariable = Math.round(2.6);
testingVariable = Math.min(33, 100, 15555, 888, 999, 55555);
testingVariable = Math.max(33, 100, 15555, 888, 999, 55555);
testingVariable = Math.random() * 20 + 1;

// console.log(testingVariable, "testingVariable");

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3

/*=====  End of math floor  ======*/

//String Concatination
//string ko jorna

const firstName = "Muhammad Musaddiq";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName; // Muhammad Musaddiq Mustaqeem

testString = "Hello, World my name is '" + fullName + " and my age' is 24";

testString = "Hello, World my name is '\n Musaddiq Mustaqeem and my age' is 24";

testString = `Hello, World my name is '\n ${fullName} and my age' is 24`;

testString = testString.concat(" new thing ", " second thing");
// testString = testString.toLowerCase();
// testString = testString.toUpperCase();
// testString = testString.includes("Hello, World");
testString = testString.replace(fullName, "Shariq Musatqeem");

// function testing(parm1, parm2) {}

// testing("parm1", "parm2");

// console.log(testString, "testString");

// soda lana hai ammi ka

let saman = "dahi";
// let saman2 = "dahi";
let purchased = "";

if (saman == "tomato") {
  purchased = "tomato";
} else {
  purchased = "dahi";
}

let foodpanda = "dfvzesrdgv";
let drink = "";

if (foodpanda == "briyani") {
  drink = "Jumbo Cold Drink";
} else if (foodpanda == "karahi") {
  drink = "lassi";
} else if (foodpanda == "zinger") {
  drink = "limca";
} else {
  drink = "water";
}

// console.log(drink, "drink");

//Array Methods

const fruits = ["Mango", "Banana", "Apple"];
fruits.push("Grapes");

console.log(fruits, "fruits");
console.log(fruits[0], "fruits");
console.log(fruits[1], "fruits");
console.log(fruits[2], "fruits");
console.log(fruits.length, "fruits");
