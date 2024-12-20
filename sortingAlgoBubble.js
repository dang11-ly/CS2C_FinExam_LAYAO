// Array to be sorted.  You can replace this with prompt() to get user input.
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Bubble Sort function.
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order.
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        console.log(`Swapped ${arr[i + 1]} and ${arr[i]}:`, arr); //Log comparison and swap.
      }
    }
  } while (swapped); // Continue until no more swaps are needed.
  return arr;
}

// Sort the array and log the comparison process.
const sortedNumbers = bubbleSort(numbers);

//Log the final sorted array.
console.log("Sorted array:", sortedNumbers);
