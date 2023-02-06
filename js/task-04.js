const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");
let currentValue = 0;
buttonDecrement.addEventListener("click", handleClickDecrementBtn);
buttonIncrement.addEventListener("click", handleClickIncrementBtn);
function handleClickDecrementBtn() {
  currentValue -= 1;
  return addMarkup(currentValue);
}
function handleClickIncrementBtn() {
  currentValue += 1;
  return addMarkup(currentValue);
}
function addMarkup(value) {
  return (valueEl.innerHTML = `${value}`);
}
