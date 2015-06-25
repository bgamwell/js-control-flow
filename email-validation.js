//This program uses JavaScript to validate whether a user's entry includes the "@" symbol. A regular expression is used to verify that the character was entered. The current code is still in production.

var userEntry = prompt("Please enter your email address.");

function validateEmail() {
  if (userEntry.match(/\S+@\S+\.\S+/)) {
    alert("Thank you for entering your email address.");
    var userPassword = prompt("Please enter a new password.");
      if (userPassword.match(/^(?:([A-Z])*([a-z])*(\d)*(\W)*){8,12}$/)) {
        alert("Thanks, your password has been set.");
      } else {
        alert("Your password must contain:\Zero or more uppercase characters\Zero or more lowercase characters\Zero or more decimal digits\Zero or more non-word characters (!, £, $, %, etc.)");
      }
  } else {
    alert("The email address you entered is not valid. Please try again.");
  }
}

validateEmail();
