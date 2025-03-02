import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state
  favorites: [],
  recommendations: [],
  searchTerm: "", // Search term state

  setRecipes: (newRecipes) => set({ recipes: newRecipes }), // Function to update recipes

  setSearchTerm: (term) => set({ searchTerm: term }), // Function to update search term

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)),
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state;
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic: Suggest recipes similar to favorites (random selection)
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Filtered Recipes based on searchTerm
  filteredRecipes: () =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
