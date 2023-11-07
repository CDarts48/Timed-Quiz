// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  console.log("button clicked");
  passwordLength = prompt("How many characters would you like your password to be? Please choose (between 8 and 128 characters.");  
  var includeNumbers = confirm("Would you like to include numbers in you password?")
  var includeLowerCase = confirm("Would you like to include lowercase letters in your password?")
  var includeUpperCase = confirm("Would you like to include uppercase letters in your password?")
  var includeSpecialCharacters = confirm ("Would you like to include special characters in your password?")
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+~`|}{[]:;?><,./-";
  var password = generatePassword(passwordLength, includeNumbers, includeLowerCase, includeUpperCase, includeSpecialCharacters);
  console.log("password: ", password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});


function generatePassword(length, includeNumbers, includeLowerCase, includeUpperCase, includeSpecialCharacters) {
    var numbers = "0123456789";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!@#$%^&*_+~`|}{[]:;?><,./-=";
    console.log ("includeSpecialCharacters:", includeSpecialCharacters)
    var chars = "";
    if (includeNumbers) {
        chars += numbers;
    }
    if (includeLowerCase) {
        chars += lowerCase;
    }
    if (includeUpperCase) {
        chars += upperCase;
    }
    if (includeSpecialCharacters) {
        chars += specialCharacters;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}
