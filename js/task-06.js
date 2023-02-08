const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  textInput.classList.remove("invalid", "valid");
  if (textInput.value.trim().length === Number(textInput.dataset.length)) {
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
});
