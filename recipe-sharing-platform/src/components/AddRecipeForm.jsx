import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Convert ingredients to an array
    const ingredientsArray = ingredients.split(",").map((item) => item.trim());

    if (ingredientsArray.length < 2) {
      setError("Please add at least two ingredients.");
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 50) + "...", // Short summary
      image: "https://via.placeholder.com/150", // Placeholder image
      ingredients: ingredientsArray,
      instructions: steps,
    };

    // Pass the new recipe to the parent component
    onAddRecipe(newRecipe);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
