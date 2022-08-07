var car = {
  name: "Fiat",
  model: "Punto",
  weight: "1200kg",
  color: "white",
  start: function () {
    console.log("Car started!");
  },
  stop: function () {
    console.log("Car stopped!");
  },
  drive: function () {
    console.log("Now the car is been driven :- ", this);
  },
};

function objectPropsAndMethods() {
  console.log("Car Object ", car);
  console.log("car.color :- ", car.color);
  console.log("car['model'] :- ", car["model"]);
  car.drive();
}
// objectPropsAndMethods();

function forInLoop() {
  for (var eachProp in car) {
    console.log("Key :- ", eachProp, " Value is :- ", car[eachProp]);
  }
}
// forInLoop();

function question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };
  var classical = "rock";
  console.log("music.classical :- ", music.classical);
  console.log("music[classical] :- ", music[classical]);
}
question();
