class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    root: TreeNode | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: number): void {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      this.insertNode(this.root, newNode);
    }
  
    private insertNode(root: TreeNode, newNode: TreeNode): void {
      if (newNode.value < root.value) {
        if (!root.left) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (!root.right) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    search(value: number): boolean {
      return this.searchNode(this.root, value);
    }
  
    private searchNode(root: TreeNode | null, value: number): boolean {
      if (!root) {
        return false;
      }
  
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.searchNode(root.left, value);
      } else {
        return this.searchNode(root.right, value);
      }
    }
  
    inOrderTraversal(): number[] {
      const result: number[] = [];
      this.inOrderTraversalNode(this.root, result);
      return result;
    }
  
    private inOrderTraversalNode(root: TreeNode | null, result: number[]): void {
      if (root) {
        this.inOrderTraversalNode(root.left, result);
        result.push(root.value);
        this.inOrderTraversalNode(root.right, result);
      }
    }
  }
  
  // Example:
  const bst = new BinarySearchTree();
  
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);
  
  console.log(bst.search(7)); // Output: true
  console.log(bst.search(9)); // Output: false
  
  console.log(bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 12, 15, 18]
  console.log(JSON.stringify(bst.root, null, 2));