const CryptoJS = require("crypto-js"); 
const libraryCode = `
window.MyLibrary = {
  greet: function(name) { console.log("Hello " + name); },
  add: function(a, b) { return a + b; },
};
`;

const SECRET_KEY = "AashDit-Library-Secret-2025"; // your domain-locked key
const encryptedCode = CryptoJS.AES.encrypt(libraryCode, SECRET_KEY).toString();
console.log(encryptedCode);
