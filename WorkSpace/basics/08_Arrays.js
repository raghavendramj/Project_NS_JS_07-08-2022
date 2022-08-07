function arrayIntro() {
  var arr1 = ["Siman", "Preeti", "Balaji", "Nahar", "Usha"];
  console.log("arr1 Elements :-", arr1);
  console.log("arr1[2]:-", arr1[3]);
  console.log("Size of arr1:-", arr1.length);

  var arr4 = [1, 2, 3, 4, 5]; //Integer array
  var arr5 = [true, true, false, true]; //Boolean array
  var arr6 = ["Raghav", 10, true, { x: 1, y: 12 }, undefined, null, ["a", "b"]]; //Everything array
  console.log(arr6);
}

// arrayIntro();

function printElements(arr) {
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

function addRemoveElementsFromEnd() {
  var students = ["Siman", "Preeti"];
  printElements(students);
  students.push("Balaji");
  students.push("Usha");
  //push(element) Appends new elements to the end of an array, and returns the new length of the array.
  console.log("***************** After addition from end ***************");
  printElements(students);

  students.pop();
  students.pop();
  students.pop();

  console.log("***************** After deletion from end ***************");
  printElements(students);
}
// addRemoveElementsFromEnd();

function addRemoveElementsFromBeggining() {
  var students = ["Usha", "Sukhbir"];
  printElements(students);
  students.unshift("Saurabh");
  students.unshift("Aparna");
  //Inserts new elements at the start of an array
  console.log("**** ********* After addition from the beginning *******");
  printElements(students);

  students.shift();
  students.shift();
  students.shift();

  console.log("************* After deletion from beginning ***********");
  printElements(students);
}

// addRemoveElementsFromBeggining();

function deleteMethod() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  printElements(students);

  delete students[1];
  delete students[3];
  console.log("***************** After delete method ***************");
  printElements(students);
}

// deleteMethod();

function joinMethod() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurabh"];
  console.log("students.join('<->') :- ", students.join(" -> "));
}

// joinMethod();

function mergeTwoArrays() {
  var arr1 = ["Siman"];
  var arr2 = ["Sahil", "Pavan"];
  var arr3 = ["Jasmeen", "Aparana"];
  //var clubbedArray = arr1.concat(arr2).concat(arr3);
  var clubbedArray = arr1.concat(arr2, arr3); //Preferable

  console.log("arr2.concat(arr3) :- ", clubbedArray);
}

// mergeTwoArrays();

function spliceMethod() {
  // Parameters
  // 1 -> from position where elements needs to be added/removed
  // 2 -> how many elements needs to removed (count)
  // 3 and afterwards -> (element(s) that needs to be added);

  //Case-01 : Only Removal
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  cities.splice(1, 2);
  console.log("After Removal :-", cities);

  console.log("--------------------------------------------------------");
  //Case-02: only Addition
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("Before addition :-", cities);
  cities.splice(2, 0, "Lucknow", "MP");
  console.log("After addition :-", cities);

  console.log("--------------------------------------------------------");
  //Case-03: Both Addition and Removal
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Before Addition and Removal :-", cities);
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("After Addition and Removal :-", cities);
}

// spliceMethod();

function sliceMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("cities.slice(0, 3) :-", cities.slice(0, 3));
  console.log("cities.slice(0, -1) :-", cities.slice(0, -1)); //0, 3
  console.log("cities.slice(-3, -1) :-", cities.slice(-3, -1)); //1, 3
}

// sliceMethod();

//If beginIndex or endIndex is negative then it is treated as
// beginIndex = arr.length + beginIndex
// endIndex   = arr.length + endIndex

// 4 + (-1) = 3

// 4 + (-3) = 1
// 4 + (-1) = 3

function forOfLoop() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  for (var i = 0; i < cities.length; i++) {
    console.log("Each element - for loop :- ", cities[i]);
  }

  console.log("********************* for of loop *********************")
  for (var eachElement of cities) {
    console.log("Each element - for of loop :- ", eachElement);
  }
}

forOfLoop();
