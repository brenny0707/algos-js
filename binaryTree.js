// import {BinaryNode, rootNode} from './classes/binary_tree_class.js';
const { BinaryNode } = require('./classes/binaryTreeClass');

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

function nextLargest(node, root) {
  let curNode = node;
  if (!curNode) return null;
  if (curNode.right) {
    curNode = curNode.right;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode;
  }
  else {
    curNode = root;
    let lowestMax = curNode;
    while (curNode) {
      if (curNode.val > node.val && curNode.val < lowestMax.val) lowestMax = curNode;
      curNode = curNode.val > node.val ? curNode.left : curNode.right;
    }
    return (lowestMax && lowestMax.val) > node.val ? lowestMax.val : null;
  }
}

function isValidBST(node, min = null, max = null) {
  if (!node) return true;
  if (min !== null && node.val <= min) return false;
  if (max !== null && node.val >= max) return false;
  const leftChildBST = !node.left ?
    true :
    isValidBST(node.left, min, node.val);
  const rightChildBST = !node.right ?
    true :
    isValidBST(node.right, node.val, max);
  return (leftChildBST && rightChildBST);
}

//where height difference of subtrees are not greater than 1
function isBalanced(node = sevenNode) {
  if (!node) return false;
  const balHeightVal = balHeight(node);
  return balHeightVal ? true : false;
}

function balHeight(node) {
  if (!node) return 0;
  const lHeight = balHeight(node.left);
  const rHeight = balHeight(node.right);
  if (lHeight === false || rHeight === false) return false;
  if (Math.abs(lHeight - rHeight) > 1) return false;
  return Math.max(...[lHeight, rHeight]) + 1;
}

//treeHeight, returns height of tree, root and leaf node-inclusive
function treeHeight(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return Math.max.apply(Math, [treeHeight(root.left), treeHeight(root.right)]) + 1;
}

module.exports = {
  inOrder: inOrder,
  preOrder: preOrder,
  postOrder: postOrder,
  treeHeight: treeHeight,
  nextLargest: nextLargest,
  isValidBST: isValidBST,
  isBalanced: isBalanced,
  balHeight: balHeight,
};
