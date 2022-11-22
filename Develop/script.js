
// Assignment Code
var generateBtn = document.querySelector("#generate");
// var arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var Declaration
var confirmlength = "";
var confirmlower;
var confirmupper;
var confirmspecialChar;
var confirmnumber;



// Define generatePassword function
function generatePassword() {
 
  var confirmlength= (prompt("How many characters would you like your password to contain? Length must be between 8-128."));
  if (confirmlength <= 7 || confirmlength >=129){
    alert("Password length must be between 8-128 characters. Try Again.");
    var confirmlength= (prompt("How many characters would you like your password to contain? Length must be between 8-128."));
  }
  else if (isNaN(confirmlength)){
    alert ("Please input a number. Try again.");
    var confirmlength= (prompt("How many characters would you like your password to contain? Length must be between 8-128."));
  }
    
// confirm password criteria: lowercase, uppercase, numeric, and/or special characters
var confirmlower = confirm("Click OK to confirm if you would like to include lowercase characters.");
var confirmupper = confirm("Click OK to confirm if you would like to include uppercase characters.");
var confirmspecialChar = confirm("Click OK to confirm if you would like to include special characters.");
var confirmnumber = confirm("Click OK to confirm if you would like to include numeric characters.");  

// if user selects no to all password criteria this alert + confirm loop will happen
while(confirmupper === false && confirmlower === false && confirmspecialChar === false && confirmnumber === false) {
  alert("You must choose at least one parameter.");
  var confirmlower = confirm("Click OK to confirm if you would like to include lowercase characters.");
  var confirmupper = confirm("Click OK to confirm if you would like to include uppercase characters.");
  var confirmspecialChar = confirm("Click OK to confirm if you would like to include special characters.");
  var confirmnumber = confirm("Click OK to confirm if you would like to include numeric characters.");    
}

//generate string of characters based on user's criteria
// this random list is generated out the arrays of characters based on the criteria the user selects
var passwordCharacters = []
      
if (confirmlower) {
  passwordCharacters = passwordCharacters.concat(lowercase)
}

if (confirmupper) {
  passwordCharacters = passwordCharacters.concat(uppercase)  
}
  
if (confirmspecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

if (confirmnumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }

      console.log(passwordCharacters)

    // generate random password
//empty string is random character from each iteration from for loop.
      var password = ""
      
      for (let i = 0; i < confirmlength; i++) {
        password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(password)
      }
      return password;
}
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // generates password and displays on screen
  passwordText.value = password;

}

 // Add event listener to generate button-> when user clicks it'll call the write password fx
 generateBtn.addEventListener("click", writePassword);

