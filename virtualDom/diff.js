import render from "./Render";

const zip = (xs, ys) => {
  const zipped = [];
  for (let i = 0; i < Math.max(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
};

const diffAttrs = (oldAttrs, newAttrs) => {
  const addAttrsPatches = Object.entries(newAttrs).map(([k, v]) => {
    return pNode => {
      pNode.setAttribute(k, v);
    };
  });

  const removeAttrPatches = [];
  for (const k in oldAttrs) {
    if (!(k in newAttrs)) {
      removeAttrPatches.push(pNode => pNode.removeAttribute(k));
    }
  }
  return pNode => {
    console.log(pNode);
    for (const addPatch of addAttrsPatches) {
      addPatch(pNode);
    }
    for (const removeAttrPatch of removeAttrPatches) {
      removeAttrPatch(pNode);
    }
  };
};
const diffChildren = (oldChildren, newChildren) => {
  const patchChildren = newChildren.map((child, i) =>
    diff(child, newChildren[i])
  );
  const patchAdditionalChildren = newChildren
    .slice(oldChildren.length)
    .map(child => pEle => pEle.appendChild(render(child)));

  return pNode => {
    for (const [patch, child] of zip(patchChildren, pNode.children)) {
      patch(child);
    }
    for (const patch of patchAdditionalChildren) {
      patch(pNode);
    }
    return pNode;
  };
};

const diff = (oldNode, newNode) => {
  console.log(oldNode);
  const patchChildren = diffChildren(oldNode.children, newNode.children);
  const patchAttrs = diffAttrs(oldNode.attrs, newNode.attrs);
  return element => {
    patchAttrs(element);
    patchChildren(element);
    return element;
  };
};

export default diff;
