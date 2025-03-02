import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      deleteRecipe(recipeId);
      alert("Recipe deleted!");
      navigate("/"); // Redirects to the home page after deletion
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      style={{
        marginTop: "10px",
        background: "red",
        color: "white",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
