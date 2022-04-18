export class BTNode {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }

    print() {
        return `value = ${this.value}, this.left = ${this.left}, this.right = ${this.right}`;
    }
}

export class BST {
    constructor() {
        this.root = null;
        this.verbose = false;
    }
    // add methods here...

    Verbose(value) {
        if (value != true) {
            this.verbose = false;
        }
        else {
            this.verbose = true;
        }
    }

    add(val) {
        var newNode = new BTNode(val);
        if (this.verbose == true) {
            console.log(`created new node ${newNode}`);
        }
        if (this.root == null) {
            if (this.verbose == true) {
                console.log(`setting ${val} as root node`);
            }
            this.root = newNode;
            return this;
        }

        // new node isn't the root so we have to figure out where it goes
        this.compare(this.root, newNode);
        return this;
    }

    compare(prevNode,newNode) {
        if (newNode.value < prevNode.value) {
            if (prevNode.left == null) {
                // found a new home
                prevNode.left = newNode;
                return this;
            }
            else {
                // have to compare the left node to the new node
                this.compare(prevNode.left,newNode);
            }
        }
        else {
            //new node is equal to or greater than old node
            if (prevNode.right == null) {
                // new node is home
                prevNode.right = newNode;
                return this;
            }
            else {
                // have to compare with the right node
                this.compare(prevNode.right, newNode);
            }
        }
        // got to the end I think we want to do this
        return this;
    }

    contains(value) {
        if (this.root == null) {
            return false;
        }
        else {
            // start searching...
            return this.search(this.root,value);
        }
    }

    search(prevNode, value) {
        if (prevNode.value == value) {
            // we found it...
            return true;
        }
        if (prevNode.value < value) {
            // going to the right
            if (prevNode.right == null) {
                // it's not there
                return false;
            }
            else {
                // going right
                return this.search(prevNode.right,value);
            }
        }
        else {
            // going to the left
            if (prevNode.left == null) {
                // it's not there
                return false;
            }
            else {
                return this.search(prevNode.left,value);
            }
        }
    }

    min() {
        // find the minimum amount in the tree. should just be able to follow the left-hand
        // branch all the way down until it stops
        if (this.root == null) {
            return this;
        }
        var curNode = this.root;
        if (this.verbose == true) {
            console.log(`root value = ${this.root.value}`);
        }
        // just keep going left
        return this.searchLeft(curNode);
    }

    searchLeft(curNode) {
        if (curNode.left == null) {
            // this is the end of the left tree - should be the minimum value as long
            // as the tree is built correctly
            if (this.verbose == true) {
                console.log(`searchLeft value = ${curNode.value}`);
            }
            return curNode.value;
        }
        else {
            // otherwise we keep going left
            var leftNode = curNode.left;
            return this.searchLeft(leftNode);
        }
    }

    max() {
        // find the maximum amount in the tree. should just be able to follow the right-hand
        // branch all the way down until it stops
        if (this.root == null) {
            return this;
        }
        var curNode = this.root;
        // just keep going left
        return this.searchRight(curNode);
    }

    searchRight(curNode) {
        if (curNode.right == null) {
            // end of the right branch, should be our max value
            return curNode.value;
        }
        else {
            // keep going right...
            var rightNode = curNode.right;
            return this.searchRight(rightNode);
        }
    }

    size() {
        // figure out how many nodes are in the tree
        if (this.root == null) {
            return 0;
        }
        // add one for the root node...
        if (this.verbose == true) {
            console.log(`in size(), root node = ${this.root}`);
        }
        return 1 + this.nodeCount(this.root);
    }

    nodeCount(curNode) {
        if (this.verbose == true) {
            console.log(`entered nodeCount, curNode = ${curNode}`);
        }
        var subNodeCount = 0
        if (curNode == null) {
            return subNodeCount;
        }
        if (curNode.left != null) {
            subNodeCount++;
        }
        if (curNode.right != null) {
            subNodeCount++
        }
        return subNodeCount + this.nodeCount(curNode.right) + this.nodeCount(curNode.left);
    }

    isEmpty() {
        // I'm cheesing this - if the root is null there's nothing in the tree
        if (this.root == null) {
            return true;
        }
        else {
            return false;
        }
    }

    height() {

    }

    countRight(count) {

    }

    countLeft(count) {}

    isBalanced() {}

    arrayToBST() {}

    closestCommonAncestor() {}

    minHeight() {}
}

