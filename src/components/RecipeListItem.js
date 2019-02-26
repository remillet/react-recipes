import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = (props) => {
  const {
    recipe, favorites, onClick, onFavorited,
  } = props;

  return (
    <li
      className="py1 border-bottom border-bottom-dashed pointer"
      key={recipe.id}
      onClick={() => onClick(recipe.id)}
    >
      <span
        role="img"
        aria-label="favorite"
        className="mr1"
        onClick={
          (e) => {
            e.stopPropagation(); // Prevent the click from bubbling up.
            onFavorited(recipe.id);
          }
        }
      >
        { !favorites.includes(recipe.id) ? '⌑' : '⭐'}
      </span>
      <span>{recipe.name}</span>
      <span> - </span>
      <span>{recipe.category}</span>
    </li>
  );
};

RecipeListItem.propTypes = {
  recipe: PropTypes.arrayOf(String).isRequired,
  favorites: PropTypes.arrayOf(String).isRequired,
  onClick: PropTypes.func.isRequired,
  onFavorited: PropTypes.func.isRequired,
};

export default RecipeListItem;
