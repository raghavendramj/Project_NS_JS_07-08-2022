function constructorWay() {
  function Circle(radius) {
    //console.log("1. This :- ", this) {}
    this.radius = radius;
    //console.log("2. This :- ", this) {radius : 45}
    this.draw = function () {
      console.log("Circle -> Constructor function - DRAW ", this.radius);
    };
    console.log("3. This :- ", this); //{radius : 45, draw: function}
    //returned -> {radius : 45, draw: function}
  }

  var circle1 = new Circle(45);
  console.log(circle1);
  circle1.draw();

  // 1. new -> create an empty object {}
  // 2. it will set that empty object to that current object
  // 3. returns the object from the function
  // Happens in sequence and automatically

  function Employee(id, fname, lname, city) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function () {
      return this.fname + " " + this.lname;
    };
  }

  var employee1 = new Employee(
    1,
    "raghav",
    "mj",
    "bangalore",
    "test@gmail.com"
  );
  var employee2 = new Employee(2, "keshav", "anand", "madikeri");
  console.log("employee1 -> ", employee1);
  console.log("employee1.fullName() -> ", employee1.fullName());
  console.log("employee2 -> ", employee2);
  console.log("employee2.fullName() -> ", employee2.fullName());
}
// constructorWay();

//2nd way
var obj = { a: 10, b: 20 };
obj["c"] = 30;
obj.d = 40;
console.log("var obj = {} -> ", obj);

//3rd way
var newObj = Object.create({});
newObj["a"] = 57;
newObj.b = 10;
console.log("Object.create({}) -> ", newObj);
