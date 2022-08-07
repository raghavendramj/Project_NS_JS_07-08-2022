//Function expression in JavaScript
var product = function (a, b) {
  var prod = a * b;
  console.log("product :- ", prod);
};

product(5, 4);

//IIFE -> Immediately Invoable Function Expression!

(function (a, b) {
  var prod = a * b;
  console.log("product :- ", prod);
})(5, 6);
