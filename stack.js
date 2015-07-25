//	Stack - LIFO
function Stack() {
	var items = [];
	this.add = function(item) {
        items.unshift(item);
		return this;
	};
	this.remove = function() {
        items.shift();
      	return this;
	};
    this.get = function() {
      return items;
    };
	return this;
}

var myStack = new Stack();
myStack.add(10).add(12);
myStack.remove();

console.log(mystack.get());

//	Queue - FIFO

function Queue() {
	var items = [];
	this.add = function(item) {
		items.push(item);
		return this;
	};
	this.remove = function() {
		items.shift();
		return this;
	};
	this.get = function() {
		return items;
	}
	return this;
}

var myQueue = new Queue();
myQueue.add(100).add(23).add(12).add(78);
myQueue.remove();
console.log(myQueue.get());
