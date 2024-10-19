// Create a function called storeCatalog that returns an object with 3 properties:
// - products (object with product names as keys and no. of instances of the product)
// - totalPrice
// - mostExpensive
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function storeCatalog(queue) {
  // your code here
  let productList = {};
  let totalPrice;
  let mostExpensiveItem;

  const tempQueue = new Queue();
  while (!queue.isEmpty()) {
    tempQueue.enqueue(queue.dequeue());
  }

  for (let i = 0; i < tempQueue.size(); i++) {
    if (!productList[tempQueue.items[i].product]) {
      productList[tempQueue.items[i].product] = 1;
    } else {
      productList[tempQueue.items[i].product]++;
    }
  }

  totalPrice = tempQueue.items.reduce((acc, crr) => {
    return acc + crr.price;
  }, 0);

  mostExpensiveItem = tempQueue.items.reduce(
    (acc, crr) => {
      return crr.price > acc.price
        ? { price: crr.price, product: crr.product }
        : acc;
    },
    { price: 0, product: null }
  );

  return {
    products: productList,
    totalPrice: totalPrice,
    mostExpensive: mostExpensiveItem.product,
  };
}

const store = new Queue();
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Soap', price: 5 })
store.enqueue({ product: 'Cereal', price: 12 })
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Shampoo', price: 7 })
store.enqueue({ product: 'Broom', price: 25 })
store.enqueue({ product: 'Cereal', price: 9 })

const result = storeCatalog(store)
console.log(result)
// {
//   products: {
//     "Milk": 2,
//     "Soap": 1,
//     "Cereal": 2,
//     "Shampoo": 1,
//     "Broom": 1
//   },
//   totalPrice: 78,
//   mostExpensive: "Broom"
// }