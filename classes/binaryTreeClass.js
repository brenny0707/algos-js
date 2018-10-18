const BinaryNode = function(nodeOptions) {
  if (!nodeOptions) {
    this.val = null;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  else {
    this.val = nodeOptions.val ? nodeOptions.val : null;
    this.left = nodeOptions.left ? nodeOptions.left : null;
    this.right = nodeOptions.right ? nodeOptions.right : null;
    this.parent = nodeOptions.parent ? nodeOptions.parent : null;
  }
};

module.exports = {
  BinaryNode: BinaryNode,
}
