import "./style.scss";

const root = document.querySelector("#root");


async function getComponent() {
  try {
    const { default: hello_word } = await import('./hello.js');
    const { default: word_hello } = await import ('./world.js');
    return word_hello + " " + hello_word;
  } catch (err) {
    console.error(err);
  }
}

getComponent().then(word => {
  root.innerHTML = word;
});