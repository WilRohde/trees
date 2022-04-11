class BTNode {
constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...

    add(val) {
        var newNode = new BTNode(val);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }

        // new node isn't the root so we have to figure out where it goes
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
            // going to the left
            if (prevNode.left == null) {
                // it's not there
                return false;
            }
            else {
                // going left
                return this.search(prevNode.left,value);
            }
        }
        else {
            // going to the right
            if (prevNode.right == null) {
                // it's not there
                return false;
            }
            else {
                return this.search(prevNode.right,value);
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
        var value = curNode.value;
        // just keep going left
        return this.searchLeft(curNode,value);
    }

    searchLeft(curNode,value) {
        if (curNode.left == null) {
            // this is the end of the left tree - should be the minimum value as long
            // as the tree is built correctly
            return curNode.value;
        }
        else {
            // otherwise we keep going left
            var leftNode = curNode.left;
            var value = curNode.value;
            return this.searchLeft(leftNode,value);
        }
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
}
