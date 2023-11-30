const recipeArr = [
  {
    id: 1,
    name: 'Biryani',
    description: 'A delicious rice dish',
    ingredients: ['rice', 'chicken', 'spices', 'onions', 'tomatoes', 'yogurt'],
    directions: ['Cook rice', 'Cook chicken', 'Mix together'],
  },
  {
    id: 2,
    name: 'Chicken Fried Rice',
    description: 'A delicious rice dish',
    ingredients: ['rice', 'chicken', 'spices', 'onions', 'tomatoes', 'yogurt'],
    directions: ['Cook rice', 'Cook chicken', 'Mix together'],
  },
  {
    id: 3,
    name: 'Chicken Curry',
    description: 'A delicious rice dish',
    ingredients: ['rice', 'chicken', 'spices', 'onions', 'tomatoes', 'yogurt'],
    directions: ['Cook rice', 'Cook chicken', 'Mix together'],
  },
];

function display() {
  const recipeSection = document.querySelector('.recipe-section');
  recipeSection.innerHTML = ''; // Clear the existing content
  const recipeDiv = document.createElement('div');
  recipeDiv.classList.add('recipe');
  recipeSection.appendChild(recipeDiv);

  const heading = document.createElement('h2');
  heading.classList.add('recipe-heading');
  heading.textContent = 'Recipes';
  recipeDiv.appendChild(heading);

  const recipeListDiv = document.createElement('div');
  recipeListDiv.classList.add('recipe-list');
  recipeDiv.appendChild(recipeListDiv);

  recipeArr.forEach((recipe, index) => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe-item');
    recipeListDiv.appendChild(recipeItem);

    const recipeName = document.createElement('h3');
    recipeName.classList.add('recipe-name');
    recipeName.textContent = recipe.name;
    recipeItem.appendChild(recipeName);

    const recipeDescription = document.createElement('p');
    recipeDescription.classList.add('recipe-description');
    recipeDescription.textContent = recipe.description;
    recipeItem.appendChild(recipeDescription);

    const recipeIngredients = document.createElement('ul');
    recipeIngredients.classList.add('recipe-ingredients');
    recipeItem.appendChild(recipeIngredients);

    recipe.ingredients.forEach((ingredient) => {
      const recipeIngredient = document.createElement('li');
      recipeIngredient.classList.add('recipe-ingredient');
      recipeIngredient.textContent = ingredient;
      recipeIngredients.appendChild(recipeIngredient);
    });

    const recipeDirectionsHeading = document.createElement('h4');
    recipeDirectionsHeading.classList.add('recipe-directions-heading');
    recipeDirectionsHeading.textContent = 'Directions to Cook';
    recipeItem.appendChild(recipeDirectionsHeading);

    const recipeDirections = document.createElement('ol');
    recipeDirections.classList.add('recipe-directions');
    recipeItem.appendChild(recipeDirections);

    recipe.directions.forEach((direction) => {
      const recipeDirection = document.createElement('li');
      recipeDirection.classList.add('recipe-direction');
      recipeDirection.textContent = direction;
      recipeDirections.appendChild(recipeDirection);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete Recipe';
    /*eslint-disable */
    deleteButton.addEventListener('click', () => deleteRecipe(index));
    /* eslint-enable */
    recipeItem.appendChild(deleteButton);
  });
}

display();

function deleteRecipe(recipeIndex) {
  recipeArr.splice(recipeIndex, 1);
  display();
}
/*eslint-disable */
function addRecipe() {
/* eslint-enable */
  const recipeForm = document.getElementById('recipe-form');

  const newRecipe = {
    id: recipeArr.length + 1,
    name: recipeForm.querySelector('#recipe-name').value,
    description: recipeForm.querySelector('#recipe-description').value,
    ingredients: recipeForm.querySelector('#recipe-ingredients').value.split(',').map((item) => item.trim()),
    directions: recipeForm.querySelector('#recipe-directions').value.split('\n').map((item) => item.trim()),
  };

  recipeArr.push(newRecipe);

  // Clear form fields
  recipeForm.reset();

  // Update the displayed recipes
  display();
}