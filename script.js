// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = '';

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password = generatePassword();

  passwordText.value = password;
};

// Add characters to a string to generate password
function passwordCharacters() {
  var string = '';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var special = '!@#$%^&*+=?';

  // do-while loop that checks if at least one character tyoe has been chosen
  do {
    //User prompt for lowercase chars
    var lowercaseChoice = prompt("Would you like to use lowercase characters? Enter 'Y' or 'N'");
    lowercaseChoice = lowercaseChoice.toUpperCase();

    //Sets the user input to uppercase and either adds the chosen character set to the string or leaves it untouched
    if (lowercaseChoice.toUpperCase() == "Y") {
      string += lowercase;
      console.log("Lowercase characters were chosen")
    } else {
      console.log("Lowercase was not chosen")
    }
    console.log(string);

    //User prompt for uppercase chars
    var uppercaseChoice = prompt("Would you like to use lowercase characters? Enter 'Y' or 'N'");
    uppercaseChoice = uppercaseChoice.toUpperCase()

    //Sets the user input to uppercase and either adds the chosen character set to the string or leaves it untouched
    if (uppercaseChoice.toUpperCase() == "Y") {
      string += uppercase;
      console.log("Uppercase characters were chosen")
    } else {
      console.log("Uppercase was not chosen")
    }
    console.log(string);

    //User prompt for numerical chars
    var numbersChoice = prompt("Would you like to use numerical characters? Enter 'Y' or 'N'");
    numbersChoice = numbersChoice.toUpperCase()

    //Sets the user input to uppercase and either adds the chosen character set to the string or leaves it untouched
    if (numbersChoice.toUpperCase() == "Y") {
      string += numbers;
      console.log("Numerical characters were chosen")
    } else {
      console.log("Numbers was not chosen")
    }
    console.log(string);

    //User prompt for special chars
    var specialChoice = prompt("Would you like to use spcial characters? Enter 'Y' or 'N'");
    specialChoice = specialChoice.toUpperCase()

    //Sets the user input to uppercase and either adds the chosen character set to the string or leaves it untouched
    if (specialChoice.toUpperCase() == "Y") {
      string += special;
      console.log("Special characters were chosen")
    } else {
      console.log("Special was not chosen")
    }
    console.log(string);

    // Error Message to generate if no character type has been selected by user
    if (lowercaseChoice !== "Y" && uppercaseChoice !== "Y" && numbersChoice !== "Y" && specialChoice !== "Y")
    {
      alert ("ERROR: At least one character type must be selected. Try again.")
      string = '';
    }

    else break;

  } while (lowercaseChoice !== "Y" && uppercaseChoice !== "Y" && numbersChoice !== "Y" && specialChoice !== "Y")

  return string;
}

// Generates password based on a string of possible characters
function generatePassword() {
  var pass = '';
  var str = passwordCharacters();

  // Prompts user for password length
  var passLength = prompt("Enter a password character length between 8 - 128", "8");

  // Checks if the password length is valid
  while (passLength > 128 || passLength < 8) {
    var passLength = prompt("ERROR: Please input a length between 8 - 128", "8");
  }

  // Generates password using Math.random based on the string length
  for (i = 1; i <= passLength; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }

  console.log(pass);
  return pass;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
