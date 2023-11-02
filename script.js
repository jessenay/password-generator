var generateBtn = document.querySelector("#generate"); 

function generatePassword() { // Function to generate the password
  const minLength = 8; // Minimum allowed password length
  const maxLength = 128; // Maximum allowed password length

  // Prompt the user for the desired password length
  let length = parseInt(prompt(`Enter desired password length (${minLength}-${maxLength}):`));

  // Validate the user's input for password length
  if (isNaN(length) || length < minLength || length > maxLength) {
    return "Invalid password length! Please enter a number between 8 and 128.";
  }

  // Prompt the user for character type preferences
  const useLowercase = confirm("Include lowercase letters?");
  const useUppercase = confirm("Include uppercase letters?");
  const useDigits = confirm("Include digits?");
  const useSpecialChars = confirm("Include special characters?");

  let charset = "";

  // Makes the character set based on the user preference
  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useDigits) {
    charset += "0123456789";
  }
  if (useSpecialChars) {
    charset += "!@#$%^&*()-_=+[]{};:<>,.?/`~";
  }
  if (charset === "") {
    return "You must select at least one character type for the password.";
  }

  // Checks if the user selected at least one character type
  let password = "";

  // Generates the password based on user preferences and password length
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Display the generated password in the input field
  passwordText.value = password;
}

// Add an event listener to the generate button to trigger the password generation
generateBtn.addEventListener("click", writePassword);
