let chosenChar = [];

let pswdString = "";

const passwordFilter = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specialCharacters: "!@#$%^&*"
};

let generatePassword = function () {

// pulls random values from chosen string

  let getRandomChar = function(chosenChar){
    return chosenChar[Math.floor(Math.random() * chosenChar.length)];
  }

  // Password prompts

  let passwordLength = Number(window.prompt("Please enter the number of required characters(8-128)."));
    if (passwordLength >= 8 && passwordLength <= 128) {
    
  let getLowercase = window.confirm("Would you like lowercase letters?");
    if (getLowercase) {
      pswdString += passwordFilter.lowercase;
      chosenChar.push(getRandomChar(passwordFilter.lowercase));
    };  
    
  let getUppercase = window.confirm("Would you like uppercase letters?");
    if (getUppercase) {
      pswdString += passwordFilter.uppercase;
      chosenChar.push(getRandomChar(passwordFilter.uppercase));
    };
    
  let getNumbers = window.confirm("Would you like numbers?");
    if (getNumbers) {
      pswdString += passwordFilter.numbers;
      chosenChar.push(getRandomChar(passwordFilter.numbers));
    };
    
  let getSpecialCharacters = window.confirm("Would you like special characters")
    if (getSpecialCharacters) {
      pswdString += passwordFilter.specialCharacters;
      chosenChar.push(getRandomChar(passwordFilter.specialCharacters));
    };

    // Incorrect input messages

  } else {
    alert("Please enter a valid length!")
  };

  if(!pswdString) {
    alert("You need to choose at least one option!")
    return generatePassword();
  }

  // Password lenth and random characters

  while (chosenChar.length < passwordLength) {
    chosenChar.push(getRandomChar(pswdString))
  }

  for( let i = chosenChar.length - 1; i > 0; i--) {
    let shuffle = Math.floor(Math.random() * (i + 1));
    let temp = chosenChar[i];
    chosenChar[i] = chosenChar[shuffle];
    chosenChar[shuffle] = temp;
  }

  return chosenChar.join("");

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