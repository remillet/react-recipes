import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {
  const { recipes, style, favorites } = props;

  return (
    <div style={style}>
      <h2 className="h2">Recipes</h2>
      <ul className="list-reset">
        {' '}
        {recipes.map(recipe => (
          <RecipeListItem recipe={recipe} favorites={favorites} {...props} />
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(String).isRequired,
  favorites: PropTypes.arrayOf(String).isRequired,
  style: PropTypes.object.isRequired,
};

export default RecipeList;
