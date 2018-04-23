// import {BinaryNode, rootNode} from './classes/binary_tree_class.js';
const BinaryTree = require('./classes/binary_tree_class');
const sampleRootNode = BinaryTree.sampleRootNode;

//In-order Tree traversal, left, root, right
function inOrder(root) {
  if (root.left) inOrder(root.left);
  console.log(root.data);
  if (root.right) inOrder(root.right);
}

function preOrder(root) {
  console.log(root.data);
  if (root.left) preOrder(root.left);
  if (root.right) preOrder(root.right);
}

function postOrder(root) {
  if (root.left) postOrder(root.left);
  if (root.right) postOrder(root.right);
  console.log(root.data);
}

module.exports = {
  inOrder: inOrder,
  preOrder: preOrder,
  postOrder: postOrder,
  root: sampleRootNode,
};
