// 1. Напиши скрипт, який для кожного елемента масиву ingredients:
// 2. Створить окремий елемент <li>. Обов'язково використовуй метод
//    document.createElement().
// 3. Додасть назву інгредієнта як його текстовий вміст.
// 4. Додасть елементу клас item.
// 5. Після чого, вставить усі <li> за одну операцію у список //
//    ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const onFindUl = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.classList.add("item");
  return createLi;
});

onFindUl.append(...markup);
