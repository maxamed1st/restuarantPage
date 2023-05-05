import "./style.css";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import { navbar, footer } from "./skeleton";
import { clearNode } from "./DOM";
let container = document.getElementById('container');
function handleClick(e) {
    clearNode(container);
    let target = e.target.id.toLowerCase();
    switch (target) {
        case 'home':
            main(home);
            break;
        case 'menu':
            main(menu);
            break;
        case 'about':
            main(about);
            break;
        default:
            main(home);
            break;
    };
}
function main(content) {
    let nav = navbar(handleClick);
    content = content();
    let foot = footer();
    container.appendChild(nav);
    container.appendChild(content);
    container.appendChild(foot);
}
main(home)