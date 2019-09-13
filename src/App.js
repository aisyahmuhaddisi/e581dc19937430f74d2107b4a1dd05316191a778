import React, {useEffect, useState} from 'react';
import NavBar from "./components/navbar";
import Address from "./components/Address";
import FoodCard from './components/FoodCard.js';
import Tabs from './components/Tabs';


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
    <div className="App">
      <NavBar/>
      <Address/>
      <Tabs/>
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
