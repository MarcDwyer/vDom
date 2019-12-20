import diff from "./diff";
import createElement from "./CreateElement";
import render from "./Render";
import mount from "./Mount";

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
          value: "maybe this isnt an input"
        }
      })
    ]
  });
let count = 0;
console.log(count);
let oldNode = createVapp(count);
let myEle = render(oldNode);
mount(myEle, "#root");

setInterval(() => {
  const newCount = Math.floor(Math.random() * 100);
  const newNode = {
    ...oldNode,
    children: [
      ...oldNode.children,
      createElement("span", {
        attrs: {
          innerHTML: String(newCount)
        }
      })
    ]
  };
  const patch = diff(oldNode, newNode);
  const resultNode = patch(myEle);
}, 5000);
