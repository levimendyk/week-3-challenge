// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input -- functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt asks "How many characters would you like your password to contain" (needs to be between min 8 characters and  manx 128 charcters long) Type in number, click okay or cancel

// Prompt asks "Click OK to confirm including special characters" Click OK or Cancel

// Prompt asks "Click OK to confirm including numeric characters" Click OK or Cancel

// Prompt asks "Click OK to confirm including lowercase characters" Clik OK or Cancel

// Prompt asks "Click OK to confirm including uppercase characters" Click OK or Cancel

// Validation - Prompt says "Password length must be at least 8 characters" when you input under 8, Click OK

// Prompt says "Must select at least one character type" when you click cancel on all prompt questions, Click OK

console.log("Test");
