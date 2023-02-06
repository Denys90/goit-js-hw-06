const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
  if (inputEl.value === "") {
    return (spanEl.textContent = "Anonymous");
  }
  spanEl.textContent = event.currentTarget.value;
});
