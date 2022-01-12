/*
R: 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

E:
Input: p = [1,2,3], q = [1,2,3]
Output: true

                  1                                        1
            2           3                               2       3



Input: p = [1,2], q = [1,null,2]
Output: false

                1                                           1
            2                                                   2


            
Input: p = [1,2,1], q = [1,1,2]
Output: false

                1                                           1
            2       1                                   1       2



Input: p = [1,2,3], q = [1,2]
Output: false

                1                                           1
            2       3                                   2       



A:

- Select the first node in each of the trees
- First function: compare the values of the 2 nodes: if the same pass to the next function, if not return false
- Second function: check if current nodes (from both trees) have left branch, if both do pass the left nodes to the first function, if one 
does not: return false, then do the same for right branch
- Return true at if false was never encountered
*/

// Code:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isSameTree = function (p, q) {
  if (p.val !== q.val) {
    return false;
  } else if (p.left !== null && q.left !== null) {
    isSameTree(p.left, q.left);
  } else if (p.right !== null && q.right !== null) {
    isSameTree(p.right, q.right);
  }
};
