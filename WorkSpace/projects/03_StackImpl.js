// Stack :: Using no built in functions -> ES6 Standards

//Class -> Stack
//Push
//Pop
//Peek

class Stack {
  constructor() {
    this.array = new Array();
    this.count = -1;
  }

  peek() {
    if (this.count == -1) {
      throw new Error("No elements in the stack!");
    }
    return this.array[this.count];
  }

  push(element) {
    if (this.count == 5) {
      throw new Error("Stack Overflow!");
    }
    this.array[this.count++] = element;
    return this.array[this.count];
  }

  pop() {
    if (this.count == -1) {
      throw new Error("No element in the stack");
    }
    let removedElement = this.array[this.count - 1];
    this.count--;
    return removedElement;
  }

  display() {
    console.log("Stack Size is :- ", this.count);

    let index = this.count;
    while (index-- >= 0) {
      console.log(this.array[index], " ");
    }
  }
}

const stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");

stack.display();

const poppedElement = stack.pop();
console.log("Poppped Element is:- ", poppedElement);
stack.display();
