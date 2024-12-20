// Reverse the strings.
const revStr1 = str1.split("").reverse().join("");
const revStr2 = str2.split("").reverse().join("");

// Print original and reversed strings.
console.log(`Original: ${str1}, Reversed: ${revStr1}`);
console.log(`Original: ${str2}, Reversed: ${revStr2}`);

// Check and print palindrome status.
console.log(`Is string 1 a palindrome? ${str1 === revStr1}`);
console.log(`Is string 2 a palindrome? ${str2 === revStr2}`);
