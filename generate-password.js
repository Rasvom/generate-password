function generatePassword(length, complexity, numberOfPasswords) {
  if (numberOfPasswords === undefined) numberOfPasswords = 1;

  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let items = "";
  let passwords = [];
  if (complexity === "easy") {
    items = alphabet;
  } else if (complexity === "medium") {
    items = digits + alphabet;
  } else if (complexity === "hard") {
    items = symbols + digits + alphabet;
  }
  for (let i = 0; i < numberOfPasswords; i++) {
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += items[Math.floor(Math.random() * items.length)];
    }
    if (passwords.includes(pass)) {
      numberOfPasswords++;
      pass = "";
    } else if (numberOfPasswords === numberOfPasswords + 100) {
      break;
    } else {
      passwords.push(pass);
      pass = "";
    }
  }
  return passwords;
}
console.log(generatePassword(5, "easy", 5000));
