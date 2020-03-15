// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    /****
     * WRITE YOUR CODE HERE
     */
    //declaring varibles
    var yourPassword;
    var pwdLength = prompt("How many character long is the password ?");
    var lowerCase;
    var upperCase;
    var numeric;
    var specialCharacter;
    // cancel button ends the program
    if (pwdLength !== null) {
    //checking if the user inputs valid number
    while (isNaN(pwdLength) || pwdLength <= 7 || pwdLength >= 129) {
      pwdLength = prompt("Please choose between 8 and 128");
    }
    lowerCase = confirm("Include lowercase in the password?");
    
    if (lowerCase !== null) {
      lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z"];
      console.log(lowerCase);

    }
    upperCase = confirm("Include uppercase in the password?");
      if (upperCase !== null) {
        var upperCase= lowerCase.map(function(x) { return x.toUpperCase()});
        console.log(upperCase);

      }
    
    numeric = confirm("Include numbers in the password?");
      if (numeric !== null) {
        var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(numeric);
      }
        
    specialCharacter = confirm("Include special character");
    if (specialCharacter !== null) {
      var specialCharacter = ["!", "@", "#", "$", "%", "^", "*","&", "~", "`", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]" , "|", "\\", ":", ";", "'","\/", "<", ">", ",", ".","?", '""'];
      console.log(specialCharacter);
      console.log(specialCharacter.length);
    }
    function randomPick(array) {
      var choice = Math.floor(Math.random() * array.length);
      return array[choice];
    }
    yourPassword = randomPick(lowerCase) + randomPick(upperCase) + randomPick(numeric) + randomPick(specialCharacter); 
    
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
  