// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    /****
     * WRITE YOUR CODE HERE
     */
    //declaring varibles
    var yourPassword;
    var passwordArray = [];
    var lowerCase;
    var upperCase;
    var numeric;
    var specialCharacter;
    var select1, select2, select3, select4;
    

    var pwdLength = prompt("How many character long is the password ?");
    // cancel button ends the program
    if (pwdLength !== null) {
    //checking if the user inputs valid number
    while (isNaN(pwdLength) || pwdLength <= 7 || pwdLength >= 129) {
      pwdLength = prompt("Please choose between 8 and 128");
    }

    lowerCase = confirm("Include lowercase in the password?");
    var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z"];
    if (lowerCase == true) {
      lowerCaseArr = randomPick(lowerCaseArr, pwdLength);
    } else if(lowerCase == false) {
      lowerCaseArr = [];
      select1 = false;
    }
    upperCase = confirm("Include uppercase in the password?");
    var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];

    if (upperCase == true) {
      upperCaseArr = randomPick(upperCaseArr, pwdLength);
      } else if (upperCase == false){
        upperCaseArr = [];
        select2 = false;
      }
    numeric = confirm("Include numbers in the password?");
    var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      if (numeric == true) {
       numericArr = randomPick(numericArr, pwdLength);
      } else if (numeric == false){
        numericArr = [];
        select3 = false;
      } 
    specialCharacter = confirm("Include special character");
    var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "*","&", "~", "`", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]" , "|", "\\", ":", ";", "'","\/", "<", ">", ",", ".","?", '""'];
    if (specialCharacter == true) {
      specialCharacterArr = randomPick(specialCharacterArr, pwdLength);
    } else if (specialCharacter == false) {
      specialCharacterArr = [];
      select4 = false;
    
    }
     
    function randomPick(array, pwdLength) {
      var newArray = [];
      for (var i = 0; i < pwdLength; i++){
      newArray.push(array[Math.floor(Math.random() * array.length)]);
      }
      return newArray;
    }
    passwordArray.push(...lowerCaseArr, ...upperCaseArr, ...numericArr, ...specialCharacterArr);
    
  }
  if (select1 == false && select2 == false && select3 == false && select4 == false) {
    alert ("must contain at least one charater");
    generatePassword();
  }
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
  