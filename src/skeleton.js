const newElement = function(type, text=null) {
    //create new element of type and return the element
    const element = document.createElement(type);
    //if a text is passed add it to the element
    if(text !== null) {
        element.textContent = text;
    };
    return element;
};
const navbar = function() {
    //create navbar and a list of the tabs
    let nav = newElement("nav");
    let ul = newElement("ul");
    const liText = ["Home", "Menu", "Text"];

    //Loop through liText array to create the tabs
    for(let i=0; i<3; i++) {
        let li = newElement("li", liText[i]);
        li.classList.add("navItem");
        ul.appendChild(li);
    };
    
    //Add id to the unordered list and append to the navigation bar
    ul.setAttribute("id", "navList");
    nav.appendChild(ul);

    return nav;

};
const skeleton = function() {
    //create a skeleton for a restaurant page that can be used on all pages
    return navbar();
}
export default skeleton;