//This program gives users three times to enter the correct security question before being denied login.

var securityQuestions = [{question:"What was your first pet's name?", expectedAnswer:"FlufferNutter"},
                         {question:"Where were you born?", expectedAnswer:"San Francisco"},
                         {question:"How old are you?", expectedAnswer:"old"}];

function promptQuestion() {
  for (i = 0; i < 3; i++) {
      inputAnswer = prompt(securityQuestions[i]["question"]);
        if (inputAnswer === securityQuestions[i]["expectedAnswer"]) {
            alert("Success! You're logged in!")
            break;
        } else {
            alert("That answer is not correct. Try again.");
            if (i === 2) {
                alert("Sorry, you've reached the max number of login attempts for the day.");
            }
        }
  }

}

promptQuestion();
