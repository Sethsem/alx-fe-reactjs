import React from 'react';
import useRecipeStore from '.recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        backgroundColor: isFavorite ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {isFavorite ? '★ Favorited' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;
