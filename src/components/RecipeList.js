import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {
  const { recipes, style, favorites } = props;

  return (
    <div style={style}>
      <ul className="list-reset">
        {' '}
        {recipes.map(recipe => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            favorites={favorites}
            {...props}
          />
        ))}
      </ul>
    </div>
  );
};

RecipeList.defaultProps = {
  style: null,
  recipes: [],
  favorites: [],
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(Object),
  favorites: PropTypes.arrayOf(String),
  style: PropTypes.object,
};

export default RecipeList;
