// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "p",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordOption = [];
var finalPassword = [];

// Write password to the #password input -- functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandom(passwordOption) {
  var randomIndex = Math.floor(Math.random() * passwordOption.length);
  var randomElement = passwordOption[randomIndex];
  return randomElement;
}

// Prompt asks "How many characters would you like your password to contain" (needs to be between min 8 characters and  max 128 charcters long) Type in number, click okay or cancel ----halfDONE
// Validation - Prompt says "Password length must be at least 8 characters" when input is under 8, Click OK
function generatePassword() {
  var characterAmount = prompt(
    `How many characters would you like your password to contain?`
  );
  console.log("characterAmount", characterAmount);
  if (characterAmount < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }
  if (characterAmount > 128) {
    alert("Password length must be under 128 characters");
    return null;
  }

  // Confirm "Click OK to confirm including special characters" Click OK or Cancel
  var characterSpecial = confirm(
    `Click OK to confirm including special characters.`
  );
  if (characterSpecial === true) {
    passwordOption = passwordOption.concat(specialCharacters);
  }

  //  Confirm "Click OK to confirm including numeric characters" Click OK or Cancel
  var characterNumber = confirm(
    `Click OK to confirm including numeric characters.`
  );
  if (characterNumber === true) {
    passwordOption = passwordOption.concat(numberCharacters);
  }

  // Confirm "Click OK to confirm including lowercase characters" Clik OK or Cancel
  var characterLowercase = confirm(
    `Click OK to confirm including lowercase characters.`
  );
  if (characterLowercase === true) {
    passwordOption = passwordOption.concat(lowerCase);
  }

  // Confirm "Click OK to confirm including uppercase characters" Click OK or Cancel
  var characterUppercase = confirm(
    `Click OK to confirm including uppercase characters.`
  );
  if (characterUppercase === true) {
    passwordOption = passwordOption.concat(upperCase);
  }

  console.log(passwordOption);
  for (let index = 0; index < characterAmount; index++) {
    finalPassword.push(getRandom(passwordOption));
  }
  return finalPassword.join("");
}
