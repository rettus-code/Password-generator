// Assignment Code
var generateBtn = document.querySelector("#generate");
var properties = {
  totalChar: 0,
  upperCase: null,
  lowerCase: null,
  number: null,
  specialChar: null,
}


// Write password to the #password input

function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  defineParameters1();
  properties.upperCase = defineParameters2("upper case letters?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  properties.lowerCase = defineParameters2("lower case letters?", "abcdefghijklmnopqrstuvwxyz");
  properties.number = defineParameters2("numbers?", "0123456789");
  properties.specialChar = defineParameters2("special charachter?", ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]);
  console.log(properties);
  var passwordHolder = "";
  while (passwordHolder.length < properties.totalChar){
    var valueHolder = randomValueRetriever();
    passwordHolder += valueHolder;
  }
  return passwordHolder;
}
//
function defineParameters1(){
  var tc = prompt("How many characters 1-128?");
    if (tc > 7 && tc < 129){
      properties.totalChar = tc;
    } else {
      properties.totalChar = null;
    }
}

function defineParameters2(a, b){
var c = prompt("Do you want " + a);
    if (c === "y" || c ==="Y"){
      return b;
    } else {
      return null;
    }
}
function randomValueRetriever(){
  var a = Math.floor(Math.random()*4);
  if (a === 0){
    if (properties.upperCase=== null){
      return "";
    }
    return properties.upperCase[Math.floor(Math.random()*properties.upperCase.length)]
  }
  if (a === 1){
    if (properties.lowerCase=== null){
      return "";
    }
    return properties.lowerCase[Math.floor(Math.random()*properties.lowerCase.length)]
  }
  if (a === 2){
    if (properties.number=== null){
      return "";
    }
    return properties.number[Math.floor(Math.random()*properties.number.length)]
  }
  if (a === 3){
    if (properties.specialChar=== null){
      return "";
    }
    return properties.specialChar[Math.floor(Math.random()*properties.specialChar.length)]
  }
}
