
const submit = document.getElementById('submit');

const search = document.getElementById('search');

const cocktailsElement = document.getElementById('cocktails');
const cocktailOutput= document.getElementById('output-heading');
const selectedCocktail = document.getElementById('selected-cocktail');

const searchCocktail = (e) => {
 
    e.preventDefault();
  
   
    cocktailsElement.innerHTML = '';
    selectedCocktail.innerHTML = '';
  
   
    const searchInput = search.value;
   