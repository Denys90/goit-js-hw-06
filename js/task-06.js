// 1. Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// 2. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 3. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// 4. Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onColorInvalid);

function onColorInvalid(e) {
  const inputValue = e.target.value.length;
  const testValue = Number(refs.input.dataset.length);

  if (inputValue === testValue) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  }
}
