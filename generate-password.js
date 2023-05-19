function generatePassword(length, complexity, numberOfPasswords) {
  if (numberOfPasswords === undefined) numberOfPasswords = 1;

  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let items = "";
  let passwords = [];
  for (let i = 0; [...new Set(passwords)].length < numberOfPasswords; i++) {
    passwords = [];
    if (complexity === "easy") {
      items += alphabet;
    } else if (complexity === "medium") {
      items += digits + alphabet;
    } else if (complexity === "hard") {
      items += symbols + digits + alphabet;
    }
    for (let i = 0; i < numberOfPasswords; i++) {
      let pass = "";
      for (let i = 0; i < length; i++) {
        pass += items[Math.floor(Math.random() * items.length)];
      }
      passwords.push(pass);
      pass = "";
    }
    if (i === 10) {
      break;
    }
  }
  return [...new Set(passwords)];
}

console.log(generatePassword(5, "easy", 5000).length);
