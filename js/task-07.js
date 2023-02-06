const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputElement.addEventListener("input", (e) => {
  textElement.style.fontSize = `${e.currentTarget.value}px`;
});
