import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://via.placeholder.com/150",
      ingredients: ["200g spaghetti", "100g pancetta", "2 eggs", "50g cheese", "Black pepper"],
      instructions: "Boil pasta. Cook pancetta. Mix eggs with cheese, then combine everything.",
    }
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
