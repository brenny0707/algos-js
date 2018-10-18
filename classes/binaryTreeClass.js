const BinaryNode = function(nodeOptions) {
  if (!nodeOptions) {
    this.val = null;
    this.left = null;
    this.right = null;
  }
  else {
    this.val = nodeOptions.val ? nodeOptions.val : null;
    this.left = nodeOptions.left ? nodeOptions.left : null;
    this.right = nodeOptions.right ? nodeOptions.right : null;
  }
};

module.exports = {
  BinaryNode: BinaryNode,
}
