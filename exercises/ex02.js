// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  // your code here
  const tmp = new Stack();

  let isTarget = false;

  while (!fruits.isEmpty()) {
    tmp.push(fruits.pop());
  }

  while (!tmp.isEmpty()) {
    let tmpValue = tmp.pop();

    if (tmpValue === a) {
      isTarget = true;
      fruits.push(tmpValue);
    } else if (tmpValue === b) {
      isTarget = false;
      fruits.push(tmpValue);
    } else if (!isTarget) {
      fruits.push(tmpValue);
    }
  }

  return fruits;
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
