/*
a data structure that contains a head tail and length property. Consists of nodes (elements), and each node has a value and a pointer to another node or null. There is no index, so inserting and deleting doesnt require a new index for every element after. Accessing one element is more costly than arrays though. 

A singly linked list stores a node of data - val
and a reference to the next node - next
*/

//push model
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//sinly linked list has pointer to head tail and length:
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {}
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("goodbye");
