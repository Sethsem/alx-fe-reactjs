import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Recipe Sharing Platform</h1>

      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add a Recipe
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="mt-3 inline-block text-blue-600 hover:underline">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
