import {BTNode} from './trees1.js';
import {BST} from './trees1.js';

function bstPreOrder(bst) {

}

function bstToArray(bst) {

}

function bstToList(bst) {

}
var newTree = new BST();//.add(33).add(99).add(144).add(5).add(39).add(78).add(16);
newTree.Verbose(true);
newTree.add(24).add(33).add(99).add(144).add(5).add(39).add(78).add(16).add(16).add(122).add(99).add(19).add(41).add(56).add(67).add(65).add(201).add(66).add(501).add(432).add(787);
console.log(newTree.size());
console.log(`newTree contains 999: ${newTree.contains(999)}`);
console.log(`newTree contains 39: ${newTree.contains(39)}`);

console.log(`newTree.min() = ${newTree.min()}`);
console.log(`newTree.max() = ${newTree.max()}`);

bstPreOrder(newTree);

bstToArray()