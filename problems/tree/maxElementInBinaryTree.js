class Node {
  constructor(data) {
    this.left = this.right = null;
    this.data = data;
  }
}

const root = new Node(4);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(8);
root.left.right = new Node(9);
root.right.left = new Node(10);
root.right.right = new Node(11);

/**
         4
    3       7 
  8   9  10  11
 
  */
const maxElement = findMaxElementInBinaryTree(root);
console.log(maxElement);

// find max element in binary tree
function findMaxElementInBinaryTree(root) {
  if (root === null) {
    return Number.MIN_VALUE;
  }
  let res = root.data;
  let leftRes = findMaxElementInBinaryTree(root.left);
  let rightRes = findMaxElementInBinaryTree(root.right);
  if (leftRes > res) {
    res = leftRes;
  }

  if (rightRes > res) {
    res = rightRes;
  }
  return res;
}
