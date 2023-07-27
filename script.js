// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let symbols = ['!', '@', '#', '$', '%', '&', '*', '?'];
let newArray = [];

// Returns random password
function generatePassword() {
  //resets array to generate new password
  newArray = [];

  if (confirm("Include lowercase letters?")) {
    newArray = [...newArray, ...lowerAlphabet];
  }
  if (confirm("Include upper case letters?")) {
    newArray = [...newArray, ...upperAlphabet];
  }
  if (confirm("Include numbers?")) {
    newArray = [...newArray, ...numbers];
  }
  if (confirm("Include special characters?")) {
    newArray = [...newArray, ...symbols];
  }

  //Loops through concatenated array and adds character to pw string
  let newPassword = "";
  let pwLength = parseInt(prompt("How long do you want the password? Enter numbers between 8 - 128."));

  //checks password criteria and user input
  if ((typeof pwLength !== 'number') || (pwLength < 8 || pwLength > 128)) {
    alert("Please enter a number between 8 - 128.");
    newPassword = "Length must be between 8 -128.";
  } else {
    for (i = 0; i < pwLength; i++) {
      let randomChar = Math.floor(Math.random() * newArray.length);
      newPassword = newPassword.concat(newArray[randomChar]);
    }
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