/*
R:
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/*
E:
1)
Input: root = [3,9,20,null,null,15,7]
Output: 3

2)
Input: root = [1,null,2]
Output: 2
*/

/*
A:

- have a global variable to keep track of the longest branch, start at 1 point
- use the transversal method that checks for the left branch first
- create a local variable to keep track of the current progression 
- with each transversal we are going to add 1 point to the local variable
- if we are unable to travel downn to either left nor right we will compare local vs global. if local > global => global = local
- return global variable

*/
