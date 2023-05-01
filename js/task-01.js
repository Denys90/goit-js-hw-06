//Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// 3. Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName} (The number of elements: ${categoryItemsCount})`);
});
