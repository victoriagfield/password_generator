//Assignment code
var generateBtn = document.querySelector("#generate");

//function to generate the password with all of the below info
function generatePassword() {

//Variables for password characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "/", "-", ":", "<", ">"];


//Password length promp and return
var passwordLength = prompt("Choose a password length between 8 and 128.");
  if(passwordLength < 8 || passwordLength > 128) {
    return ("You have to pick a number between 8 and 128. Please try again.");
  };

//variable questions for password specs
var confirmUpperCase = confirm("Do you want your password to contain uppercase letters?"); 
var confirmLowerCase = confirm("Do you want your password to contain lowercase letters?");
var confirmNumber = confirm("Do you want your password to contain numbers?");
var confirmCharacter = confirm("Do you want your password to contain special characters?");

//variable for password characters for if statement.
var passwordChars = [];

//if statements based on user input
//confirms uppercase characters
if(confirmUpperCase) {
  passwordChars = passwordChars.concat(upperCase)
}
//confirms lowercase characters  
if(confirmLowerCase){
  passwordChars = passwordChars.concat(lowerCase)
}
//confirms numbers
if(confirmNumber){
  passwordChars = passwordChars.concat(numbChar)
}
//confirms special characters
if(confirmCharacter){
  passwordChars = passwordChars.concat(specialChar)
}

//return section if the user clicks cancel on all criteria 
 if (passwordChars.length == 0) {
  return ("To generate a password you need to choose one of the criteria. Please try again.");
 }

 //variable to create the random password
 var randoPass = "";

 //creating random password from user input
 for(var i = 0; i < passwordLength; i++) {
   randoPass += passwordChars[Math.floor(Math.random() * passwordChars.length)];
 } 
    return(randoPass);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


