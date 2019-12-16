const createElement = (tagName, { children = [], attrs = {} } = {}) => ({
  tagName,
  attrs,
  children
});

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

const createVapp = counter =>
  createElement("div", {
    attrs: {
      id: "stop-me",
      class: "who-dis",
      counter: String(counter)
    },
    children: [
      createElement("img", {
        attrs: {
          src: "https://media.giphy.com/media/2XskdWuNUyqElkKe4bm/giphy.gif"
        }
      }),
      createElement("input", {
        attrs: {
          value: "barn"
        }
      }),
      "hello world"
    ]
  });
let count = 0;
let myEle = render(createVapp(count));
const mount = (node, target) => {
  const ele = document.querySelector(target);
  ele.replaceWith(node);
};

mount(myEle, "#root");

// setInterval(() => {
//   count++;
//   myEle = render(createVapp(count));
//   mount(myEle, "div.who-dis");
// }, 2500);
