//  Linked list
//  A list of nodes
//  A list can add or remove nodes
//  A list assigns a node as head of the list and a node as a tail of the list
//  A list can be traversed to search for a specific node
//  A node has a property called data, which stores a value
//  A node has a property called next, which points to the next node in the list
function LinkedList() {
    this.firstNode = null; //  pointer to the first item in the list
    this.length = 0; //  length of the linked list
    return this;
}

LinkedList.prototype = {
    constructor: LinkedList,
    addNode: function addNode(value, currNode) {
        //  initialize the node to be inserted
        var node = {
            value: value,
            next: null
        };
        //  set the first node of the list
        if (!this.firstNode) {
            this.firstNode = node;
            return this;
        }
        //  currNode to recursively navigate the list for node insertion
        currNode = currNode || this.firstNode;

        //  insert the node
        if (!currNode.next) {
            currNode.next = node;
        } else {
            //  propagate the list
            this.addNode(value, currNode.next);
        }

        this.length++;
        return this;
    },
    getNode: function(index) {
        //  returns the value of a node at index
        var i = 1,
            curr;
        curr = this.firstNode;
        while (i < index) {
            curr = curr.next;
            i++;
        }
        return curr;
    },
    indexOf: function(value) {
        //  returns the index of a node in the list,
        //  if the node is not present in the list, it returns -1.
        var currNode = this.firstNode,
            index = 0;
        while (currNode) {
            if (currNode.value === value) {
                return index;
            }
            currNode = currNode.next;
            index++;
        }
        return -1;
    },
    insertNode: function(position, value) {
        // This inserts a new item at a specified position in the list.
        var node = {
                value: value,
                next: null
            },
            currNode = this.firstNode,
            prevNode = null,
            index = 0;

        if (position >= 0 && position <= this.length) {
            if (position === 0) {
                // add to the first position in the list
                node.next = currNode;
                this.firstNode = node;
            } else {
                while (index++ < position) {
                    // increment the currNode just before the position
                    prevNode = currNode;
                    currNode = currNode.next;
                }
                node.next = currNode;
                prevNode.next = node;
            }
            this.length++;
        } else {
            throw new Error("The index is not within the bounds, no node was added to the list ");
        }
        return this;
    },
    printNodes: function printNodes() {
        var currNode = llist.firstNode;
        while (currNode) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
};

var mylist = new LinkedList();
mylist.appendNode(7).appendNode(8).appendNode(10);
//console.log(mylist.getNode(1).value);
//console.log(mylist.indexOf(7));

mylist.insertNode(3, 12);
mylist.insertNode(3, 13);

console.log(mylist.indexOf(12));