// for each
// We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes call-back as a parameter. The forEach method is used only with array and we use forEach if you are interested in each item or index or both.
const countries = ["Finland", "Estonia", "Sweden", "Norway"];
countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase());
});
// another example
const numbers = [12, 34, 45, 5623, 45, 56];
let sum = 0;
numbers.forEach((n) => (sum += n));
console.log(sum); // 15

// map funtion
// We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.

const newCountries = countries.map(function (country) {
  return country.toUpperCase();
});

console.log(newCountries);
// another example

const conlength = countries.map(function (country) {
  return country.length;
});

console.log(conlength);

// another example
const square = numbers.map(function (n) {
  return n * n;
});
console.log(square);

// filter
// As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.
const countrieswithland = countries.filter(function (country) {
  return country.includes("land");
});

console.log(countrieswithland);

const even = numbers.filter((n) => n % 2 === 0);
const odd = numbers.filter((n) => n % 2 !== 0);

console.log(even);
console.log(odd);

// reduce
// Like forEach, map, and filter, reduce is also used with an array and it returns a single value. You can associate reduce with a blender. You put different fruits to a blend and you get a mix of fruit juice. The juice is the output from the reduction process.
const sumall = numbers.reduce((acc, red) => acc + red);
console.log(sumall);
const multiall = numbers.reduce((acc, red) => acc * red);
console.log(multiall);

// find
const firsteven = numbers.find((n) => n % 2 == 0);

// findindex
const newnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenIndex = newnumbers.findIndex((n) => n % 2 === 0);
const firstOddIndex = newnumbers.findIndex((n) => n % 2 !== 0);
console.log(firstEvenIndex); // 0
console.log(firstOddIndex); // 1

// some
// The some method is used with array and return a boolean. If one or some of the items satisfy the criteria the result will be true else it will be false. Let us see it with an example.
const someAreEvens = numbers.some((n) => n % 2 === 0);
const someAreOdds = numbers.some((n) => n % 2 !== 0);
console.log(someAreEvens); // true
console.log(someAreOdds); // true
