// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(target, newElement) {
  // your code here
  const tmp = new Stack();

  while (!stack.isEmpty()) {
    tmp.push(stack.pop());
  }

  while (!tmp.isEmpty()) {
    let tmpValue = tmp.pop();
    stack.push(tmpValue);
    if (tmpValue === target) {
      stack.push(newElement);
    }
  }

  return stack;
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D
