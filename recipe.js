/* eslint-disable */
const recipeArr = [
    {
        id: 1,
        name: 'Biryani',
        description: 'A delicious rice dish',
        ingredients: ['rice', 'chicken', 'spices', 'onions', 'tomatoes', 'yogurt'],
        directions: ['Cook rice', 'Cook chicken', 'Mix together'],
    },
    {},
    {},
];

const recipeSection = document.querySelector('.recipe-section');
const recipeDiv = document.createElement('div');
recipeDiv.classList.add('recipe');
recipeSection.appendChild(recipeDiv);

const heading = document.createElement('h2');
heading.classList.add('recipe-heading');
heading.textContent = 'Recipes';
recipeDiv.appendChild(heading);

recipeArr.forEach((recipe) => {
    
});