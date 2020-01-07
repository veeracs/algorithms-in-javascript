//  Queue - FIFO

function Queue() {
  this.items = [];
}

// Add/remove items from the begining of the array

function Queue() {
  this.items = [...arguments];
}

Queue.prototype = {
  constructor: Queue,
  add: function() {
    this.items.push(...arguments);
    return this;
  },
  remove: function() {
    this.items.shift();
    return this;
  },
  get: function() {
    return this.items;
  }
}
  
const myQueue = new Queue(1, 2, 3, 4);

console.log(myQueue.get()); // [ 1, 2, 3, 4 ]

myQueue.add(5, 6);

console.log(myQueue.get()); // [ 1, 2, 3, 4, 5, 6 ]

myQueue.remove();

console.log(myQueue.get()); // [ 2, 3, 4, 5, 6 ]

