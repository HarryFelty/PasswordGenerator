// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let symbols = ['!', '@', '#', '$', '%', '&', '*', '?'];
let newArray = [];

// Returns random password
function generatePassword() {
  if (confirm("Include lowercase letters?")) {
    let lwrCase = true;
    if (lwrCase) {
      newArray = [...newArray, ...lowerAlphabet];
    }
    lwrCase = false;
  }
  if (confirm("Include upper case letters?")) {
    let upprCase = true;
    if (upprCase) {
      newArray = [...newArray, ...upperAlphabet];
    }
    upprCase = false;
  }
  if (confirm("Include numbers?")) {
    let num = true;
    if (num) {
      newArray = [...newArray, ...numbers];
    }
    num = false;
  }
  if (confirm("Include symbols?")) {
    let sym = true;
    if (sym) {
      newArray = [...newArray, ...symbols];
    }
    sym = false;
  }

  let newPassword = "";
  let pwLength = prompt("How long do you want the password? Enter numbers only.");
  //Loops through concatenated array and adds character to pw string
  for (i = 0; i < pwLength; i++) {
    let randomChar = Math.floor(Math.random() * newArray.length);
    newPassword = newPassword.concat(newArray[randomChar]);
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);