import hello_word from "./hello.js";
import world_word from "./world.js";
import "./style.css";

document.querySelector("#root").innerHTML = world_word + " " + hello_word;
