// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  
  //declaring varibles
  var yourPassword;        // variable for the password
  var passwordArray = [];  // initialize the password array as empty
  var lowerCase;           // variable to hold lowercase confirmation
  var upperCase;           // variable to hold uppercase confirmation
  var numeric;             // variable to hold numeric confirmation
  var specialCharacter;    // variable to hold special character confirmation
  var confirmCount = 0;    // count of how many confimations were selected
  
  //array to hold all lowercase charaters
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z"];
  
  //array to hold all uppercase charaters
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
  
  //array to hold numeric numbers
  var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  //array to hold special characters
  var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "*","&", "~", "`", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]" , "|", "\\", ":", ";", "'","\/", "<", ">", ",", ".","?", '""'];
  
  var pwdLength = Number(prompt("How many character long is the password ?")); //prompt for the number  
  
  if (pwdLength !== null) { //starts the program is the user input the number of characters for the password
    
    //checking if the user inputs valid password length between 8 and 128, and is not a string
    while (Number.isNaN(pwdLength) || pwdLength <= 7 || pwdLength >= 129) {
      pwdLength = prompt("Please choose between 8 and 128");
    }
    //user input to confirm to include lowercase character
    lowerCase = confirm("Include lowercase in the password?");
    
    // if the user chooses ok generate random lowercase letters equal to the length of the password otherwise set the lower case array to empty
    if (lowerCase == true) {
      lowerCaseArr = randomPick(lowerCaseArr, pwdLength);
      confirmCount ++;
    } else {
      lowerCaseArr = [];
    }
    
    //user input to confirm to include uppercase characters
    upperCase = confirm("Include uppercase in the password?");
    
    //if the user chooses ok generate random uppercase letters equal to the length of the password otherwise set the uppercase array to empty
    if (upperCase == true) {
      upperCaseArr = randomPick(upperCaseArr, pwdLength);
      confirmCount ++;
    } else {
        upperCaseArr = [];
    }

    //user input to confirm to include numbers
    numeric = confirm("Include numbers in the password?");
    
    //if the user chooses ok generate uppercase letters equal to the lenght of the password otherwise set the numeric array to empty
    if (numeric == true) {
      numericArr = randomPick(numericArr, pwdLength);
      confirmCount ++;
    } else {
      numericArr = [];
    }
    
    //user input to confirm to include special characters 
    specialCharacter = confirm("Include special character");
    // array to hold the special characters
    
    //if the users choosed ok generate numbers equal to the length of the password otherwise set numeric array to empty
    if (specialCharacter == true) {
      specialCharacterArr = randomPick(specialCharacterArr, pwdLength);
      confirmCount ++;
    } else {
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
  
  
   //If the all the options are selected to negative alert to select at least one option
    if (passwordArray.length == 0) {
    alert ("Must contain at least one of the options. Try again");
    }
  //generating password equal to the length of the password selected  
    yourPassword = randomPick(passwordArray,(passwordArray.length / confirmCount)).join("");
    return yourPassword;
  }
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
  