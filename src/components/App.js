import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Button from './Button';

// console.log("The process.env.API_URL is: ", API_URL)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
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
    }

    render() {
      const { recipes, details } = this.state;

      return (
        <div>
          <Header />
          <Button />
          <main className="px4 flex">
            <RecipeList
              recipes={recipes}
              style={{ flex: 3 }}
              onClick={this.onRecipeClick}
            />
            <RecipeDetail
              className="ml4"
              details={details}
              style={{ flex: 5 }}
            />
          </main>
        </div>
      );
    }
}

export default App;
