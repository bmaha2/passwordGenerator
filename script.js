// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  
  //declaring varibles
  var yourPassword;
  var passwordArray = [];
  var lowerCase;
  var upperCase;
  var numeric;
  var specialCharacter;
  
  var pwdLength = prompt("How many character long is the password ?");
  
  // cancel button ends the program
  if (pwdLength !== null) {
  
  //checking if the user inputs valid number
  while (isNaN(pwdLength) || pwdLength <= 7 || pwdLength >= 129) {
    pwdLength = prompt("Please choose between 8 and 128");
  }
  //--------------------lowercase block-------------------------------------------------
  //user input to confirm to include lowercase character
  lowerCase = confirm("Include lowercase in the password?");
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z"];
  
  // if the user chooses ok generate random lowercase letters equal to the length of the password otherwise set the lower case array to empty
  if (lowerCase == true) {
    lowerCaseArr = randomPick(lowerCaseArr, pwdLength);
    } else if(lowerCase == false) {
    lowerCaseArr = [];
    }
  
  //--------------------uppercase block--------------------------------------------------
  //user input to confirm to include uppercase characters
  upperCase = confirm("Include uppercase in the password?");
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
  //if the user chooses ok generate random uppercase letters equal to the length of the password otherwise set the uppercase array to empty
  if (upperCase == true) {
    upperCaseArr = randomPick(upperCaseArr, pwdLength);
    } else if (upperCase == false){
      upperCaseArr = [];
    }

  //---------------------------nemeric block---------------------------------------------
  //user input to confirm to include numbers
  numeric = confirm("Include numbers in the password?");
  var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //if the user chooses ok generate uppercase letters equal to the lenght of the password otherwise set the numeric array to empty
  if (numeric == true) {
    numericArr = randomPick(numericArr, pwdLength);
  } else if (numeric == false){
    numericArr = [];
  }
  
  //-------------------------special character block---------------------------------------
  //user input to confirm to include special characters 
  specialCharacter = confirm("Include special character");
  // array to hold the special characters
  var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "*","&", "~", "`", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]" , "|", "\\", ":", ";", "'","\/", "<", ">", ",", ".","?", '""'];
  //if the users choosed ok generate numbers equal to the length of the password otherwise set numeric array to empty
  if (specialCharacter == true) {
    specialCharacterArr = randomPick(specialCharacterArr, pwdLength);
  } else if (specialCharacter == false) {
    specialCharacterArr = []; 
  }
  
  //random pick function takes array and length of the password, randomly picks the array of the elements equal to the length of the password and returns new array
  function randomPick(array, pwdLength) {
    var newArray = [];
    for (var i = 0; i < pwdLength; i++){
    newArray.push(array[Math.floor(Math.random() * array.length)]);
    }
    return newArray;
  }
  //combining all the array to password array
  passwordArray.push(...lowerCaseArr, ...upperCaseArr, ...numericArr, ...specialCharacterArr);
  }// end of if (input !=== null) user hiting cancel button

  //If the all the options are selected to negative alert to select at least one option
  if (passwordArray.length == 0) {
  alert ("must contain at least one character. Try again");
  }
  //generating password equal to the length of the password selected  
  yourPassword = randomPick(passwordArray,pwdLength).slice(0,pwdLength).join("");
  return yourPassword;
}
//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
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
  