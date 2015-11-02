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
    },
    preOrder: function preOrder(currNode) {
        //  root -> left -> right
        // print the currNode
        // recurse the left subtree
        // recurse the right subtree
        currNode = currNode || this.root;
        if (!currNode) {
            return;
        }
        console.log(currNode.value);
        if (currNode.left) {
            preOrder(currNode.left);
        }
        if (currNode.right) {
            preOrder(currNode.right);
        }
    },
    inOrder: function inOrder(currNode) {
        // left -> root -> right
        // recurse the left subtree
        // print the currNode
        // recurse the right subtree
        currNode = currNode || this.root;
        if (!currNode) {
            return;
        }
        if (currNode.left) {
            inOrder(currNode.left);
        }
        console.log(currNode.value);
        if (currNode.right) {
            inOrder(currNode.right);
        }
    },
    postOrder: function postOrder(currNode) {
        // left -> right -> root
        // recurse the left subtree
        // recurse the right subtree
        // print the currNode
        currNode = currNode || this.root;
        if (!currNode) {
            return;
        }
        if (currNode.left) {
            postOrder(currNode.left);
        }
        if (currNode.right) {
            postOrder(currNode.right);
        }
        console.log(currNode.value);
    },
    levelOrder: function levelOrder() {
        //  Level-order traversal is Breadth First Search Traversal
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
    }
};

var btree = new BinarySearchTree();
btree.insert(100).insert(20).insert(120).insert(12);
//  print nodes with breadth first search
btree.levelOrder();
btree.preOrder();
btree.inOrder();
btree.postOrder();