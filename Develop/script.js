let chosenChar = "";

const passwordFilter = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specialCharacters: "!@#$%^&*"
};

let generatePassword = function () {

  let passwordLength = Number(window.prompt("Please enter the number of required characters(8-128)."));
    if (passwordLength >= 8 && passwordLength <= 128) {
    
  let getLowercase = window.confirm("Would you like lowercase letters?");
    if (getLowercase) {
      chosenChar += passwordFilter.lowercase;
      // chosenChar.push(getRandomChar(passwordFilter.lowercase));
    };  
    
  let getUppercase = window.confirm("Would you like uppercase letters?");
    if (getUppercase) {
      chosenChar += passwordFilter.uppercase;
      // chosenChar.push(getRandomChar(passwordFilter.uppercase));
    };
    
  let getNumbers = window.confirm("Would you like numbers?");
    if (getNumbers) {
      chosenChar += passwordFilter.numbers;
      // chosenChar.push(getRandomChar(passwordFilter.numbers));
    };
    
  let getSpecialCharacters = window.confirm("Would you like special characters")
    if (getSpecialCharacters) {
      chosenChar += passwordFilter.specialCharacters;
      // chosenChar.push(getRandomChar(passwordFilter.specialCharacters));
    };

  };
}







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);