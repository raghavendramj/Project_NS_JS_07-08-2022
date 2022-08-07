//Normal Function
function sayHello() {
  console.log("Welcome to JS");
}

sayHello();

function add(a, b) {
  var result = a + b;
  console.log("Result :- ", result);
  return result;
}
var out1 = add(10, 20);
console.log("Outside result is :- ", out1);
var out2 = add(10);

//Function expression in JavaScript
var subtract = function (a, b) {
  var result = a - b;
  console.log("Difference :- ", result);
  return result;
};

console.log("subtract :- ", subtract);
console.log("subtract(20, 4) :- ", subtract(20, 4));

