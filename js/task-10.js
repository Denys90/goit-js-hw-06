// 1. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку - <Створити>, після чого рендериться колекція. Натисненням на кнопку <Очистити>, колекція елементів очищається.

// 2. Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 3. Розміри найпершого <div> - 30px на 30px.

// 4. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

// 5. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// 6. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  creatBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.creatBtn.addEventListener("click", onCreateCollectionOfBoxes);
refs.destroyBtn.addEventListener("click", destroyBox);

function onCreateCollectionOfBoxes() {
  let arreyBoxes = [];

  const numberBox = refs.input.value;
  const boxColor = getRandomHexColor();

  for (let i = 0; i < numberBox; i += 1) {
    const newbox = document.createElement("div");

    newbox.style.width = `${30 + i * 10}px`;
    newbox.style.height = `${30 + i * 10}px`;
    newbox.style.backgroundColor = boxColor;

    arreyBoxes.push(newbox);
  }
  refs.boxes.append(...arreyBoxes);
}

function destroyBox() {
  refs.input.innerHTML = "";
  refs.boxes.innerHTML = "";
}
