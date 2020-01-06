//	Stack - LIFO

function Stack() {
  this.items = [];
}

// Shift/Unshift - Add/remove items from the begining of the array

Stack.prototype = {
  constructor: Stack,
  add: function add() {
    this.items.unshift(...arguments);
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

var myStack = new Stack();
myStack.add(10, 11, 12, 13).remove();
console.log(myStack.get()); // returns 11, 12, 13
