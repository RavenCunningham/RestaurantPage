export function home() {
    let content = document.querySelector("#content");
    let h1 = document.createElement("h1");
    h1.innerText = "Home"
    content.appendChild(h1);
};