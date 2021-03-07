// Assignment code here

//lowercase
//
//uppercase 
//

//numbers
//

//var specialCharacters = ['@', '$', '%', '^', '*', '!', '?', '+', '#', '&', '`', '~', '(', ')', '{', '}', '.'];

//var allChar = specialCharacters + numberCase + lowerCase + upperCase

//lengh of password 

//function passwordSteps() {
    //var number = 0

//if no u,l, n or s is inputed request valid option 
//else {alert ("Please enter a valid option");passwordOptions(); }}

//funtion pass}
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
///var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
//var lower = 'abcdefghijklmnopqrstuvwxyz';
var numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//var number = '0123456789'
var specialSymbol= ['@', '$', '%', '^', '*', '!', '?', '+', '#', '&', '`', '~', '(', ')', '{', '}', '.'];
//var symbol = '!@#$%^&*()_'

var specialCharacters = '';
var numberValue = ;
var passwordText = document.querySelector ("#password");

function  generatePassword () {
    quantityCharacters();
    
    for (i = 0; i < quantityCharacters; i++) {
        console.log (specialCharacters.length);
        //Math.floor (Math.random ()*specialCharacters.length + 1);
        //specialCharacters.substring(i) +=passwordText.value;
    }
}
    console.log(passwordText.value);
}

function quantityCharacters () {
    specialCharacters = prompt ("Enter the amount of characters preffered? Enter number amount too, please?");
    console.log(parseInt(specialCharacters));
    if (specialCharacters >= 8 && specialCharacters <= 128) {
        passwordOptions ();
    }
    else {
        alert('Enter valid option');
        quantityCharacters();
    }
}

function passwordOptions () {
    var passOptWant = prompt ('What random characters would you like to generate in your password? Please enter a number between "0" and "128", ')
    passOptWant = passOptWant.toLowerCase();

    var great = ('Thank you. Password will generate shortly');
    var u = passOptWant.includes('u');
    var l = passOptWant.incudles('l');
    var n = passOptWant.includes('n');
    var s = passOptWant.includes('s');

    if (u) {
        alert(great);
        specialCharacters.push(upper);
    if (l){
        specialCharacters = specialCharacters + lowerCase;
        if (n) {
            specialCharacters = specialCharacters + upperCase;
            if (s) {
                specialCharacters = specialCharacters + specialSymbol;
            }
        }
        else if (s) {
            specialSymbol = specialSymbol + specialSymbol;
        }
    }   
    else if (n) {
        specialCharacters = specialCharacters + numberCase;
        
        if (s) {
            specialCharacters = specialCharacters + specialSymbol;
        }
    }
    else if (s) {
        specialCharacters = specialCharacters + specialSymbol;
    }
}

// if not u but l is inputed
else if (l) {
    alert (great);
    specialCharacters = specialCharacters + lowerCase;
    if (n) {
        specialCharacters = specialCharacters + numberCase;
        if (s) {
            specialCharacters = specialCharacters + specialSymbol;
        }
    }
    else if (s) {
        specialCharacters = specialCharacters + specialSymbol;
    }
}

else if (n) {
    
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