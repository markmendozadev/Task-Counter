export const createElement = (element) => {
  return document.createElement(element);
};
export const appendElement = (parent, child) => {
  return parent.appendChild(child);
};
export const prependElement = (parent, child) => {
  return parent.prepend(child);
};
export const addClass = (element, className) => {
  return element.classList.add(className);
};
export const removeClass = (element, className) => {
  return element.classList.remove(className);
};
export const addElementId = (element, id) => {
  return (element.id = id);
};
