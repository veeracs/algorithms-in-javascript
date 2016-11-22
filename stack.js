//	Stack - LIFO
function Stack() {
  this.items = [];
}

Stack.prototype = {
  constructor: Stack,
  add: function add(item) {
    this.items.unshift(item);
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
myStack.add(10).add(11).remove();
console.log(myStack.get());