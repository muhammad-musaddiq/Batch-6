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
var arraytwo = arrayOne; // it will create a refrance of array One
var arrayThree = arraytwo; // it will create a refrance of array One

arraytwo.push("three");

console.log(arrayOne, "arrayOne");
console.log(arraytwo, "arraytwo");
