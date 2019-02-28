import React from 'react';
import RecipeList from './RecipeList';

const Favorites = props => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList {...props} />
  </div>
);

export default Favorites;
