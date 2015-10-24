//  Binary search tree
//  Time Complexity - log n
function BinarySearchTree() {
    this.root = null;
    return this;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,
    insert: function insert(value, currNode) {
        //  initialize the node to be inserted
        var node = {
            value: value,
            left: null,
            right: null
        };
        //  set the root node of the tree
        if (!this.root) {
            this.root = node;
            return this;
        }
        //  currNode helps recursively navigate the tree for node insertion
        currNode = currNode || this.root;
        //  determine where to insert the node
        var insertKey = "right";
        if (value < currNode.value) {
            insertKey = "left";
        }
        //  insert the node
        if (!currNode[insertKey]) {
            currNode[insertKey] = node;
        } else {
            //  recursively call insert
            this.insert(value, currNode[insertKey]);
        }

        return this;
    }
};

var btree = new BinarySearchTree();
btree.insert(100).insert(20).insert(120).insert(12);

//  Level-order traversal is breadth first traversal
//  For each node, first the node is visited and then it's child nodes are put in FIFO

var queue = [];
var tempNode = btree.root;

while (tempNode) {
    //  log value of root node
    console.log(tempNode.value);
    //  push it's children into a queue
    if (tempNode.left) queue.push(tempNode.left);
    if (tempNode.right) queue.push(tempNode.right);
    //  dequeue each child node from the queue
    tempNode = queue.shift();
}