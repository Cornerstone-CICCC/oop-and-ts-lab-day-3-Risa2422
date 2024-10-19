// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 4 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  // your code here
  const dividedSize = queue.size() / 2;

  const firstArr = new Queue();
  for (let i = 0; i < dividedSize; i++) {
    firstArr.enqueue(queue.dequeue());
  }

  const secondArr = new Queue();
  while (!queue.isEmpty()) {
    secondArr.enqueue(queue.dequeue());
  }

  const finalData = new Queue();
  for (let i = 0; i <= firstArr.size() + secondArr.size(); i++) {
    finalData.enqueue(firstArr.dequeue());
    finalData.enqueue(secondArr.dequeue());
  }

  while (!finalData.isEmpty()) {
    queue.enqueue(finalData.dequeue());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6