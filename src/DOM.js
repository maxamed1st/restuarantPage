export function newElement(element, id, content=false, node=false) {
    //create new element and append to node
    let el = document.createElement(element);
    el.setAttribute('id', id);
    if (content) {
        //if content is passed, set it as textContent
        el.textContent = content;
    }
    if (node) {
        //if node is passed, append element to node
        node.appendChild(el);
    }
    return el;
}

export function clearNode(node) {
    //remove all children from node
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    return node;
}
