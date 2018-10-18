const { assert, expect } = require('chai');
const { inOrder, preOrder, postOrder, treeHeight, nextLargest, isValidBST, isBalanced, balHeight } = require('../binaryTree');
const { BinaryNode } = require('../classes/binaryTreeClass');

/* Sample tree
          7
         / \
        5   10
       /   /  \
      2   8    13
     / \
    1   3
*/

//NON-BST node
const fourNonBSTNode = new BinaryNode({
  val: 4,
});
// const nineNonBSTNode = new BinaryNode({
//   val: 9,
// });



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

describe('BinaryTree', function() {
  describe('constructor', function() {
    it('returns a node with null values with no inputs',function() {
      const nullNode = new BinaryNode();
      console.log(nullNode);
      assert.equal(nullNode.val, null);
      assert.equal(nullNode.left, null);
      assert.equal(nullNode.right, null);
      assert.equal(nullNode.parent, null);
    });
  });
})