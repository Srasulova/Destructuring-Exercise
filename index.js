// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// It prints 8
// console.log(numPlanets);
// It prints 1846
// console.log(yearNeptuneDiscovered);

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);
// this prints out an object with 2 keys/values.
// yearMarsDiscovered: 1659
// yearNeptuneDiscovered: 1846

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

// this will print out "Your name is Alejandro and you like purple"
getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?

// this will print "Your name is Melissa and you like green"
getUserData({ firstName: "Melissa" }); // ?

// this will print "Your name is undefined and you like green"
getUserData({}); // ?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? Maya
console.log(second); // ? Marisa
console.log(third); // ? Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // ? "Raindrops on roses"
console.log(whiskers); // ? "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ? ["Bright copper kettles", "warm woolen mittens","Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // ? [10, 30, 20]

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

/* Write an ES2015 Version */

let { a, b } = obj.numbers;
console.log(a, b);

var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr);

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
