// 1. Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// 2. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 3. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 4. Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

const onChangeValue = () => {
  value.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", onAddValueToCounter);

function onAddValueToCounter() {
  counterValue -= 1;
  onChangeValue();
}

refs.incrementBtn.addEventListener("click", onRemoveValue);

function onRemoveValue() {
  counterValue += 1;
  onChangeValue();
}
