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

//	Queue - FIFO

function Queue() {
	var items = [];
	this.add = function add(item) {
		items.push(item);
		return this;
	};
	this.remove = function remove() {
		items.shift();
		return this;
	};
	this.get = function get() {
		return items;
	}
	return this;
}

var myQueue = new Queue();
myQueue.add(100).add(23).add(12).add(78);
myQueue.remove();
console.log(myQueue.get());