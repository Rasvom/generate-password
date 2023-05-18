function generatePassword(length, complexity, numberOfPasswords) {
  if (numberOfPasswords === undefined) {
    numberOfPasswords = 1;
  }
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let passwords = [];

  if (complexity === "easy") {
    let pass = "";
    for (let i = 0; i < numberOfPasswords; i++) {
      for (let i = 0; i < length; i++) {
        pass += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      passwords.push(pass);
      pass = "";
    }
  } else if (complexity === "medium") {
    let digitsAlphabet = digits + alphabet;
    let pass = "";
    for (let i = 0; i < numberOfPasswords; i++) {
      for (let i = 0; i < length; i++) {
        pass +=
          digitsAlphabet[Math.floor(Math.random() * digitsAlphabet.length)];
      }
      passwords.push(pass);
      pass = "";
    }
  } else if (complexity === "hard") {
    let symbolsDigitsAlphabet = symbols + digits + alphabet;
    let pass = "";
    for (let i = 0; i < numberOfPasswords; i++) {
      for (let i = 0; i < length; i++) {
        pass +=
          symbolsDigitsAlphabet[
            Math.floor(Math.random() * symbolsDigitsAlphabet.length)
          ];
      }
      passwords.push(pass);
      pass = "";
    }
  }
  return passwords;
}

console.log(generatePassword(10, "easy"));
