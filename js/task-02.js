const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemOnIngredientsEl = document.createElement("li");

  itemOnIngredientsEl.textContent = ingredient;
  itemOnIngredientsEl.classList.add("item");
  return itemOnIngredientsEl;
});
ingredientsEl.append(...elements);
console.log(ingredientsEl);
