const render = vNode => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  return renderElem(vNode);
};
const renderElem = vNode => {
  const { tagName, children, attrs } = vNode;
  const ele = document.createElement(tagName);

  for (const [k, v] of Object.entries(attrs)) {
    ele.setAttribute(k, v);
  }
  for (const child of children) {
    const subChild = render(child);
    ele.appendChild(subChild);
  }
  return ele;
};

export default render;
