// Assignment Code
let generateBtn = document.querySelector("#generate");
let basic = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*?<>~_+"
let superString = "";
let generatedPassword = [];

function generatePassword() {
  confirm("Would you like specific password criteria?")
  const lengthPassword = prompt("How many characters would you like?", "8-128")
  const upperSelected = confirm("Would you like uppercase characters?")
  const lowerSelected = confirm("Would you like lower case characters?")
  const numberSelected = confirm("Would you like numbers?")
  const specialCharactersSelected = confirm("Would you like special characters?")
  let numberOfCharAlreadySelected = 0;

    if (upperSelected) {
      const randomIndex = Math.floor(Math.random() * upperCase.length);
      const randomCharFromUpper = upperCase.charAt(randomIndex);

      superString += upperCase;
      generatePassword += randomCharFromUpper;
      numberOfCharAlreadySelected++;
    }

    if (lowerSelected) {
      const randomIndex = Math.floor(Math.random() * basic.length);
      const randomCharFromBasic = basic.charAt(randomIndex);

      superString += basic
      generatePassword += randomCharFromBasic
      numberOfCharAlreadySelected++
    }

    if (numberSelected) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomCharFromNumbers = numbers.charAt(randomIndex);

      superString += numbers
      generatePassword += randomCharFromNumbers
      numberOfCharAlreadySelected++
    }

    if (specialCharactersSelected) {
      const randomIndex = Math.floor(Math.random() * specialCharacters.length);
      const randomCharFromSC = specialCharacters.charAt(randomIndex)

      superString += specialCharacters
      generatePassword += randomCharFromSC
      numberOfCharAlreadySelected++
    }


    for (let i = 0; i < lengthPassword; i++) {
      superStringarray = superString.split("")
      let randomFromArray = Math.floor((Math.random() * superStringarray.length) +1)
      generatedPassword.push(superStringarray[randomFromArray])
      //from super string select random characters and push to generated password
      // generatedPassword = Math.floor(Math.random () * superString.lengthPassword)
    }
    // generatedPasswordArray = generatedPassword.join().replace(",","")
    console.log(generatedPassword.join().replace(/,/g,""))
    return generatedPassword.join().replace(/,/g,"");
  }
  

  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

