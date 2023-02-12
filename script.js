// Assignment code here

// Below I created a series of arrays to hold all the different types of characters possible for the password generator and an empty array to hold a combination of each array based on the user's input
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];

var possibleChar = [];

// Below is a function that assigns user input in response to a series of prompts to variables and if statements to push each array for the individual characters into the once empty possibleChar array / an if statement to ensure the user inputs an appropriate number for the passwordLength or the page returns undefined 

function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters should be in the password?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Please input a number between 8 and 128")
    return "Try Again";
  } else {
  var upperBool = confirm("Would you like uppercase characters in the password?");
  var lowerBool = confirm("Would you like lowercase characters in the password?");
  var numberBool = confirm("Would you like numerics in the password?");
  var specialBool = confirm("Would you like special characters in the password?");
  console.log(passwordLength, upperBool, lowerBool, numberBool, specialBool)

  if (upperBool) {
    possibleChar.push(...upperCase);
  }
  if (lowerBool) {
    possibleChar.push(...lowerCase);
  }
  if (numberBool) {
    possibleChar.push(...numbers);
  }
  if (specialBool) {
    possibleChar.push(...specialCharacters);
  }
  if (upperBool === false && lowerBool === false && numberBool === false && specialBool === false) {
    alert("You must select at least one type of character")
    return "Try Again";
  }
}
  console.log(possibleChar)

  

  // below is the for loop + Math.floor/Math.random statements that will enable the code to go through my possibleChar array and select random characters based on the user input 

  var randomChar = ''
  for (i = 0; i < passwordLength; i++) {
    randomChar += possibleChar[Math.floor(Math.random() * possibleChar.length)]
  
  
  }

  console.log(randomChar)
  return randomChar;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);