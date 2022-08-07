hoistingTest();

function hoistingTest() {
  debugger;
  console.log(number); //ReferenceError: number is not defined -> undefined
  var number;
  console.log(a);
  console.log(b);
  console.log(number);
  number = 23;
  console.log(number);
  var a = 10;
  var b = 20;
}


