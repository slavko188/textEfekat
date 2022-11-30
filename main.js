const textDiv = document.querySelector("#main_text");
const inputEl = document.querySelector("#speed");

let text = "Dobrodosli na posao";
let i = 1;
let speed = 1000;

const writeText = function () {
  textDiv.innerHTML = text.slice(0, i);
  i++;

  // kad text dodje do kraja da ga vrati na pocetak.
  if (i > text.length) {
    i = 1;
  }

  setTimeout(writeText, speed);
};

writeText();

inputEl.addEventListener("input", (e) => {
  speed = 1000 / e.target.value;
});
