const { NotImplementedError } = require("../extensions/index.js");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encrypted += String.fromCharCode(
          ((charCode - 65 + key.charCodeAt(j % key.length) - 65) % 26) + 65
        );
        j++;
      } else {
        encrypted += message.charAt(i);
      }
    }

    return this.isDirect ? encrypted : encrypted.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decrypted = "";
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        decrypted += String.fromCharCode(
          ((charCode - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26) +
            65
        );
        j++;
      } else {
        decrypted += encryptedMessage.charAt(i);
      }
    }

    return this.isDirect ? decrypted : decrypted.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
