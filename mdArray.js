// Original multi-dimensional array.
const originalArray = [
  ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"],
  [24, 65, 21, 5, 9],
];

// Restructured array.
const restructuredArray = [];

// Combine names and ages.  Assumes ages are assigned in order.
for (let i = 0; i < originalArray[0].length; i++) {
  restructuredArray.push([originalArray[0][i], originalArray[1][i]]);
}

// Log the restructured array.
console.log("Restructured Array:");
restructuredArray.forEach(item => console.log(item)); //Prints each sub-array on a new line.
