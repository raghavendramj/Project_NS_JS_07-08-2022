function printValues() {
  console.log("1"); //Main Thread
  setTimeout(function () {
    console.log("2");
  }, 2000); // Leaves Main thread, Goes to Web API -> Exceution context -> after 2 secs -> prints
  setTimeout(function () {
    console.log("3");
  }, 0); // Leaves Main thread, Goes to Web API -> Exceution context -> after 0 secs -> prints
  console.log("4"); //Main Thread
}
// printValues(); //1, 4, 3, 2

function testSetTimeout() {
  for (var i = 1000; i < 4000; i = i + 1000) {
    setTimeout(function () {
      console.log("Value of i :- ", i);
    }, i);
  }
}
// testSetTimeout();

function solutionOne() {
  for (var i = 1000; i < 4000; i = i + 1000) {
    (function (myI) {
      setTimeout(function () {
        console.log("Value of i :- ", myI);
      }, myI);
    })(i);
  }
}
// solutionOne();

function solutionTwo() {
  for (let i = 1000; i < 4000; i = i + 1000) {
    setTimeout(function () {
      console.log("Value of i :- ", i);
    }, i);
  }
}
solutionTwo();
