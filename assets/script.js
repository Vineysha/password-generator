
//Variables
var characterLenght = 8;
var choiceArr=[];

var specialCharArr =['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','<','>','/'];
var lowerCaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr=['0','1','2','3','4','5','6','7','8','9'];


// Assignment code here

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
 var correctPrompts = getPrompts(); 
   if (correctPrompts){
 var newPassword = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = newPassword;
 }else {
 passwordText.value =" ";
 }
}
function generatePassword(){
 var password = " ";
 for (var i = 0; i < characterLenght; i++){
   var randomIndex = Math.floor(Math.random() * choiceArr.length);
   password = password + choiceArr[randomIndex];
 }
 return password;
}

//Prompts

function getPrompts(){
 choiceArr = [];
 characterLenght = parseInt(prompt("How long do you want your password to be? (8 - 128 characters"));

 if(isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {
   alert ("Sorry! Character lenght needs to be a number. (8 - 128 digits). Try again.");
   return false;
 }

 if (confirm ("Add lowercase letters to your password?")){
   choiceArr = choiceArr.concat(lowerCaseArr);
 }
 if (confirm("Add uppercase letters to your password?")){
   choiceArr = choiceArr.concat(upperCaseArr);
 }
 if (confirm("Add numbers to your password?")){
   choiceArr = choiceArr.concat(numberArr);
 }
 if (confirm("Add symbols to your password?")){
   choiceArr = choiceArr.concat(specialCharArr);
 }
 return true;
}