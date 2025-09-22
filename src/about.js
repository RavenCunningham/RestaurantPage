export function about() {
    let content = document.querySelector("#content");
    let h1 = document.createElement("h1");
    h1.innerText = "About"
    content.appendChild(h1);
};