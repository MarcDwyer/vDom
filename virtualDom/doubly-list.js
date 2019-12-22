class FiberNode {
  constructor(fiber) {
    this.fiber = fiber;
    this.prev = null;
    this.next = null;
    this.children = fiber.children.length ? new List(this) : null;
  }
  print() {
    console.log(this);
  }
}
class List {
  constructor(hostNode) {
    console.log(hostNode);
    this.head = hostNode;
    this.tail = hostNode;
    this.length = 0;
    this.children = this.setList(hostNode.fiber.children);
  }
  setList(children) {
    // const { children } = this;
    let index = 0;
    let current = children[index];
    while (current) {
      const newNode = new FiberNode(children[index]);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      index++;
      this.length++;
      current = children[index];
      if (index > 100) {
        console.log("loop not ending");
        break;
      }
    }
  }
}
export { FiberNode, List };
