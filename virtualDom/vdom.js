const createElement = (tagName, { children = [], attrs = {} } = {}) => ({
  tagName,
  attrs,
  children
});

const vDom = createElement("div", {
  attrs: {
    id: "stop-me",
    class: "who-dis"
  },
  children: [
    createElement("img", {
      attrs: {
        src: "https://media.giphy.com/media/2XskdWuNUyqElkKe4bm/giphy.gif"
      }
    })
  ]
});
const render = vNode => {
  const ele = document.createElement(vNode.tagName);
  console.log(vNode);
  for (const [k, v] of Object.entries(vNode.attrs)) {
    ele.setAttribute(k, v);
  }
  for (const child of vNode.children) {
    const subChild = render(child);
    ele.appendChild(subChild);
  }
  return ele;
};
const root = document.querySelector("#root");
root.appendChild(render(vDom));
