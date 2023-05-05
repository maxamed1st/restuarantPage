import { newElement } from "./DOM";
export function navbar(handleClick) {
    //create navbar and a list of the tabs
    let nav = newElement("nav", "nav");
    let ul = newElement("ul", "navlist");
    const liText = ["Home", "Menu", "About"];

    //Loop through liText array to create the tabs
    for(let i=0; i<3; i++) {
        let id = liText[i].toLowerCase();
        let li = newElement("li", liText[i], id);
        li.classList.add("navItem");
        li.addEventListener("click", handleClick);
        ul.appendChild(li);
    };
    
    //Append the unordered list to the navigation bar
    nav.appendChild(ul);

    return nav;

};

export function footer() {
    let foot = newElement("div", "Footer", "©2023 Restaurant");
    return foot;
}
