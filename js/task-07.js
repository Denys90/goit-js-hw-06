//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

function onChangeSizeSpan(e) {
  const fontSize = e.target.value + "px";
  refs.span.style.fontSize = fontSize;
}

refs.input.addEventListener("input", onChangeSizeSpan);
