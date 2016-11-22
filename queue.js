//  Queue - FIFO

function Queue() {
  this.items = [];
}

Queue.prototype = {
  constructor: Queue,
  add: function add(item) {
    this.items.push(item);
    return this;
  },
  remove: function remove() {
    this.items.shift();
    return this;
  },
  get: function get() {
    return this.items;
  }
};

var myQueue = new Queue();
myQueue.add(100).add(23).add(12).add(78);
myQueue.remove();
console.log(myQueue.get());
