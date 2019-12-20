const mount = (node, target) => {
  document.querySelector(target).replaceWith(node);
  return node;
};
export default mount;
