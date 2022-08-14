function Circle(radius) {
  //Private Members
  let defaultLocation = { x: 0, y: 0 }; //Private Variable
  let computerOptimumLocation = function (factor) {
    //Private Function
    console.log("Factors are...", factor);
  };

  this.radius = radius;
  this.draw = function () {
    computerOptimumLocation(0.1);
    console.log("This is draw, and radius is :- ", radius);
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      //console.log("Default loc:- ", defaultLocation);
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location!");
      }
      defaultLocation = value;
    },
  });
}

// 1. new -> create an empty object {} -> Circle.call({}, ...);
// 2. it will set that empty object to that current object
// 3. returns the object from the function
// Happens in sequence and automatically

let obj = new Circle(10);
// Circle.call({}, 10);
console.log("Before obj.defaultLocation :- ", obj.defaultLocation);

// obj.defaultLocation = 20; //Error: Invalid Location!
obj.defaultLocation = { x: 10, y: 20 };
console.log("After obj.defaultLocation :- ", obj.defaultLocation);
