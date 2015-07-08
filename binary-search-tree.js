//  Binary search tree
//  Time Complexity - log n
function BinarySearchTree() {
    this.root = null;
    return this;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,
    insert: function(value, currNode) {
        var node = {
            value: value,
            left: null,
            right: null
        };
        if (!this.root) {
            this.root = node;
            return;
        }
        var insertKey = "right";
        currNode = currNode || this.root;
        if (value < currNode.value) {
          insertKey = "left";
        }
        if (!currNode[insertKey]) {
          currNode[insertKey] = node;
        } else {
          this.insert(value, currNode[insertKey]);
        }
    }
};

var btree = new BinarySearchTree();
btree.insert(11);
btree.insert(1);
btree.insert(13);
btree.insert(0);
console.log(btree.root.value);
console.log(btree.root.left.value);
console.log(btree.root.right.value);
console.log(btree.root.left.left.value);