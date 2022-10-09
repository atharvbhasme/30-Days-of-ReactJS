const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;

const emptyarr = new Array();

// Declare an array with more than 5 number of elements

const emptynumltiarr = new Array(6);
console.log(emptynumltiarr);

// lenght of array
console.log(emptynumltiarr.length);

// Get the first item, the middle item and the last item of the array
console.log(countries[0]);
let middle = Math.floor(countries.length / 2);
console.log(countries[middle]);
console.log(countries[countries.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedarr = [12, "a", "this", { titile: "atharv", name: "atharv" }, true];
console.log(mixedarr);

//
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((Element) => {
  console.log(Element.toUpperCase());
});

// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach((Element) => {});

// Sort the array using sort() method
console.log(itCompanies.sort());

// reverse the array
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length - 1));

// Slice out the middle IT company or companies from the array
console.log(
  itCompanies.slice(
    Math.floor(itCompanies.length / 2),
    Math.floor(itCompanies.length / 2) + 1
  )
);

// Remove the first IT company from the array
itCompanies.pop();

// Level 2

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replace(/[^a-zA-Z ]/g, "");
let words = text.split(" ");
console.log(words);
console.log(words.length);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

