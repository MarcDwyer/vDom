const createElement = (tagName, { children = [], attrs = {} } = {}) => ({
  tagName,
  attrs,
  children
});
export default createElement;
