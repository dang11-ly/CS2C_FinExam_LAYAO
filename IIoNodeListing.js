class Node {
  constructor(value) {
    this.value = value; // Store the node's data.
    this.next = null;   // Pointer to the next node (initially null).
  }
}

class LinkedList {
  constructor() {
    this.head = null;   // Head of the list (initially null).
    this.size = 0;     // Current size of the list.
  }

  append(value) {
    const newNode = new Node(value); // Create a new node with the given value.

    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head.
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse to the end of the list.
      }
      current.next = newNode; // Append the new node to the end.
    }
    this.size++; // Increment the list's size.
    this.print(); // Print the updated list.
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " "; //Build string representation of the list.
      current = current.next;
    }
    console.log("List:", output); //Print the list to the console.
  }
}


// Example usage:
const itemsToAppend = [
  "Data Structures - Array",
  "Variable Type - Integer",
  "Sorting Algorithm - Bubble Sort",
];

const myList = new LinkedList();

itemsToAppend.forEach(item => myList.append(item));
