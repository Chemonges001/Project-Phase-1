
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
    if (searchInput) {
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
        )
          .then((res) => res.json())
          .then((data) => {
      
        
            cocktailOutput.innerHTML = `<h2>Here is your ${searchInput}:</h2>`;
    
           
            if (data.drinks === null) {
              cocktailsElement.innerHTML = '';
              cocktailOutput.innerHTML = `<h2>No results for '${searchInput}'.</h2>`;
    
           
            } else {
              cocktailsElement.innerHTML = data.drinks
                .map(
                  (cocktail) => `
                    <div class="drinks">
                        <img src="${cocktail.strDrinkThumb}" alt= "${cocktail.strDrink}" />
                        <div class="cocktail-info" data-cocktailID="${cocktail.idDrink}">
                            <h3>${cocktail.strDrink}</h3>
                            <h4>${cocktail.strCategory}</h4>
                            <p class ="instructions"><span id='inst'>Instructions:</span> ${cocktail.strInstructions}</p>
    
                        </div>
    
                    </div>
                    `
                )
                .join('');
            }
          });
    
        
    
        search.value = '';
      } else {
      
        alert("INVALID REQUEST");
        return 
      }
    };
    submit.addEventListener('submit', searchCocktail);


    const getCocktailInfo = (e) => {
      const cocktailInfo = e.path.find((item) => {
       
        if (item.classList) {
          return item.classList.contains('cocktail-info');
        } else {
          return false;
        }
      });
    
      if (cocktailInfo) {
     
        const cocktailID = cocktailInfo.getAttribute('data-cocktailID');
      
        getCocktailInfo(cocktailID);
      }
      
    }