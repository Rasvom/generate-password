function generatePassword(length, complexity, numberOfPasswords) {
  if (numberOfPasswords === undefined) numberOfPasswords = 1;

  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let items = "";
  let passwords = [];
  let count = 0;

  if (complexity === "easy") {
    items = alphabet;
  } else if (complexity === "medium") {
    items = digits + alphabet;
  } else if (complexity === "hard") {
    items = symbols + digits + alphabet;
  }

  for (let i = 0; i < numberOfPasswords && count < 5000; i++) {
    let pass = "";
    for (let j = 0; j < length; j++) {
      pass += items[Math.floor(Math.random() * items.length)];
    }
    if (passwords.includes(pass)) {
      numberOfPasswords++;
      count++;
    } else {
      passwords.push(pass);
    }
  }
  return passwords;
}
console.log(generatePassword(2, "easy", 5000).length);
