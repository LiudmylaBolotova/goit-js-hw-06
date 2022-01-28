const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');


ingredients.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');

    ingredientsEl.append(itemEl);
});