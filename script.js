// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"]; 

function generatePassword(){
  var passwordLength = prompt("How many characters should be in the password?");
  var upperBool = confirm("Would you like uppercase characters in the password?");
  var lowerBool = confirm("Would you like lowercase characters in the password?");
  var numberBool = confirm("Would you like numerics in the password?");
  var specialBool = confirm("Would you like special characters in the password?");
  console.log(passwordLength, upperBool, lowerBool, numberBool, specialBool)
}

  var possibleChar = [];

  possibleChar.push(upperCase);

 if (upperBool === true){
    // spread operator
  possibleChar.push(upperCase)
  //return();
}

console.log(possibleChar);


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);