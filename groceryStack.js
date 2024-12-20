// Initialize an empty array to represent the stack.
let stack = [];

// Function to check if the stack is empty and return the top element if not empty.
function peek() {
  return stack.length === 0 ? "Stack is empty" : stack[stack.length - 1];
}

// Function to add an item to the top of the stack.
function push(item) {
  stack.push(item);
  console.log("Stack after push:", stack);
}

// Function to remove and return the top item from the stack.
function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
    return null;
  }
  const poppedItem = stack.pop();
  console.log("Stack after pop:", stack);
  return poppedItem;
}

// Example grocery items (replace with user input if needed).
const groceryItems = ["Milk", "Eggs", "Bread", "Cheese", "Apples"];

// Push the grocery items onto the stack.
groceryItems.forEach(item => push(item));

// Example of pop and peek operations.
pop();
console.log("Top item:", peek());
