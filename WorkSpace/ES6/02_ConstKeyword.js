function testConst() {
  var x = 10;
  {
    var x = 2;
    console.log("Value of X INSIDE :- ", x);
  }
  console.log("Value of X OUTSIDE :- ", x);

  const pi = 3.142;
  //   pi = 3.14; //TypeError: Assignment to constant variable.
  //   pi = pi + 10;  //TypeError: Assignment to constant variable.

  //const y; //SyntaxError: Missing initializer in const declaration
  const y = 10;
}

// testConst();

function constWithArrays() {
  const cars = ["Saab", "Volvo", "BMW"];
  cars[0] = "Toyota";
  console.log("Cars :- ", cars); //Allowed
  cars.push("Audi");
  console.log("Cars :- ", cars); //Allowed
  cars = ["Toyota", "Volvo", "Audi"]; //TypeError: Assignment to constant variable
}
constWithArrays();

function constWithObjects() {
  const car = { type: "Fiat", model: "500", color: "white" };
  console.log("Car Object:- ", car);
  car.color = "red";
  console.log("Car Object:- ", car);
  car.owner = "Johnson";
  console.log("Car Object:- ", car);
  car = { type: "Volvo", model: "EX60", color: "red" }; //TypeError: Assignment to constant variable.
}
