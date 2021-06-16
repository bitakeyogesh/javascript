class Stack {
  count = 0;
  storage = {};

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const res = this.storage[this.count];
    delete this.storage[this.count];
    return res;
  }
  peek() {
    return this.storage[this.count - 1];
  }
  size() {
    return this.count;
  }
}

//--------------------------------------------------------------------------------
let stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
