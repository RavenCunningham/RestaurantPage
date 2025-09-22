
import "./styles.css";

import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";


function clearContent() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
}

let homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    clearContent()
    home();
});

let menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    clearContent()
    menu();
});

let aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
    clearContent()
    about();
});
console.log("index.js");