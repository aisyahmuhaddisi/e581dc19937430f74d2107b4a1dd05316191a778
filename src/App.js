import React, {useEffect, useState} from 'react';
import NavBar from "./components/navbar";
import FoodList from "./components/FoodList";
import FoodCard from './components/FoodCard.js';
// import FoodList from './components/FoodList'
// import RecipeDetails from './components/RecipeDetails'


function App() {
  const url = `https://api.myjson.com/bins/t7szj`
  const [recipes, setRecipes] = useState([])
  const fetchRecipe = async () => {
    const recipeData = await fetch(url)
    const { recipes } = await recipeData.json()
    setRecipes(recipes)
  }
  useEffect(() => {
    fetchRecipe()
  })
  return (
    <div>
      <NavBar/>
      {recipes.map(recipe => (
        <FoodCard
        title={recipe.title}
        image_url={recipe.image_url}
        />
      ))}
    </div>
  );
}

export default App;
