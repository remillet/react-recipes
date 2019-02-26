import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

// console.log("The process.env.API_URL is: ", API_URL)

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      details: {
        id: '-1',
      },
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(json => this.setState({ recipes: json }))
      .catch(error => console.error('The error is: ', error));
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(json => this.setState({ details: json }))
      .catch(error => console.error('The error is: ', error));
  };

  //
  //  Toggle (mark/unmark) recipe list item as a favorite
  //
  toggleFavorite = (id) => {
    this.setState(({ favorites, ...state }) => {
      const index = favorites.indexOf(id);
      if (index !== -1) {
        const newState = {
          ...state,
          favorites: favorites.filter(f => f !== id),
        };
        return newState;
      }
      const newState = { ...state, favorites: [...favorites, id] };
      return newState;
    });
  };

  render() {
    const { recipes, details, favorites } = this.state;

    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            onFavorited={this.toggleFavorite}
          />
          <RecipeDetail className="ml4" details={details} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

export default Home;
