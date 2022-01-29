const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');


ingredients.map(ingredient => {
  const itemOnIngredientsEl = document.createElement('li');
  console.log(itemOnIngredientsEl);
  itemOnIngredientsEl.textContent = ingredient;
  itemOnIngredientsEl.classList.add('item');
  ingredientsEl.append(itemOnIngredientsEl);
})
