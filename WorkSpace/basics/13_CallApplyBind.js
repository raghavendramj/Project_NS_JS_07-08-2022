// function greet() {
//   console.log("Welcome to the class!");
// }

// greet();
// greet.call();
// greet.apply();
// greet.bind({})();

function add(a, b) {
  var result = a + b + this.c;
  console.log("Result :- ", result);
  return result;
}

//add(10, 20); //NAN
var obj = { c: 30 };
console.log("------------------ call function ----------------");
add.call(obj, 10, 20);
obj = { c: 250 };
add.call(obj, 10, 20);
console.log("------------------ apply function ----------------");
add.apply(obj, [10, 20]);

console.log("------------------ Bind function { c: 10 } ----------------");
var add10 = add.bind({ c: 10 });
add10(5, 4);
add10(10, 10);
add10(15, 25);

console.log("------------------ Bind function { c: 15 } ----------------");
var add15 = add.bind({ c: 15 });
add15(5, 4);
add15(10, 10);
add15(15, 25);
