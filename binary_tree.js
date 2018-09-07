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

/* Morris Traversal
DOES NOT USE RECURSION OR A STACK
Create links to Inorder successor and print the data using these links, and finally revert the changes to restore original tree.
1. Initialize current as root
2. While current is not NULL
   If current does not have left child
      a) Print current’s data
      b) Go to the right, i.e., current = current->right
   Else
      a) Make current as right child of the rightmost
         node in current's left subtree
      b) Go to this left child, i.e., current = current->left
*/

//treeHeight, returns height of tree, root and leaf node-inclusive
function treeHeight(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return Math.max.apply(Math, [treeHeight(root.left), treeHeight(root.right)]) + 1;
}

function nextLargest(node) {
  let curNode = node;
  let returnNode = null;
  if (!curNode) return null;
  if (curNode.right) {
    curNode = curNode.right;
    while (curNode.left) {
      curNode = curNode.left;
    }
  }
  else {
    curNode
  }
}

module.exports = {
  inOrder: inOrder,
  preOrder: preOrder,
  postOrder: postOrder,
  treeHeight: treeHeight,
  root: sampleRootNode,
};
