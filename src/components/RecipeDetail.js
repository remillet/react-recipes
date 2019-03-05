import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import md5 from 'md5';

const RecipeDetail = (props) => {
  const {
    details, style, className, linkTo,
  } = props;

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
          details.ingredients && details.ingredients.map(ingredient => (
            <li key={md5(ingredient)}>{ingredient}</li>
          ))
        }
      </ul>
      <h3>Cooking Instructions</h3>
      <ol>
        {
          details.steps && details.steps.map(step => (
            <li key={md5(step)}>{step}</li>
          ))
        }
      </ol>
      <Link to={linkTo}>
        More info...
      </Link>
    </div>
  );
};

RecipeDetail.defaultProps = {
  details: null,
  linkTo: '/',
  style: null,
  className: null,
};

RecipeDetail.propTypes = {
  linkTo: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  details: PropTypes.object,
};

export default RecipeDetail;
