let questions = [
  new Question(
    "When is our independence day?",
    ["5th August", "26th January", "15th August", "1st November"],
    "15th August"
  ),
  new Question(
    "Which is not a JavaScript Framework?",
    ["Python Script", "JQuery", "Django", "NodeJS"],
    "Django"
  ),
  new Question(
    "Who is our current PM?",
    ["Narenda Modi", "Lalit Modi", "Subash Chandra Bose", "Manmohan Singh"],
    "Narenda Modi"
  ),
];

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.curIndex = function () {
  return this.questions[this.questionIndex];
};

Question.prototype.validatAnswer = function (answer) {
  if (this.curIndex().answer === answer) {
    this.score++; //increment score
  }
  this.questionIndex++; //Move to next question
};

function getScores() {
  var finalScores = quiz.score;
  let percentage = (quiz.score / questions.length) * 100;
  return {
    score: finalScores,
    percentage: percentage,
  };
}

//Handle Option Button
//Load the questions
//Show progress -> 1 of 5, 2 of 5....
//Quiz Ended -> Show final page for results!