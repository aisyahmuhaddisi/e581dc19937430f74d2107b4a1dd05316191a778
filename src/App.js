import React from 'react';
import NavBar from "./components/navbar";
import FoodCard from "./components/FoodCard";
// import FoodList from './components/FoodList'
// import RecipeDetails from './components/RecipeDetails'


function App() {
  // const url = `https://api.myjson.com/bins/t7szj`
  
  return (
    <div className="App">
      <NavBar/>
      <FoodCard/>
    </div>
  );
}

export default App;
