//	Stack - LIFO

// Shift/Unshift - add/remove items from the begining of the array

//  Stack - LIFO
function Stack() {
  this.items = [...arguments];
}

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

var myStack = new Stack(10);
myStack.add(11, 12, 13).remove();
console.log(myStack.get()); // returns  12, 13, 10
