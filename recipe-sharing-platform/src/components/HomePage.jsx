import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetching mock data
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
