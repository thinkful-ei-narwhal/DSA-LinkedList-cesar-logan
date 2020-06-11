const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){ 
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item,key){
    let currNode = this.head;
    let tempNode = this.head;
    while( currNode.next !== null ){
      if( currNode.next.value === key ){
        tempNode =new _Node(item, this.head);
        tempNode.next=currNode.next;
        currNode.next=tempNode;
        return;
      }
      currNode= currNode.next;
    }
  }

  insertAfter(item,key){
    let currNode = this.head;

    while( currNode.value !== key){
      currNode=currNode.next;
    }
    currNode.next=  new _Node(item, currNode.next);
  }

  insertAt(item,index){
    let currNode = this.head;
    for(let i = 1; i < index-1; i++) {
      currNode = currNode.next; 
    }
    currNode.next = new _Node(item, currNode.next);
  }

}

module.exports = LinkedList;