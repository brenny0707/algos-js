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
*/
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

exports.sampleRootNode = sevenNode;
// export { BinaryNode, sevenNode as rootNode };
