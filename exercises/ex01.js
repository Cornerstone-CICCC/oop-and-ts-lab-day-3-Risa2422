// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(a, b) {
  // your code here
  const tmp = new Stack();
  let firstIndex;
  let secondIndex;
  let targetIndex = 0;

  for (let i = 0; i < students.size(); i++) {
    tmp.push(students.items[i]);
  }

  while (!tmp.isEmpty()) {
    let test = tmp.pop();

    if (test === a) {
      firstIndex = targetIndex;
    } else if (test === b) {
      secondIndex = targetIndex;
    }

    targetIndex++;
  }

  return firstIndex - secondIndex;
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance("Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance("Joe", "Jill")
console.log(distance2) // 2
