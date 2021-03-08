var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789'
var symbol = '!@#$%^&*()_'

// Pool of all usable characters
var characterPool = '';

var specialCharacters = '';
var numberValue = '';
var password = '';
var passwordText = document.querySelector ("#password");

// Function used to generate password
function  generatePassword () {
    password = ' ';
    // Determine length of password from user
   var passLength = quantityCharacters();

   // Determine the avaiable pool of characters
   // Keep checking until there is a valid pool.
   while(characterPool == ''){
       addPool();
   }
   
   // Loop however many times the user input.
   for (i = 0; i < passLength - 1; i++){
       // Add on a random index from the characterPool string.
       password += characterPool[Math.floor(Math.random() * characterPool.length)];
   }
   // Return the password that was just made.
   return password;

}

function quantityCharacters (){
    var specialCharacters = prompt ("Please enter a number between '8' and '128'");
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
function addPool(){
    // Check if user wants lowercase in their password.
    lowerPool();
    // Check if user wants uppercase in their password.
    upperPool();
    // Check if user wants numbers in their password.
    numberPool();
    // Check if user wants symbols in their password.
    symbolPool();

    if (characterPool == ''){
        alert("Need atleast one character.")
    }
}
function lowerPool(){
    // Prompt for character pool.
    var lowerPool = prompt ("Do you want lowercase letters? [y/n]")
    // Depending on the response do different things.
    switch (lowerPool){
        case 'y': characterPool +=lower;return;
        case 'n': return
        default: alert('Enter valid option');
        lowerPool();

    }
}
function upperPool(){
    var upperPool = prompt ("Do you want uppercase letters? [y/n]")
    switch (upperPool){
        case 'y': characterPool +=upper;return;
        case 'n': return
        default: alert('Enter valid option');
        upperPool();

    }
}

function numberPool(){
    var numberPool = prompt ("Do you want a number? [y/n]")
    switch (numberPool){
        case 'y': characterPool +=number;return;
        case 'n': return
        default: alert('Enter valid option');
        numberPool();

    }
}

function symbolPool(){
    var symbolPool = prompt ("Do you want a symbol? [y/n]")
    switch (symbolPool){
        case 'y': characterPool +=symbol;return;
        case 'n': return
        default: alert('Enter valid option');
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