/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    let finalList = new ListNode(0);
    let sum = 0;
    let result = finalList;

    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        finalList.next = new ListNode(sum % 10);
        finalList = finalList.next;
        sum = sum > 9 ? 1 : 0;
    }

    if (sum) {
        finalList.next = new ListNode(sum);
    }

    return result.next;
};
