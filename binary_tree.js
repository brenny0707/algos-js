// import {BinaryNode, rootNode} from './classes/binary_tree_class.js';
const BinaryTree = require('./classes/binary_tree_class');
const sampleRootNode = BinaryTree.sampleRootNode;

//In-order Tree traversal, left, root, right
function inOrder(root) {
  if (root.left) inOrder(root.left);
  console.log(root);
  if (root.right) inOrder(root.right);
}

console.log(sampleRootNode.data);
