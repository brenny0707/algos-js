import {BinaryNode, rootNode} from './classes/binary_tree_class.js';

//In-order Tree traversal, left, root, right
function inOrder(root) {
  if (root.left) inOrder(root.left);
  console.log(root);
  if (root.right) inOrder(root.right);
}
