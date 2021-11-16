// Remove duplicates from sorted list

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Example 1:
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */

/**
 * grab the current node    I
 * grab the following node  II (let nextNode)
 * compare the 2 values
 * if not the same, move on (grab II and III)
 * if the same, grab the following node (III)
 * if node I and node III have diffrent values, assign I.next to node III
 * if node I and node III have the same, grab node IV
 */
