// Initialize arrays.
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge arrays.
const merged = numbers.concat(names);
console.log("Merged array:", merged);

// Sort numbers in reverse.
numbers.sort((a, b) => b - a); // Descending order.
console.log("Numbers (reverse sorted):", numbers);

// Sort names alphabetically.
names.sort();
console.log("Names (alphabetically sorted):", names);
