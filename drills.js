const LinkedList = require('./linkedlist.js');


function main() {
  const SLL = new LinkedList;
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
}

const mainRun = main();

