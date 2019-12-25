import createElement from "./CreateElement";
import { FiberNode, link } from "./doubly-list";

const createVApp = counter => [
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
        },
        children: [
          createElement("span", {
            attrs: {
              id: "this is a random span",
              innerHTML: "it is i"
            }
          })
        ]
      }),
      createElement("input", {
        attrs: {
          value: "maybe this isnt an input"
        }
      })
    ]
  })
];

const rootNode = createElement("div", {
  attrs: {
    id: "root"
  }
});

const result = link(rootNode, createVApp(3));
console.log(result);
