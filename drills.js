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
  return value;
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

function reverse(list) {
  let current= list.head;
  let previous= null;
  while(current !== null){
    let temp= current.next;//save next pointer
    current.next=previous;//change pointer
    previous=current;
    current=temp;//return saved pointer
  }
  list.head= previous;
  return list;
}

function thirdEnd(list) {
  let temp= list.head;
  let value;
  while(temp.next.next !== null){
    value=temp.value;
    temp=temp.next;
  }
  console.log(value);
}

function middle(list) {
  let end = list.head;
  let middle = list.head;

  while(end !== null && end.next !== null){
    end=end.next.next;
    middle= middle.next;
  }
  return middle.value;
}

function cycle(list) {
  let slow = list.head;
  let fast = list.head;
  let repeat = false;
  while((fast !== null) && (repeat !== true) && (fast.next !== null)){
    slow= slow.next;
    fast= fast.next.next;
    (fast===slow)? repeat=true:repeat=false;
  }
  return repeat;
}


function main() {
  const SLL = new LinkedList;
  const empty = new LinkedList;
  const cyclic = new LinkedList;
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
  //number 3
  console.log('///////////////3 display()//////////////');
  display(SLL);
  console.log('///////////////3 size()//////////////');
  console.log(size(SLL));
  console.log('///////////////3 isEmpty()//////////////');
  console.log(isEmpty(SLL));
  console.log(isEmpty(empty));
  console.log('///////////////3 findPrevious()//////////////');
  findPrevious(SLL,'Husker');
  console.log('///////////////3 findLast()//////////////');
  findLast(SLL);
  //4. Mystery program
  //A:it moves the poiner space foward Polynomial time O(n^k)

  //5. Reverse a list
  console.log('///////////////5 Reverse()//////////////');
  display(reverse(SLL));

  //6. 3rd from the end
  console.log('///////////////6 thirdEnd()//////////////');
  thirdEnd(SLL);

  //7. Middle of a list
  console.log('///////////////7 middle()//////////////');
  SLL.insertFirst('Tauhida');
  console.log(middle(SLL));

  //8. Cycle in a list
  console.log('///////////////8 cycle()//////////////');
  cyclic.insertFirst('lenin');
  cyclic.insertFirst('cesar');
  cyclic.insertFirst('morales');
  cyclic.head.next.next= cyclic.head;
  console.log(cycle(cyclic));
  console.log(cycle(SLL));
  //9.  Doubly linked list
  console.log('///////////////9 doubly()//////////////');

}

const mainRun = main();

