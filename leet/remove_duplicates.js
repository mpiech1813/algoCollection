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
 * address the case if last 2 nodes are the same (last node will be chopped off, secondToLastNode.next = null)
 * address the case if only 1 node is present
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [1];
// const arr = [1, 2];
// const arr = [1, 2, 3, 4, 4];
// const arr = [1,1,2,3,4,5,6]
const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6];

let myNode = new SinglyLinkedList();

arr.forEach((ele) => myNode.push(ele));
// myNode = new SinglyLinkedList().push(2);
// const node1 = new Node(1);
// const node2 = new Node(2);
// node1.next = node2;
// const node3 = new Node(3);
// node2.next = node3;
// const node4 = new Node(4);
// node3.next = node4;
// const node5 = new Node(5);
// node4.next = node5;

var deleteDuplicates = function (head) {
    // let currentNode = head.head;
    // let nextNode = currentNode.next;

    // console.log(nextNode.val);

    // if (nextNode.next === null) {
    //     console.log('null');
    // }

    // while (nextNode !== null) {
    // if (currentNode.value === nextNode.value) {
    // }
    // if (currentNode.val === nextNode.val) {
    //     // console.log('current node ', currentNode.val);
    //     // console.log('nextNode ', nextNode.val);
    //     // console.log('i triggered');
    //     nextNode = nextNode.next;
    // } else {
    //     // console.log('else current node ', currentNode.val);
    //     // console.log('else nextNode ', nextNode.val);
    //     currentNode.next = nextNode;
    //     currentNode = nextNode;
    //     nextNode = nextNode.next;
    // }
    // console.log(currentNode.val);
    // currentNode = nextNode;
    // nextNode = nextNode.next;
    // }
    if (!head || !head.next) return head;
    let currentNode = head;
    let nextNode = head.next;

    while (nextNode) {
        if (currentNode.val === nextNode.val) {
            currentNode.next = nextNode.next;
        } else {
            currentNode = nextNode;
        }
        nextNode = nextNode.next;
    }

    return head;
};

deleteDuplicates(myNode);

console.log(myNode.head.next.next.next.next.next);

/**
 * const deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  let currentNode = head;
  let nextNode = head.next;

  while (nextNode) {
    if (currentNode.val === nextNode.val) {
      currentNode.next = nextNode.next;
    } else {
      currentNode = nextNode;
    }

    nextNode = nextNode.next;
  }

  return head;
};
 */

/**
 *
 * Runtime: 92 ms, faster than 44.74% of JavaScript online submissions for Remove Duplicates from Sorted List.
 * Memory Usage: 40.8 MB, less than 47.76% of JavaScript online submissions for Remove Duplicates from Sorted List.
 *
 */
const deleteDuplicates = () => {
    let node = head;
    while (node && node.next) {
        if (node.val === node.next.val) {
            if (node.next.next) node.next = node.next.next;
            else node.next = null;
        } else {
            node = node.next;
        }
    }
    return head;
};
