const LinkedList = require('./linkedlist.js');

function display(list) {
  let temp= list.head;
  while(temp !== null){
    console.log(temp.value);
    temp=temp.next;
  }
}

function size(list) {
  let temp= list.head;
  let value=0;
  while(temp !== null){
    temp=temp.next;
    value++;
  }
  console.log(value);
}

function isEmpty(list) {
  let temp= list.head;
  if(temp !== null){
    return false;
  }else{
    return true;
  }
}

function findPrevious(list, key) {
  let temp= list.head;
  let previous;
  while(temp !== null){
    if(temp.value !== key){
      previous=temp.value;
    }
    (temp.value === key)? temp=null : temp=temp.next;
  }
  console.log(previous);
}

function findLast(list) {
  let temp= list.head;
  let value;
  while(temp !== null){
    value=temp.value;
    temp=temp.next;
  }
  console.log(value);
}

function main() {
  const SLL = new LinkedList;
  const empty = new LinkedList;
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  console.log(SLL);
  SLL.insertBefore('Athena','Boomer');
  console.log(SLL.find('Athena'));
  SLL.insertAfter('Hotdog','Helo');
  console.log(SLL.find('Helo'));
  SLL.insertAt('Kat',3);
  console.log(SLL.find('Starbuck'));
  SLL.remove('Tauhida');
  console.log('///////////////3 display()//////////////');
  display(SLL);
  console.log('///////////////3 size()//////////////');
  size(SLL);
  console.log('///////////////3 isEmpty()//////////////');
  console.log(isEmpty(SLL));
  console.log(isEmpty(empty));
  console.log('///////////////3 findPrevious()//////////////');
  findPrevious(SLL,'Husker');
  console.log('///////////////3 findLast()//////////////');
  findLast(SLL);
}

const mainRun = main();

