// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue();
  for (let i = queue.size() - 1; i >= 0; i--) {
    tempQueue.enqueue(queue.items[i]);
  }

  while (!tempQueue.isEmpty()) {
    if (tempQueue.dequeue() !== queue.dequeue()) {
      return false;
    }
  }

  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true