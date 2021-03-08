//var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var lower = 'abcdefghijklmnopqrstuvwxyz';
//var numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var number = '0123456789'
//var specialSymbol= ['@', '$', '%', '^', '*', '!', '?', '+', '#', '&', '`', '~', '(', ')', '{', '}', '.'];
var symbol = '!@#$%^&*()_'

// Pool of all usable characters
var characterPool = '';

var specialCharacters = '';
var numberValue = '';
var password = 'h';
var passwordText = document.querySelector ("#password");

// Function used to generate password
function  generatePassword () {
    // Determine length of password from user
   var passLength = quantityCharacters();

   // Determine the avaiable pool of characters
   
   // Loop however many times the user inputs.
   for (i = 0; i < passLength - 1; i++){
       var random = Math.floor(Math.random() * characterPool.length);
       password += characterPool[random];
   }
   return password;

}

function quantityCharacters (){
    specialCharacters = prompt ("Please enter a number between '8' and '128'");
    console.log(parseInt(specialCharacters));
    if (specialCharacters >= 8 && specialCharacters <= 128) {
        //passwordOptions ();
        return specialCharacters
    }
    else {
        alert('Enter valid option');
        quantityCharacters();
    }
}
function lowerPool(){
    lowerPool = prompt ("Do you want lowercase letters? [y/n]")
    switch (lowerPool){
        case 'y': characterPool +=lower;return;
        case 'n': return
        alert('Enter valid option');
        lowerPool();

    }
}
function upperPool(){
    upperPool = prompt ("Do you want uppercase letters? [y/n]")
    switch (upperPool){
        case 'y': characterPool +=upper;return;
        case 'n': return
        alert('Enter valid option');
        upperPool();

    }
}

function numberPool(){
    numberPool = prompt ("Do you want a number? [y/n]")
    switch (numberPool){
        case 'y': characterPool +=number;return;
        case 'n': return
        alert('Enter valid option');
        numberPool();

    }
}

function symbolPool(){
    symbolPool = prompt ("Do you want a symbol? [y/n]")
    switch (symbolPool){
        case 'y': characterPool +=symbol;return;
        case 'n': return
        alert('Enter valid option');
        symbolPool();

    }
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
generateBtn.addEventListener("click", writePassword);