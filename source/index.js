import hello_word from "./hello.js";
import world_word from "./world.js";
import "./style.css";

const root = document.querySelector("#root");
root.innerHTML = hello_word + " " + world_word;
