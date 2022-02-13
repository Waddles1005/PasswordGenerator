var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "{", "}", "[", "]", ";", ":", ".", "?"]

var generatePassword = function () {

  var responseArray = [];

  var passwordLength = window.prompt("Choose a password length between 8-128 characters");
  console.log(passwordLength);

  if (passwordLength < 128 && passwordLength > 8) {
    var lowercasePrompt = window.confirm("Would you like lowercase characters?");
    console.log(passwordLength)

    if (lowercasePrompt === true) {
      responseArray.push(lowercase)
      console.log(responseArray)

    }

    var uppercasePrompt = window.confirm("Would you like uppercase characters?")
    console.log(uppercasePrompt);

    if (uppercasePrompt === true) {
      responseArray.push(uppercase);
      console.log(responseArray);
    }

    var specialcharacterPrompt = window.confirm("Would you like special characters?");
    console.log(specialcharacterPrompt);

    if (specialcharacterPrompt === true) {
      responseArray.push(specialcharacter);
      console.log(responseArray)

    }

    var flattenedArray = responseArray.flat();  
    console.log(flattenedArray);

    var passwordArray = []

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * Math.floor(flattenedArray.length));

      passwordArray.push(flattenedArray[randomNumber]);
      console.log(passwordArray)
    };

    return passwordArray.join("")

  }

  else {
    window.alert("Your password needs to be 8-128 characters long")
    generatePassword();
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
  generateBtn.addEventListener("click", writePassword);}
