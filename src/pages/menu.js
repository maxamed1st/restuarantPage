import { newElement } from "../DOM";
export default function menu() {
    let content = newElement("div", "content");
    let text = "MENU";
    content.textContent = text;
    return content;
}
