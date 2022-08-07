function arrayRefExample() {
  var cities = ["Bangalore", "Chennai", "Mumbai", "Kolkatta", "Delhi"];
  var citiesCopy = cities;

  console.log("Cities :- ", cities);
  console.log("citiesCopy :- ", citiesCopy);

  // cities = ["Bangalore", "Chennai", "Mumbai"]; //We have changed entire reference.

  cities.pop();
  cities.pop();
  cities.pop();
  cities.pop();

  console.log("-----------------------------------------------------");
  console.log("Cities :- ", cities);
  console.log("citiesCopy :- ", citiesCopy);
}

function objectRefEx() {
  var person = {
    firstName: "Adam",
    lastName: "Gilchrist",
  };

  var perCopy = person;
  console.log("Person is : ", person);
  console.log("perCopy is : ", perCopy);

  //   perCopy['address'] = 'Bangalore';
  person = {
    firstName: "Saurav",
    lastName: "Ganguly",
  }; // modifying the reference of object 1;
  console.log("-------------------------------------------");
  console.log("Person is : ", person);
  console.log("perCopy is : ", perCopy);
}

objectRefEx();
