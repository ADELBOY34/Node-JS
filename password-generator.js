const generatePassword = require("generate-password");

function createPassword() {
  return generatePassword.generate({
    length: 16,
    numbers: true,
    symbols: true,
    strict: true,
  });
}

console.log(createPassword());
