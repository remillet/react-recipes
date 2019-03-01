import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        id: '-1',
      },
    };
  }

  componentDidMount() {
    const { match } = this.props;

    if (Object.keys(this.props).length !== 0) {
      const { id } = match.params;

      fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(json => this.setState({ details: json }))
        .catch(error => console.error('The error is: ', error));
    }
  }

  render() {
    return (
      <RecipeDetail {...this.state} />
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Recipe;
