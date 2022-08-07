function testingVar() {
  var number = 10;
  console.log("First Time :- ", number);
  var number = 20;
  console.log("Second Time :- ", number);
}

testingVar();

function testingLet() {
  let number = 10;
  console.log("First Time :- ", number);
  if (number == 10) {
    let number = 20;
    console.log("Second Time :- ", number);
  } else {
    let number = 30;
    console.log("Third Time :- ", number);
  }
}
function hoistingTestLet() {
  console.log(str); //Cannot access 'str' before initialization
  let str;
  console.log(str);
  str = "Raghav";
}
hoistingTestLet();
