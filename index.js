var quiz = [
    {question: "1. What is the ratio of compressions to breaths in CPR?",
    answer1: "30:1",
    answer2: "30:2",
    answer3: "20:2",
    answer4: "20:1"},
    {question: "2. How many hands do you use in adult CPR?",
    answer1: "no hands",
    answer2: "elbows",
    answer3: "1 hand",
    answer4: "2 hands",},
    {question: "3. How many hands do you use in child CPR?",
    answer1: "no hands",
    answer2: "elbows",
    answer3: "1 hand",
    answer4: "2 hands",},
    {question: "4. Do you use your whole hand or just your fingers for baby CPR? If it's fingers, how many fingers do you use?",
    answer1: "hands; 1",
    answer2: "fingers; 2",
    answer3: "fingers; 3",
    answer4: "hands; 2",},
    {question: "5. What is one thing you do NOT do when treating a burn?",
    answer1: "apply ointment or cream",
    answer2: "remove jewelry if possible",
    answer3: "remove clothing contaminated with chemicals",
    answer4: "lightly cover the burn with a dry sterile dressing",},
    {question: "6. If someone is unconscious, what is the first thing you do?",
    answer1: "gently tap the person and shout his/her name to see if he/she responds",
    answer2: "send someone to call 9-1-1",
    answer3: "begin CPR",
    answer4: "check the airway and breathing",},
    {question: "7. When would you perform the Heimlich Maneuver on a choking person?",
    answer1: "when a person is coughing",
    answer2: "when a person can speak between coughs",
    answer3: "when a person cannot cough, speak, or breathe",
    answer4: "when a person can breathe",},
    {question: "8. What is one thing you DO NOT do when someone is having a seizure?",
    answer1: "keep person on floor",
    answer2: "remove objects from around the person",
    answer3: "lay the person on his/her side when seizure is over",
    answer4: "hold the person to try and stop the jerking movements",},
    {question: "9. What is not an immediate sign that a person has ingested a harmful substance?",
    answer1: "fever",
    answer2: "stains around the mouth, or strange smelling breath",
    answer3: "vomiting",
    answer4: "stomach pain",},
    {question: "10. Who do you call immediately for heat stroke?",
    answer1: "doctor",
    answer2: "9-1-1",
    answer3: "Poison Control",
    answer4: "local hospital",}
]

function appendQuiz(quiz) {
  quiz.forEach(function(question) {
    $('.quiz').append(`<p>${question.question}</p>`);
    $('.quiz').append(`<div class="radio"><input type="radio">a) ${question.answer1}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">b) ${question.answer2}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">c) ${question.answer3}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">d) ${question.answer4}</div>`);
  })
  $('.quiz').append(`<br>`)
  $('.quiz').append(`<input type="button" onclick="seeAnswers(correct)" value="See Correct Answers" class="see-correct-answers">`)
}

var correct = [
  {correctAnswer: "1. 30:2"},
  {correctAnswer: "2. 2 hands"},
  {correctAnswer: "3. 1 hand"},
  {correctAnswer: "4. fingers; 2"},
  {correctAnswer: "5. apply ointment or cream"},
  {correctAnswer: "6. send someone to call 9-1-1"},
  {correctAnswer: "7. when a person cannot cough something up"},
  {correctAnswer: "8. hold the child to try and stop the jerking movements"},
  {correctAnswer: "9. fever"},
  {correctAnswer: "10. 9-1-1"}]

function seeAnswers(correct) {
  correct.forEach(function(answers) {
    $('.quiz').append(`<div><p>${answers.correctAnswer}</p></div>`)
  })
}
