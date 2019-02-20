import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

console.log("The process.env.API_URL is: ", API_URL)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            details: null
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                recipes: json
            })
        })
        .catch(error => console.log("The error is: ", error));
    }

    onRecipeClick = (id) => {
        console.log(`Recipe ${id} clicked on.`)
        fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                details: json
            })
        })
        .catch(error => console.log("The error is: ", error));
    }    

    render() {
        console.log(this.props);
        const { recipes, details } = this.state;

        return (
            <div>
                <Header />
                <main style={{ display: 'flex' }}>
                    <RecipeList 
                        recipes={recipes} 
                        style={{ flex: '3' }}
                        onClick={this.onRecipeClick}
                    />
                    <RecipeDetail
                        details={details}
                        style={{ flex: '5' }} />
                </main>
            </div>
        );
    }
}

export default App;