// integers (numbers)
console.log(145890 + 2312131); // add
console.log(145890 - 2312131); // subtract
console.log(145890 / 2312131); // divide
console.log(145890 * 2312131); // multiply
// string (human words) & variables
let name = "Joe L";
let age = 51;
let food = "pizza";

console.log("My name is " + name + " and I am " + age +
  " years old, and i love to eat " + food + ".");

// functions
function sayHello() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

sayHello();

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(222, 3);
addNumbers(11, 4);
addNumbers(6, 1);

// create a delete function, call it "deleteNumbers"
// it takes two numbers
// use it 3 different times
// until 7:50
// if done make one for multiply and divide

function deleteNumbers(x, y) {
  console.log(x - y)
}

deleteNumbers(22, 4);
deleteNumbers(8, 23);
deleteNumbers(853, 2352353);

let favColor = "pink";
favColor = "blue";
console.log(favColor);
favColor = "green";
console.log(favColor);