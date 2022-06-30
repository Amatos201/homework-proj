
document.querySelector("#generate").addEventListener("click", writePassword);


var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables 
var confirmLen = "";
var confirmSpecCharacter;
var confirmNumCharacter;
var confirmUpCase;
var confirmLowCase;
var PWCharacters = []
var randomPW = ""
// ask and confirm how many characters the user would like in password
function generatePassword() {
  var confirmLen = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLen <= 5 || confirmLen >= 55) {
      alert("Password length must be between 6-54 characters please Try again");
      var confirmLen = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes they want for each  
      alert(`Your password will contain ${confirmLen} characters`);

    // Determine what will be in the password 
    var confirmLowCase = confirm("Click OK if you would like to include Lowercase characters");
    var confirmUpCase = confirm("Click OK if you would like to include Uppercase characters");
    var confirmSpecCharacter = confirm("Click OK if you would like to include Special characters");
    var confirmNumCharacter = confirm("Click OK if you would like to include Numeric characters");    
    
      // Loop if answer is not close to parameters 
      while(confirmUpCase === false && confirmLowCase === false && confirmSpecCharacter === false && confirmNumCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 
   
    if (confirmSpecCharacter) {
      PWCharacters = PWCharacters.concat(SpecialChar)
    }

    if (confirmNumCharacter) {
      PWCharacters = PWCharacters.concat(Num)
    }
      
    if (confirmLowCase) {
      PWCharacters = PWCharacters.concat(alphaLow)
    }

    if (confirmUpCase) {
      PWCharacters = PWCharacters.concat(alphaUpp)
    }

      console.log(PWCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      
      
      for (var i = 0; i < confirmLen; i++) {
        randomPW = randomPW + PWCharacters[Math.floor(Math.random() * PWCharacters.length)];
        console.log(randomPW)
      }
      return randomPW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// work done to module 3
//GIVEN I need a new, secure password 
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page