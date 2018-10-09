const BinaryNode = function(nodeOptions) {
    this.val = nodeOptions.val;
    this.left = nodeOptions.left ? nodeOptions.left : null;
    this.right = nodeOptions.right ? nodeOptions.right : null;
    this.parent = nodeOptions.parent ? nodeOptions.parent : null;
};
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

function isValidBST(node = sevenNode, min = null, max = null) {
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

// console.log(isValidBST());
console.log(isBalanced());
exports.sampleRootNode = sevenNode;
// export { BinaryNode, sevenNode as rootNode };
