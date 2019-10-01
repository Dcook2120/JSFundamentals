//Boolean
//boolean can represent eaither true or false, yes/no, on/off

let i = true;
let j = false;

console.log(i);

//Null
//null = empty value, it is not 0 or undefined. 
// it is like an empty container, nothing is in it, but it still exists as a space to fill.

let empty = null;
console.log(empty);

//Undefined
//undefined = no value assigned, not even empty container.
//undefined is not an error.

let undef = undefined; //never do this btw;
console.log(undef);

let grass;
console.log(grass); //undefined;

//numbers
let degrees = 90;
console.log(degrees);

let precice = 999999999999999;
console.log(precice);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//Strings are dats types used to represent text and wraped in either double or single quotes.

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//Objects

let car = {
    color: 'red',
    tires: '4',
    extras: 'A/C and Radio',
    cool: true
}
console.log(car);
console.log(typeof car);

//array
//arrays are containers that hold lists of items;
let list = ['item1', 'item2', 'item3'];
// (1)  (2)  (3)

//1- name of the array
//2- square brackets = array
//3- each item, regardless of datatype, is seperated by commas.

let groceryList = ['milk', 'apples', 'cereal'];
console.log(groceryList); //object

//addition + concatenation
//checkout javascript coersion

//challenge
let firstName = "Daniel";
let lastName = "Cook";
console.log(firstName, lastName);

let houseNumber = 12398;
console.log(houseNumber);

let street = "Sunblest DR";
console.log(street);

let city = "Fishers";
console.log(city);

let state = "Indiana";
console.log(state);

let zipcode = "46038";
console.log(zipcode);

//Strings-Properties
/*
Properties ar equalities associated with a dataType.
Strings have properties associated with thats string.
E.g. the length of a strenth is a property. 
*/

let myName = "Daniel";
console.log(myName.length);

//Methods
//Methods are tools used to manipulate data.
//* .property = no paraentheses;
//*.methods() = paraentheses;

//Split Challenge
//challenge
let sent = 'This sentence will be split into individual parts';
console.log(sent.split());
console.log(sent.split(''));
console.log(sent.split(' '));