const createElement = (tagName, { children = {}, attrs = {} } = {}) => ({
  tagName,
  attrs,
  children
});

const vDom = createElement("div", {
  attrs: {
    id: "stop-me",
    class: "who-dis"
  },
  children: ["hello world"]
});
const render = vNode => {
  const ele = document.createElement(vNode.tagName);
  for (const [k, v] of Object.entries(vNode.attrs)) {
    console.log({ k, v });
    ele.setAttribute(k, v);
  }
  for (const child of vNode.children) {
    const subChild = render(child);
    ele.appendChild(subChild);
  }
  return ele;
};
render(vDom);
