function indexOfAndLastIndexOf() {
  var str = "Hi there, How are you?";
  //Returns the position of the first occurrence of a substring.
  var currentIndex = str.indexOf("are");
  console.log("1. Current Index :- ", currentIndex);

  var second = "I am raghav, and I am from bangalore";
  var idx = second.indexOf("I");
  console.log("2. First Index :- ", idx);
  var lastIdx = second.lastIndexOf("I");
  console.log("3. Last Index :- ", lastIdx);
}

// indexOfAndLastIndexOf();

function searchMethod() {
  var str = "My favorite SpOrT is soccer, but the sport i like is cricket!";
  var idx = str.search("sport");
  console.log("1. Index:- ", idx);

  var regEx = /sport/i;
  console.log("2. Index:- ", str.search(regEx));
}

// searchMethod();

function replaceMethod() {
  var str = "Apples are round, and apples are juicy.";
  var result = str.replace("apples", "oranges");
  console.log("1. result:- ", result);

  var regEx = /apples/i; // i -> case insensitive, g-> global
  var result = str.replace(regEx, "oranges");
  console.log("2. result:- ", result);

  var regEx = /apples/gi;
  var result = str.replace(regEx, "oranges");
  console.log("3. result:- ", result);
}

// replaceMethod();

function substringMethods() {
  var str = "my favorite country is India";
  //first param -> start-index, second -> end-index(exclusive)
  console.log("str.substring(3, 11) :- ", str.substring(3, 11));

  //first param -> start index, second -> length
  console.log("str.substr(3, 11) :- ", str.substr(3, 11));
}
// substringMethods();

function sliceMethods() {
  var str = "my favorite country is India";
  console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

sliceMethods();