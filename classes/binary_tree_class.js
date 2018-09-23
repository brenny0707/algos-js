const BinaryNode = function(nodeOptions) {
    this.data = nodeOptions.data;
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
      //
      4!
*/

//NON-BST node
const fourNonBSTNode = new BinaryNode({
  data: 4,
});
// const nineNonBSTNode = new BinaryNode({
//   data: 9,
// });



const oneNode = new BinaryNode({
  data: 1,
});
const threeNode = new BinaryNode({
  data: 3,
});
const twoNode = new BinaryNode({
  data: 2,
  left: oneNode,
  right: threeNode,
});
const fiveNode = new BinaryNode({
  data: 5,
  left: twoNode,
});
const eightNode = new BinaryNode({
  data: 8,
});
const thirteenNode = new BinaryNode({
  data: 13
});
const tenNode = new BinaryNode({
  data: 10,
  left: eightNode,
  right: thirteenNode
});
const sevenNode = new BinaryNode({
  data: 7,
  left: fiveNode,
  right: tenNode,
});


function isBST(node = sevenNode, min = null, max = null) {
  if (!node) return false;
  if (min && node.data < min) return false;
  if (max && node.data > max) return false;
  const leftChildBST = !node.left ?
                        true :
                        isBST(node.left, min, node.data);
  const rightChildBST = !node.right ?
                        true :
                        isBST(node.right, node.data, max);
  return (leftChildBST && rightChildBST);
}

console.log(isBST());
exports.sampleRootNode = sevenNode;
// export { BinaryNode, sevenNode as rootNode };
