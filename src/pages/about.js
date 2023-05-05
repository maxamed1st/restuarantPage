import { newElement } from "../DOM";
export default function about() {
    let content = newElement("div", "content");
    let text = "ABOUT";
    content.textContent = text;
    return content;
}
