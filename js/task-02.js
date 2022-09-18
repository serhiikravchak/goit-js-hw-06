const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('item');
  newItemEl.textContent = ingredient;
  const newList = document.querySelector('#ingredients')
  newList.append(newItemEl)
}


