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

console.log(muzammilMarks, "muzammilMarks");
console.log(musaddiqMarks, "musaddiqMarks");

// Reference type example

var arrayOne = ["one", "two"];
// var arraytwo = arrayOne; // it will create a refrance of array One
var arraytwo = [...arrayOne]; // we can remove refrence from spread operator [...]

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

name = "hammad";

console.log(name, "name");
