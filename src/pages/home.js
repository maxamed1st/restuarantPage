import { newElement } from "../DOM";
export default function home() {
    let content = newElement("div", "content");
    let text = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi. Voluptate, quidem quisquam";
    content.textContent = text;
    return content;
}
