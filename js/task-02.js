const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("ul#ingredients");
console.log(list);

let item = ingredients.map((ingredient) => {
  let createItem = document.createElement("li");
  createItem.setAttribute("class", "item");
  createItem.textContent = ingredient;
  return createItem;
});
list.append(...item);
