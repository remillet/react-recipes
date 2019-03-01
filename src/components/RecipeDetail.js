import React from 'react';
// import TUNA_IMAGE from '../static/images/tuna.jpg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import md5 from 'md5';

const RecipeDetail = (props) => {
  const { details, style, className } = props;

  if (details == null || details.id === '-1') {
    return (
      <p
        style={style}
        className={
          classNames('h3 p2 bg-white italic center', className)
        }
      >
        Select a recipe on the left to see the details.
      </p>
    );
  }

  return (
    <div
      style={style}
      className={
        classNames('h3 p2 bg-white', className)
      }
    >
      <h2 className="h2 center">
        {details.name}
      </h2>
      <img alt="Food" className="fit" src={details.image} />
      <div>
        <span>Category: {details.category}</span>
        <br />
        <span>Calories: {details.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {
          details.ingredients.map(ingredient => (
            <li key={md5(ingredient)}>{ingredient}</li>
          ))
        }
      </ul>
      <h3>Cooking Instructions</h3>
      <ol>
        {
          details.steps.map(step => (
            <li key={md5(step)}>{step}</li>
          ))
        }
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
};

export default RecipeDetail;
