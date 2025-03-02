import { Link } from 'react-router-dom';
import useRecipeStore from '..recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? <p>No recipes available. Add one!</p> : null}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ margin: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}><button>View Details</button></Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
