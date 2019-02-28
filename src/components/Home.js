import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

// console.log("The process.env.API_URL is: ", API_URL)

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        id: '-1',
      },
    };
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(json => this.setState({ details: json }))
      .catch(error => console.error('The error is: ', error));
  };

  render() {
    const { recipes, favorites, onFavorited } = this.props;
    const { details } = this.state;

    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={onFavorited}
            />
          </div>
          <RecipeDetail className="ml4" details={details} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.arrayOf(String).isRequired,
  favorites: PropTypes.arrayOf(String).isRequired,
  onFavorited: PropTypes.func.isRequired,
};

export default Home;
