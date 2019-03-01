import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(json => this.setState({ recipes: json }))
      .catch(error => console.error('The error is: ', error));
  }

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
    const { state } = this;

    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  onFavorited={this.toggleFavorite}
                  {...state}
                />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  onFavorited={this.toggleFavorite}
                  {...state}
                  recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
                />
              )}
            />
            <Route
              path="/recipe/:id"
              component={Recipe}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
