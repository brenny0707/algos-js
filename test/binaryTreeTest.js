const { assert, expect } = require('chai');
const { inOrder, preOrder, postOrder, treeHeight, nextLargest, isValidBST, isBalanced, balHeight } = require('../binaryTree');
const { BinaryNode } = require('../classes/binaryTreeClass');

/* Sample BST non-balanced tree below
          7
         / \
        5   10
       /   /  \
      2   8    13
     / \
    1   3
*/

const oneNode = new BinaryNode({
  val: 1,
});
const threeNode = new BinaryNode({
  val: 3,
});
const twoNode = new BinaryNode({
  val: 2,
  left: oneNode,
  right: threeNode,
});
const fiveNode = new BinaryNode({
  val: 5,
  left: twoNode,
});
const eightNode = new BinaryNode({
  val: 8,
});
const thirteenNode = new BinaryNode({
  val: 13
});
const tenNode = new BinaryNode({
  val: 10,
  left: eightNode,
  right: thirteenNode
});
const sevenNode = new BinaryNode({
  val: 7,
  left: fiveNode,
  right: tenNode,
});

/* Sample non-BST balanced tree
            9
          /    \
         4      12
               /  \
             14    13
*/

const nonBSTfourteenNode = new BinaryNode({
  val: 14,
});
const nonBSTthirteenNode = new BinaryNode({
  val: 13,
});
const nonBSTtwelveNode = new BinaryNode({
  val: 12,
  left: nonBSTfourteenNode,
  right: nonBSTthirteenNode,
});
const nonBSTfourNode = new BinaryNode({
  val: 4,
});
const nonBSTnineNode = new BinaryNode({
  val: 9,
  left: nonBSTfourNode,
  right: nonBSTtwelveNode,
});

describe('BinaryTree', function() {
  describe('constructor', function() {
    it('returns a node with null values with no inputs',function() {
      const nullNode = new BinaryNode();
      assert.equal(nullNode.val, null);
      assert.equal(nullNode.left, null);
      assert.equal(nullNode.right, null);
    });
  });
  describe('nextLargest', function() {
    it('should return the next largest node by value assuming BST', function() {
      assert.equal(nextLargest(sevenNode, sevenNode).val, 8);
      assert.equal(nextLargest(threeNode, sevenNode), 5);
    });
    it('should return null if there is no greater valued node', function() {
      assert.equal(nextLargest(thirteenNode, sevenNode), null);
    });
  });
  describe('isValidBST', function() {
    it('should return true if left child < node < right child', function() {
      assert.equal(isValidBST(sevenNode), true);
    });
    it('should return false when the tree is not valid', function() {
      assert.equal(isValidBST(nonBSTnineNode), false);
    });
  })
})