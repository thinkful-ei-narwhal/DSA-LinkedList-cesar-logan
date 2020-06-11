class _Node {
  constructor(value, next, prev) {
    this.value=value,
    this.next=next,
    this.prev = prev;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item){
    let newNode = new _Node(item, this.head, null);
    if(this.head !== null ){
      this.head.prev = newNode;
    } 
    this.head = newNode;
    if(this.tail === null){ 
      this.tail = newNode;
    }
  }
  insertLast(item){
    let newNode = new _Node(item, null, this.tail);
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null ){
      this.head = newNode;
    } 
  }  
  insertAfter(item, prevItem){ 
    let currentNode = this.head;
    while(currentNode.value !== prevItem){
      if(currentNode === null){
        console.log('Item not found');
        return;
      } 
      currentNode = currentNode.next;
    }
    if(currentNode === this.last){
      this.insertLast(item);
    }
    else{
      let newNode = new _Node(item,currentNode.next,currentNode); 
      newNode.next = currentNode.next; 
      newNode.prev = currentNode; 
      currentNode.next.previous = newNode; 
      currentNode.next = newNode; 
    }
  }
  remove(item){
    if (!this.head){
      return null;
    }
    let current = this.head;
    while(current.value !== item){
      current = current.next;
      if(current === null){
        console.log('Item to remove is not on the list');
        return null;
      }   
    }

    if(current === this.head){
      this.head = current.next;
    } else{
      current.prev.next = current.next;
    }

    if(current === this.tail){
      this.tail = current.prev;
    } else{
      current.next.prev = current.prev;
    }
  }
} 

function display(list) {
  let temp= list.head;
  while(temp !== null){
    console.log(temp.value);
    temp=temp.next;
  }
}

function reverse(list) {
  let current= list.head;
  let previous= null;
  while(current !== null){
    let temp= current.next;
    current.next=previous;
    current.prev=temp;//added this
    previous=current;
    current=temp;
  }
  previous=list.head;//added this
  list.head = list.tail;
  list.tail = previous;//added this
  return list;
}
  
  

function main() {
  const SLL = new DLinkedList;
  SLL.insertFirst('Aquaria');
  SLL.insertFirst('Caprica');
  SLL.insertFirst('Gemenon');
  SLL.insertFirst('Picon');
  SLL.insertFirst('Sagittaron');
  SLL.remove('Picon');
  console.log(SLL);
  display(SLL);
  //10. Reverse a DLL
  console.log('///////////////10 Reverse()//////////////');
  display(reverse(SLL));
  console.log(SLL);
}

const mainRun = main();