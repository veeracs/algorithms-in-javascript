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

var mystack = new Stack();
mystack.add(10).add(12);
mystack.remove();

console.log(mystack.get());

//	Queue - FIFO

function Queue() {
	var items = [];

}