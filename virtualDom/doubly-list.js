class FiberNode {
  constructor(fiber) {
    console.log(fiber);
    this.fiber = fiber;
    this.child = {};
    this.sibling = {};
    this.parent = null;
  }
}

function link(parent1, node) {
  const parent = new FiberNode(parent1);
  let index = 0;
  let current = node[index];
  let prevNode = null;
  while (current) {
    let fiberNode = new FiberNode(current);
    const { childrenArray } = fiberNode;
    fiberNode.parent = parent;
    if (childrenArray.length) {
      fiberNode.child = link(current, fiberNode.childrenArray);
    }
    if (prevNode) fiberNode.sibling = prevNode;
    prevNode = fiberNode;
    parent.child = fiberNode;
    index++;
    current = node[index];
  }
  return parent;
}

export { FiberNode, link };
